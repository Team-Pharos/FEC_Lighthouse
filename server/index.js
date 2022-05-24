const express = require('express');
let app = express();
const path = require('path');
require('dotenv').config();
console.log(process.env.PORT);
const {getOneProduct, getStyles} = require('../controller/atelierAPI');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')))

app.get('/getOne', (req, res) => {
  getOneProduct(req.query.id)
  .then (product => {
    res.send(product.data);
  })
  .catch (err => {
    console.log('getOne err', err);
    res.sendStatus(501);
  });
})

app.get('/getStyles', (req, res) => {
  getStyles(req.query.id)
  .then (styles => {
    res.send(styles.data);
  })
  .catch (err => {
    console.log('get styles err', err);
    res.sendStatus(501);
  });
})


app.listen(process.env.PORT, () => {
  console.log('success listen to 3000');
})
