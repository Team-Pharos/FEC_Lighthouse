const express = require('express');
let app = express();
let compression = require('compression');
const path = require('path');
require('dotenv').config();
const {
  getOneProduct, getStyles, getQuestions,
  getReviews, getRelatedIds, getAnswers,
  getReviewMeta, markQAsHelpful, markAAsHelpful,
  markAAsReported, postAnswer, postQuestion,
  postReviews, putHelpfulReview, putReportReview, postInteractions
} = require('./controller/atelierAPI');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(compression());

app.get('/getOne', (req, res) => {
  getOneProduct(req.query.id)
  .then (product => {
    res.send(product.data);
  })
  .catch (err => {
    res.sendStatus(501);
  });
})

app.post('/click', (req, res) => {
  postInteractions(req.body.element, req.body.widget, req.body.time)
  .then(() => {res.sendStatus(201)})
  .catch(err => {console.log('post interactions err', err)})
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
    .then((filteredQuestions) => {
      res.send(filteredQuestions.data);
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
  getReviews(req.query.id, req.query.sort)
    .then((relevantReviews) => {
      res.send(relevantReviews.data);
    })
    .catch((err) => {
      res.sendStatus(501);
    })
});

app.get('/getReviewMeta', (req, res) => {
  getReviewMeta(req.query.id)
    .then((metaData) => {
      res.send(metaData.data);
    })
    .catch((err) => {
      res.sendStatus(501);
    })
});

app.post('/postReviews', (req, res) => {
  postReviews(req.body)
  .then((response) => {
    res.sendStatus(201);
  })
  .catch(err => console.log(err));
});

app.put('/helpfulReview', (req, res) => {
  putHelpfulReview(req.body.review_id)
  .then(() => res.sendStatus(204))
  .catch(err => console.log(err));
});

app.put('/reportReview', (req, res) => {
  putReportReview(req.body.review_id)
  .then(() => res.sendStatus(204))
  .catch(err => console.log(err));
});

//=======Related Products/Outfit=======

app.get('/getRelatedIds', (req, res) => {
  getRelatedIds(req.query.id)
    .then((relatedItems) => {
      res.send(relatedItems.data);
    })
    .catch((error) => {
      res.sendStatus(501);
    })
});

app.listen(process.env.PORT, () => {
  console.log(`success listening to ${process.env.PORT}`);
})
