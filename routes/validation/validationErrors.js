const { validationResult } = require('express-validator');

function validationErrors(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('validationErrors!')
    return res.status(400).json({
      errors: errors.array(),
      // message: 'Некорректный данные при регистрации'
      message: errors.array()[0].msg
    })
  }
  return next()
}

module.exports = { validationErrors };
