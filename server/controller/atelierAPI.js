const axios = require('axios');
require('dotenv').config();

// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37311

let urlBase = process.env.API;

let getOneProduct = (product_id) => {
  return axios.get(`${urlBase}products/${product_id}`,
  { headers: { Authorization: process.env.GITHUB } })
}

let getStyles = (product_id) => {
  return axios.get(`${urlBase}products/${product_id}/styles`,
  { headers: { Authorization: process.env.GITHUB } })
}

//==========Q&A============

let getQuestions = (product_id, count) => {
  return axios.get(`${urlBase}qa/questions?product_id=${product_id}&page=1&count=500`,
  { headers: { Authorization: process.env.GITHUB } });
}

let getAnswers = (question_id) => {
  return axios.get(`${urlBase}qa/questions/${question_id}/answers?page=1&count=500`,
    { headers: { Authorization: process.env.GITHUB } })
}

let postQuestion = ({ product_id, body, name, email }) => {
  let url = `${urlBase}qa/questions`
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
  let url = `${urlBase}qa/questions/${question_id}/answers`
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
  let url = `${urlBase}qa/questions/${question_id}/helpful`
  return axios({
    method: 'put',
    url: url,
    headers: { Authorization: process.env.GITHUB }
  });
}

let markQAsReported = (question_id) => {
  let url = `${urlBase}qa/questions/${question_id}/report`
  return axios({
    method: 'put',
    url: url,
    headers: { Authorization: process.env.GITHUB }
  });
}

let markAAsHelpful = (answer_id) => {
  let url = `${urlBase}qa/answers/${answer_id}/helpful`
  return axios({
    method: 'put',
    url: url,
    headers: { Authorization: process.env.GITHUB }
  });
}

let markAAsReported = (answer_id) => {
  let url = `${urlBase}qa/answers/${answer_id}/report`
  return axios({
    method: 'put',
    url: url,
    headers: { Authorization: process.env.GITHUB }
  });
}


//==========Reviews and Ratings Models============

let getReviews = (product_id, sort) => {
  return axios.get(`${urlBase}reviews/?count=100&sort=${sort}&product_id=${product_id}`,
  { headers: { Authorization: process.env.GITHUB } });
};

let getReviewMeta = (product_id) => {
  return axios.get(`${urlBase}reviews/meta/?product_id=${product_id}`,
  { headers: { Authorization: process.env.GITHUB } });
};

let postReviews = ({ product_id, rating, summary, body, recommend,
  name, email, photos, characteristics }) => {

  let url = `${urlBase}reviews/`;
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
  let url = `${urlBase}reviews/${review_id}/helpful`;
  return axios({
    method: 'put',
    url: url,
    headers: { Authorization: process.env.GITHUB }
  });
};

let putReportReview = (review_id) => {
  let url = `${urlBase}reviews/${review_id}/report`;
  return axios({
    method: 'put',
    url: url,
    headers: { Authorization: process.env.GITHUB }
  });
};

//==========Related Products============

let getRelatedIds = (product_id) => {
  return axios.get(`${urlBase}products/${product_id}/related`,
  { headers: { Authorization: process.env.GITHUB } })
};

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
  getRelatedIds: getRelatedIds
};

