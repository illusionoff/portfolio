const { Router } = require('express');
const router = Router();
const quotes = require('../db/services/serviceQuotes');

/* GET quotes listing. */
// '/message'
// Засенить после на POST
router.get('/', async function (req, res) {
  try {
    res.json(await quotes.getMultiple(req.query));
  } catch (err) {
    // Упростить вывод ошибок при подготовке  prodaction ( лишняя информация для пользователя)
    console.error(`Error while getting quotes `, err.message);
    res.status(err.statusCode || 500).json({ 'message': err.message || 'Что-то пошло не так, попробуйте снова' });
  }
});

module.exports = router;