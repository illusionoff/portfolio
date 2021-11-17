const { Router } = require('express');
const router = Router();
const quotes = require('../db/services/serviceQuotes');
const { check, validationResult, body } = require('express-validator'); // body дополнительно взял
const nodemailer = require("nodemailer");
const regEmail = require("../mail/message");
const config = require('config');
const fetch = require('node-fetch');

const transporter = nodemailer.createTransport(config.get('GMAIL_SETTINGS'));

async function RegisterSendMail(transporter, email, name, message) {
  try {
    await transporter.sendMail(regEmail(email, name, message));
  } catch (e) {
    console.log('RegisterSendMail email:', email);
    console.log("ERROR await transporter.sendMail  catch (e):", e);
    return res.status(400).json({ message: 'Что-то пошло не так email send catch (e):' });
  }
}

/* GET quotes listing. */
// '/api/message'
// Заменить после на POST
router.post('/',
  [
    // check('name', 'Вы ввели имя меньше двух символов или более 30 символов')
    body('name')
      // .notEmpty()
      // .withMessage("поле пустое")
      .isLength({ min: 3, max: 30 }) // .isEmpty() работает наоборот если не пусто то вызывает ошибку
      .withMessage("Вы ввели имя меньше трех символов или более 30 символов")
      .custom((value) => {
        // let regexp = /^[a-z0-9_-]{3,16}$/; // проверка
        // const regexp = /^([а-яё]+|[a-z0-9_-]){3,16}$/; // проверка  на name русские и латинские символы
        // const regexp = /^([а-яё]+|[a-z0-9_-]){3,30}$/; // проверка  на name русские и латинские символы
        // const regexp = /^([а-яё]+|[a-zA-Z-9_-]){3,30}$/; // проверка  на name русские и латинские символы
        const regexp = /^([а-яА-ЯёЁa-zA-Z0-9]){3,30}$/; // проверка  на name русские и латинские символы
        return regexp.test(value); // возвращает true либо false
      })
      .withMessage("Недопустимые символы в строке имени")
      .trim()
      .escape(),
    check('message', 'Минимальная длина сообщения 10 символов, а максимальная 1000')
      .isLength({ min: 10, max: 1000 })
  ], async function (req, res) {
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
      const response = await quotes.getMultiple(name, message);
      // !!! использовал раньше "res.json(await quotes.getMultiple(name, message))" что вызывало ошибку, потому что уже res дали ответ и пытаюсь получается повторно отсылаю ответ браузеру
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

      // await RegisterSendMail(transporter, config.get('EMAIL_TO')[0], name, message);
      // await RegisterSendMail(transporter, config.get('EMAIL_TO')[1], name, message);
      const promise1 = new Promise((resolve, reject) => {
        RegisterSendMail(transporter, config.get('EMAIL_TO')[0], name, message);
        // reject("Непредвиденная ошибка promise1");
        // setTimeout(resolve, 500, "Hello");
        // resolve();
        reject("сообщение не доставлено");
      });
      const promise2 = new Promise((resolve, reject) => {
        RegisterSendMail(transporter, config.get('EMAIL_TO')[1], name, message);
        // console.log('test promice')
        // setTimeout(resolve, 1000, "World");
        // resolve('test promice2')
        resolve();
      });

      const [promise1data, promise2data] = await Promise.all([
        promise1,
        promise2,
      ]);

      res.status(201).json({ message: 'Сообщение доставлено' });
    } catch (err) {
      // Упростить вывод ошибок при подготовке  prodaction ( лишняя информация для пользователя)
      console.log('Error', err);
      console.error(`Error while getting quotes `, err.message);
      // res.status(err.statusCode || 500).json({ 'message': err.message || 'Что-то пошло не так, попробуйте снова' });
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
  });

module.exports = router;
