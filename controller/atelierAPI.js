const axios = require('axios');
require('dotenv').config();

// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37311
// get 1 product
let getOneProduct = (product_id = 37311) => {
  let url = `${process.env.API}products/${product_id}`
  console.log('api url: ', url);
  return axios.get(url, {headers: {Authorization: process.env.GITHUB}})
}

module.exports = {
  getOneProduct: getOneProduct
}











// export function to server index.js