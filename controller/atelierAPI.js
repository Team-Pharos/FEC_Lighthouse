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
  let url = `${process.env.API}qa/questions?product_id=${product_id}`
  return axios.get(url, {headers: {Authorization: process.env.GITHUB}})
}

let getAnswers = (question_id) => {
  let url = `${process.env.API}qa/questions/${question_id}/answers`
  return axios.get(url, {headers: {Authorization: process.env.GITHUB}})
}

//==========Reviews and Ratings Models============

let getReviews = (product_id) => {
  let url = `${process.env.API}reviews/?product_id=${product_id}`;
  return axios.get(url, {headers: {Authorization: process.env.GITHUB}});
}

let getReviewMeta = (product_id) => {
  let url = `${process.env.API}reviews/meta/?product_id=${product_id}`;
  return axios.get(url, {headers: {Authorization: process.env.GITHUB}});
}

let getRelatedProducts = (product_id) => {
  console.log('request atelierAPI for products related to:', product_id);
  let url=`${process.env.API}products/${product_id}/related`;
  return axios.get(url, {headers: {Authorization: process.env.GITHUB}})
}

module.exports = {
  getOneProduct: getOneProduct,
  getStyles: getStyles,
  getQuestions: getQuestions,
  getAnswers: getAnswers,
  getReviews: getReviews,
  getReviewMeta: getReviewMeta,
  getRelatedProducts: getRelatedProducts
}











// export function to server index.js