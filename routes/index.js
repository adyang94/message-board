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
console.log('index.js running');
/* GET home page. */
router.get('/', function(req, res) {
  console.log('get /');
  res.render('index', { title: 'Express' , messages: messages});
});

router.get('/new', function(req, res){
  console.log('get /new');
  res.render('forms', {title: 'New Message', });
})

router.post('/new', function(req, res){
  console.log('post /new');
  const messageText = req.body.message;
  const messageAuthor = req.body.author;
  messages.push({ text: messageText, user: messageAuthor, added: new Date() });
  res.redirect('/');
});

module.exports = router;