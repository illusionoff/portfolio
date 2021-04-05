const { Router } = require('express');
const router = Router();
const quotes = require('../db/services/serviceQuotes');

/* GET quotes listing. */
router.get('/', async function (req, res, next) {
  try {
    res.json(await quotes.getMultiple(req.query));
  } catch (err) {
    // Упростить вывод ошибок при подготовке  prodaction ( лишняя информация для пользователя)
    console.error(`Error while getting quotes `, err.message);
    res.status(err.statusCode || 500).json({ 'message': err.message });
  }
});

// router.get('/', function (req, res, next) {
//   res.json({ message: 'alive2' });
// });

/* POST quotes */
// router.post('/', async function(req, res, next) {
//   try {
//     res.json(await quotes.create(req.body));
//   } catch (err) {
//     console.error(`Error while posting quotes `, err.message);
//     res.status(err.statusCode || 500).json({'message': err.message});
//   }
// });

module.exports = router;
