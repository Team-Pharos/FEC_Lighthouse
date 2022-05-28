const express = require('express');
let app = express();
const path = require('path');
require('dotenv').config();
const {getOneProduct, getStyles, getQuestions, getReviews, getRelatedProducts, getAnswers, getReviewMeta, markQAsHelpful, markAAsHelpful, markAAsReported, postAnswer, postQuestion, postReviews} = require('./controller/atelierAPI');

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

app.post('/postQuestion', (req, res) => {
  postQuestion(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(501);
    });
})

app.post('/postAnswer', (req, res) => {
  postAnswer(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(501);
    })
})

app.put('/markQuestionHelpful', (req, res) => {
   markQAsHelpful(req.body.params.question_id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        res.sendStatus(501);
      });
})

app.put('/markAnswerHelpful', (req, res) => {
  markAAsHelpful(req.body.params.answer_id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.sendStatus(501);
    })
})

app.put('/reportAnswer', (req, res) => {
  markAAsReported(req.body.params.answer_id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.sendStatus(501);
    });
})

//=======Ratings Reviews========

app.get('/getReviews', (req, res) => {
  getReviews(req.query.id)
    .then((relevantReviews) => {
      res.send(relevantReviews.data);
    })
    .catch((err) => {
      res.sendStatus(501);
    })
})

app.get('/getReviewMeta', (req, res) => {
  getReviewMeta(req.query.id)
    .then((metaData) => {
      console.log('metaData Requested');
      res.send(metaData.data);
    })
    .catch((err) => {
      res.sendStatus(501);
    })
})

app.post('/postReviews', (req, res) => {
  testData = {
    "product_id": 37313,
    "rating": 4,
    "summary": "I love these but...",
    "body": "I don't want to have to wake up super early to use these. I have to hit my alarm like five times and then I only get to wear them for like two hours before I have to change into my afternoon joggers.",
    "recommend": true,
    "name": "Sleepy",
    "email": "SleepIsGood@gmail.com",
    "photos": ["https://imgur.com/oq8YqZ4", "https://imgur.com/oltqWdF"],
    "characteristics": {
            "125036": 3,
            "125037": 3,
            "125038": 5,
            "125039": 5

    }
}
  postReviews(testData)
  .then((response) => console.log(response))
  .catch(err => console.log(err));
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
