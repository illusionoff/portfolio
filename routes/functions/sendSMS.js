const config = require('config');
const fetch = require('node-fetch');
const CONFIGSMS = config.get('configSMS').url;

async function sendSMS(req, res, next) {
  const { name } = req.body;
  let { message } = req.body;
  let nameSMS = name;
  if (nameSMS.length > 10) { nameSMS = name.substring(0, 10) }
  let messageSMS = message;
  if (messageSMS.length > 30) { messageSMS = message.substring(0, 30) }
  const urlSMS = `${CONFIGSMS}?token=${config.get('configSMS').token}&message=name:${encodeURIComponent(nameSMS)}:message:${encodeURIComponent(messageSMS)}&phone=${config.get('configSMS').phone}`; // http://www.mysite.ru/index.php
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
