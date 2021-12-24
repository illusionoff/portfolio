const { Router } = require('express');
const router = Router();
const saveBD = require('../db/services/serviceSaveBD');
const { check, validationResult, body } = require('express-validator'); // body дополнительно взял
const { validationName } = require('./validation/validationName');
const { validationMessage } = require('./validation/validationMessage');
const nodemailer = require("nodemailer");
const regEmail = require("../mail/message");
const config = require('config');
const fetch = require('node-fetch');

const transporter = nodemailer.createTransport(config.get('GMAIL_SETTINGS'));
const EMAIL1 = config.get('EMAIL_TO')[0];
const EMAIL2 = config.get('EMAIL_TO')[1];

router.post('/',
  validationName(),
  validationMessage()
  , async function (req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          // message: 'Некорректный данные при регистрации'
          message: errors.array()[0].msg
        })
      }

      const { name } = req.body
      let { message } = req.body
      console.log('routerMessage name', name);
      console.log('routerMessage name', message);
      const response = await saveBD.insertBD(name, message);
      // !!! использовал раньше "res.json(await quotes.insertBD(name, message))" что вызывало ошибку, потому что уже res дали ответ и пытаюсь получается повторно отсылаю ответ браузеру
      if (!response) {
        return res.status(400).json({ message: 'Что-то пошло не так response' });
      }

      //https://app.sms.by/api/v1/sendQuickSMS?token=6aa7a07f3&message=Test%20SMS13nodejs&phone=%2B375299999999
      let nameSMS = name;
      if (nameSMS.length > 10) { nameSMS = name.substring(0, 10) }
      let messageSMS = message;
      if (messageSMS.length > 30) { messageSMS = message.substring(0, 30) }
      const urlSMS = `https://app.sms.by/api/v1/sendQuickSMS?token=${config.get('configSMS').token}&message=name:${encodeURIComponent(nameSMS)}:message:${encodeURIComponent(messageSMS)}&phone=${config.get('configSMS').phone}`; // http://www.mysite.ru/index.php
      let responseSMS = await fetch(urlSMS);
      if (!responseSMS.ok) {
        // throw new Error(responseSMS.status); // 404
        console.log('responseSMS.status', responseSMS.status);
        message = 'SMS:err ' + message;
      }
      let result = await responseSMS.json();
      console.log('SMS:', result);

      const promise1 = transporter.sendMail(regEmail(EMAIL1, name, message));
      const promise2 = transporter.sendMail(regEmail(EMAIL2, name, message));

      const [promise1data, promise2data] = await Promise.all([
        promise1,
        promise2,
      ]).catch(err => {
        err.message = 'error email send:' + err.message;
        throw err
      });

      res.status(201).json({ message: 'Сообщение доставлено' });
    } catch (err) {
      // Упростить вывод ошибок при подготовке  prodaction ( лишняя информация для пользователя)
      console.log('Error router', err);
      console.error(`Error router message `, err.message);
      // res.status(err.statusCode || 500).json({ 'message': err.message || 'Что-то пошло не так, попробуйте снова' });
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
  });

module.exports = router;
