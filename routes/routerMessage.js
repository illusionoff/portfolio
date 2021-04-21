const { Router } = require('express');
const router = Router();
const quotes = require('../db/services/serviceQuotes');
const { check, validationResult, body, Validator } = require('express-validator'); // body дополнительно взял

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
      // res.json(await quotes.getMultiple(req.query));
      // console.log("req.body: ", req.body);


      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          // message: 'Некорректный данные при регистрации'
          message: errors.array()[0].msg
        })
      }

      const { name, message } = req.body
      console.log('routerMessage name', name);
      console.log('routerMessage name', message);
      const response = await quotes.getMultiple(name, message);
      // const response = await quotes.getMultiple(name, message);
      // !!! использовал раньше "res.json(await quotes.getMultiple(name, message))" что вызывало ошибку, потому что уже res дали ответ и пытаюсь получается повторно отсылаю ответ браузеру
      if (!response) {
        return res.status(400).json({ message: 'Что-то пошло не так response' });
      }
      // console.log('routerMessage', 'Что-то пошло не так response');
      // return res.status(400).json({ message: 'Что-то пошло не так response' });
      // if (candidate) {
      //   return res.status(400).json({ message: 'Такой пользователь уже существует' })
      // }

      // const hashedPassword = await bcrypt.hash(password, 12)
      // const user = new User({ email, password: hashedPassword })

      // await user.save()

      res.status(201).json({ message: 'Сообщение доставлено' });
    } catch (err) {
      // Упростить вывод ошибок при подготовке  prodaction ( лишняя информация для пользователя)
      console.error(`Error while getting quotes `, err.message);
      // res.status(err.statusCode || 500).json({ 'message': err.message || 'Что-то пошло не так, попробуйте снова' });
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
  });

module.exports = router;