const axios = require('axios');
require('dotenv').config();

// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37311

let getOneProduct = (product_id) => {
  let url = `${process.env.API}products/${product_id}`
  console.log(url);
  return axios.get(url, {headers: {Authorization: process.env.GITHUB}})
}

let getStyles = (product_id) => {
  let url = `${process.env.API}products/${product_id}/styles`
  return axios.get(url, {headers: {Authorization: process.env.GITHUB}})
}

let getQuestions = (product_id) => {
  console.log('product_id in atelierAPI');
  console.log(product_id);
  let url = `${process.env.API}qa/questions?product_id=${product_id}`
  return axios.get(url, {headers: {Authorization: process.env.GITHUB}})
}

let getReviews = (product_id) => {
  console.log('product_id in atelierAPI for reviews: ', product_id);
  let url = `${process.env.API}reviews/?product_id=${product_id}`;
  return axios.get(url, {headers: {Authorization: process.env.GITHUB}});
}



module.exports = {
  getOneProduct: getOneProduct,
  getStyles: getStyles,
  getQuestions: getQuestions,
  getReviews: getReviews
}











// export function to server index.js