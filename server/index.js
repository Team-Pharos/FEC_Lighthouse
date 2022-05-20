const express = require('express');
let app = express();
const path = require('path');
require('dotenv').config();
// importing helper functions
const {getOneProduct} = require('../controller/atelierAPI');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')))

// route
app.get('/getOne', (req, res) => {
  // product_id needs to be req../..params. id
  getOneProduct(37312)
  .then (product => {
    console.log('getOne product', product.data);
    res.send(product.data);
  })
  .catch (err => {
    console.log('getOne err', err);
    res.sendStatus(501);
  });
})


app.listen(process.env.PORT, () => {
  console.log('success listen at 3000');
})
