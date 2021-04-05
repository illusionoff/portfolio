const { Router } = require('express');
const router = Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.json({ message: 'alive' });
});

module.exports = router;
