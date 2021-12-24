const { body } = require('express-validator'); // body дополнительно взял

function validationMessage() {
  return body('message')
    .isLength({ min: 10, max: 1000 })
    .withMessage("Минимальная длина сообщения 10 символов, а максимальная 1000")
    .trim()
    .escape()
}

module.exports = { validationMessage };
