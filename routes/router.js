const { Router } = require('express');
const router = Router();
const { validationName } = require('./functions/validation/validationName');
const { validationMessage } = require('./functions/validation/validationMessage');
const { validationErrors } = require('./functions/validation/validationErrors');
const { saveBDFunc } = require('./functions/saveBD');
const { sendSMS } = require('./functions/sendSMS');
const { sendEmail } = require('./functions/sendEmail');

router.post('/',
  validationName(),
  validationMessage(),
  validationErrors,
  saveBDFunc,
  // sendSMS
  sendEmail
  // ,
  // async function (req, res) {
  //   try {
  //     // const { name } = req.body
  //     // let { message } = req.body
  //     // console.log('routerMessage name', name);
  //     // console.log('routerMessage name', message);

  //     // const promise1 = transporter.sendMail(regEmail(EMAIL1, name, message));
  //     // const promise2 = transporter.sendMail(regEmail(EMAIL2, name, message));

  //     // const [promise1data, promise2data] = await Promise.all([
  //     //   promise1,
  //     //   promise2,
  //     // ]).catch(err => {
  //     //   err.message = 'error email send:' + err.message;
  //     //   throw err
  //     // });

  //     // res.status(201).json({ message: 'Сообщение доставлено' });
  //   } catch (err) {
  //     // Упростить вывод ошибок при подготовке  prodaction ( лишняя информация для пользователя)
  //     console.log('Error router', err);
  //     console.error(`Error router message `, err.message);
  //     // res.status(err.statusCode || 500).json({ 'message': err.message || 'Что-то пошло не так, попробуйте снова' });
  //     res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  //   }
  // }
);

module.exports = router;
