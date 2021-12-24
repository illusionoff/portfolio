const config = require('config');
const fetch = require('node-fetch');
const CONFIGSMS = config.get('configSMS').url;
const TOKEN = config.get('configSMS').token;
const PHONE = config.get('configSMS').phone;
async function sendSMS(req, res, next) {
  let { name, message } = req.body;
  if (name.length > 10) name = name.substring(0, 10)
  if (message.length > 30) message = message.substring(0, 30)
  console.log('name SMS=', name);
  console.log('message SMS=', message);
  const urlSMS = `${CONFIGSMS}?token=${TOKEN}&message=name:${encodeURIComponent(name)}:message:${encodeURIComponent(message)}&phone=${PHONE}`; // http://www.mysite.ru/index.php
  let responseSMS = await fetch(urlSMS);
  if (!responseSMS.ok) {
    // throw new Error(responseSMS.status); // 404
    console.log('responseSMS.status', responseSMS.status);
    message = 'SMS:err ' + message;
  }
  let result = await responseSMS.json();
  console.log('SMS:', result);
  return next()
}

module.exports = { sendSMS };
