const axios = require('axios');
require('dotenv').config();

// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37311

let getOneProduct = (product_id) => {
  let url = `${process.env.API}products/${product_id}`
  return axios.get(url, { headers: { Authorization: process.env.GITHUB } })
}

let postInteractions = (element, widget, time) => {
  let url = `${process.env.API}interactions`;
  return axios({
    method: 'post',
    url: url,
    headers: { Authorization: process.env.GITHUB },
    data: {
      element: element,
      widget: widget,
      time: time
    }
  })
}

let getStyles = (product_id) => {
  let url = `${process.env.API}products/${product_id}/styles`
  return axios.get(url, { headers: { Authorization: process.env.GITHUB } })
}

//==========Q&A============

let getQuestions = (product_id, count) => {
  let url = `${process.env.API}qa/questions?product_id=${product_id}&page=1&count=500`
  return axios.get(url, { headers: { Authorization: process.env.GITHUB } });
}

let getAnswers = (question_id) => {
  let url = `${process.env.API}qa/questions/${question_id}/answers?page=1&count=500`
  return axios.get(url, { headers: { Authorization: process.env.GITHUB } })
}

let postQuestion = ({ product_id, body, name, email }) => {
  let url = `${process.env.API}qa/questions`
  return axios({
    method: 'post',
    url: url,
    headers: { Authorization: process.env.GITHUB },
    data: {
      product_id: product_id,
      name: name,
      body: body,
      email: email
    }
  })
}

let postAnswer = ({ question_id, body, name, email }) => {
  let url = `${process.env.API}qa/questions/${question_id}/answers`
  return axios({
    method: 'post',
    url: url,
    headers: { Authorization: process.env.GITHUB },
    data: {
      name: name,
      body: body,
      email: email
    }
  });
}

let markQAsHelpful = (question_id) => {
  let url = `${process.env.API}qa/questions/${question_id}/helpful`
  return axios({
    method: 'put',
    url: url,
    headers: { Authorization: process.env.GITHUB }
  });
}

let markQAsReported = (question_id) => {
  let url = `${process.env.API}qa/questions/${question_id}/report`
  return axios({
    method: 'put',
    url: url,
    headers: { Authorization: process.env.GITHUB }
  });
}

let markAAsHelpful = (answer_id) => {
  let url = `${process.env.API}qa/answers/${answer_id}/helpful`
  return axios({
    method: 'put',
    url: url,
    headers: { Authorization: process.env.GITHUB }
  });
}

let markAAsReported = (answer_id) => {
  let url = `${process.env.API}qa/answers/${answer_id}/report`
  return axios({
    method: 'put',
    url: url,
    headers: { Authorization: process.env.GITHUB }
  });
}


//==========Reviews and Ratings Models============

let getReviews = (product_id, sort) => {
  let url = `${process.env.API}reviews/?count=100&sort=${sort}&product_id=${product_id}`;
  return axios.get(url, { headers: { Authorization: process.env.GITHUB } });
};

let getReviewMeta = (product_id) => {
  let url = `${process.env.API}reviews/meta/?product_id=${product_id}`;
  return axios.get(url, { headers: { Authorization: process.env.GITHUB } });
};

let postReviews = ({ product_id, rating, summary, body, recommend,
  name, email, photos, characteristics }) => {

  let url = `${process.env.API}reviews/`;
  return axios({
    method: 'post',
    url: url,
    headers: { Authorization: process.env.GITHUB },
    data: {
      product_id, rating, summary, body, recommend,
      name, email, photos, characteristics
    }
  });
};

let putHelpfulReview = (review_id) => {
  let url = `${process.env.API}reviews/${review_id}/helpful`;
  return axios({
    method: 'put',
    url: url,
    headers: { Authorization: process.env.GITHUB }
  });
};

let putReportReview = (review_id) => {
  let url = `${process.env.API}reviews/${review_id}/report`;
  return axios({
    method: 'put',
    url: url,
    headers: { Authorization: process.env.GITHUB }
  });
};

//==========Related Products============

let getRelatedIds = (product_id) => {
  let url = `${process.env.API}products/${product_id}/related`;
  return axios.get(url, { headers: { Authorization: process.env.GITHUB } })
};

// let getRelatedProducts = (...product_ids) => {
//   let queryList = product_ids.map((Id) => {
//     let url = `${process.env.API}products/${Id}`;
//     axios.get(url, { headers: { Authorization: process.env.GITHUB } });
//   });
//   return Promise.all(queryList);
// }

module.exports = {
  getOneProduct: getOneProduct,
  getStyles: getStyles,
  getQuestions: getQuestions,
  getAnswers: getAnswers,
  postQuestion: postQuestion,
  postAnswer: postAnswer,
  markQAsHelpful: markQAsHelpful,
  markAAsHelpful: markAAsHelpful,
  markAAsReported: markAAsReported,
  getReviews: getReviews,
  getReviewMeta: getReviewMeta,
  postReviews: postReviews,
  putHelpfulReview: putHelpfulReview,
  putReportReview: putReportReview,
<<<<<<< HEAD
  getRelatedIds: getRelatedIds
=======
  getRelatedProducts: getRelatedProducts,
  postInteractions: postInteractions
>>>>>>> 276c1d598e26e1da0f84dcffe229f02ef93d50f4
};











// export function to server index.js
