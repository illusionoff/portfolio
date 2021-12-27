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
  sendSMS,
  sendEmail
);

module.exports = router;
