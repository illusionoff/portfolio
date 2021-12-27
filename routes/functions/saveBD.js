const saveBD = require('../../db/services/serviceSaveBD');

async function saveBDFunc(req, res, next) {
  try {
    const { name, message } = req.body
    console.log('routerMessage name', name);
    console.log('routerMessage name', message);
    const response = await saveBD.insertBD(name, message);
    // !!! использовал раньше "res.json(await quotes.insertBD(name, message))" что вызывало ошибку, потому что уже res дали ответ и пытаюсь получается повторно отсылаю ответ браузеру
    if (!response) {
      return res.status(400).json({ message: 'Что-то пошло не так response' });
    }
    return next()
  } catch (e) {
    console.error(`Error saveBDFunc `, e.message);
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
}

module.exports = { saveBDFunc };
