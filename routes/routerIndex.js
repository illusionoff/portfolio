const { Router } = require('express');
const router = Router();

/* GET home page. */
router.get('/', function (req, res) {
  console.log('router.get(/)');
  res.json({ message: 'alive' });
});

module.exports = router;
