const express = require('express');
let app = express();
const path = require('path');
require('dotenv').config();
const {getOneProduct, getStyles, getQuestions, getReviews, getRelatedProducts, getAnswers} = require('../controller/atelierAPI');

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

//=======Q&A========

app.get('/getQuestions', (req, res) => {
  getQuestions(req.query.product_id)
    .then((relevantQuestions) => {
      res.send(relevantQuestions.data);
    })
    .catch((err) => {
      res.sendStatus(501);
    });
})

app.get('/getAnswers', (req, res) => {
  getAnswers(req.query.question_id)
    .then((relevantAnswers) => {
      res.send(relevantAnswers.data);
    })
    .catch((err) => {
      res.status(501).send('NO ANSWERS FOUND');
    })
})

//=======Ratings Reviews========

app.get('/getReviews', (req, res) => {
  console.log(req.query);
  getReviews(req.query.id)
    .then((relevantReviews) => {
      res.send(relevantReviews.data);
    })
    .catch((err) => {
      res.sendStatus(501);
    })
})


//=======Related Products/Outfit=======

app.get('/getRelatedProducts', (req, res) => {
  // console.log(req.query);
  getRelatedProducts(req.query.id)
    .then((relatedItems) => {
      res.send(relatedItems.data);
    })
    .catch((error) => {
      res.sendStatus(501);
    })
})

app.listen(process.env.PORT, () => {
  console.log('success listen to 3000');
})
