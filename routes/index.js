var express = require('express');
var router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , messages: messages});
});

router.get('/new', function(req, res, next){
  res.render('forms', {title: 'New Message', })
})

router.post('/new', function(req, res){
  const messageText = req.body.message;
  const messageAuthor = req.body.author;
})

module.exports = router;