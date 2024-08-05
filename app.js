const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));

let requests = [];
app.get('/',(req,res) => {
    res.render('index', { requests: requests });
});

app.post('/addRequest', (req, res) => {
    const { name, email, request } = req.body;
    requests.push({ name, email, request });
    res.redirect('/');
  });
  
  app.post('/delete/:index', (req, res) => {
    const index = req.params.index;
    requests.splice(index, 1);
    res.redirect('/');
  });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });