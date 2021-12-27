const nodemailer = require("nodemailer");
const regEmail = require("../../mail/message");
const config = require('config');

const transporter = nodemailer.createTransport(config.get('GMAIL_SETTINGS'));
const EMAIL1 = config.get('EMAIL_TO')[0];
const EMAIL2 = config.get('EMAIL_TO')[1];

async function sendEmail(req, res) {
  try {
    const { name, message } = req.body;
    console.log(`sendEmail=${name},${message}`);
    const promise1 = transporter.sendMail(regEmail(EMAIL1, name, message));
    const promise2 = transporter.sendMail(regEmail(EMAIL2, name, message));

    await Promise.all([ //const [promise1data, promise2data] = await Promise.all
      promise1,
      promise2,
    ]).catch(err => {
      err.message = 'error email send:' + err.message;
      throw err
    });

    res.status(201).json({ message: 'Сообщение доставлено' });
  } catch (err) {
    console.error(`Error sendEmail `, e.message);
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
}

module.exports = { sendEmail };
