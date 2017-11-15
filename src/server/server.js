const express = require('express');
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');

const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.info('Server is running');
});
