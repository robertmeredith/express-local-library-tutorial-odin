var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// router.get('/cool', function (req, res, next) {
//   res.send("You're so cool")
// })

router.get('/:adjective', function (req, res, next) {
  const { adjective } = req.params;
  res.render('cool', { adjective });
});

module.exports = router;
