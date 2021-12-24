const { body } = require('express-validator'); // body дополнительно взял

function validationName() {
  return body('name')
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
    .escape()
}

module.exports = { validationName };
