import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { BsStarFill, BsStar } from 'react-icons/bs';
import {
  Input, OuterModal, InnerModal,
  BodyInput, Modal, Span, SpanClicked, EntryTitle
} from '../Questions/Styles.jsx';
import AddStarRating from './AddStarRating.jsx';

const ReviewForm = styled(InnerModal)`
  height: 500px;
  width: 750px;
  border-width: 2px 5px 5px 2px;
  overflow: auto;
`;

const WriteReviewForm = styled.div`
  font-family: 'Poppins', sans-serif;
  height: 100%;
  width: 60%;
  margin: 2px auto;
`;

const Exit = styled.button`
  float: right;
`;

const ReviewBody = styled.textarea`
  width: 300px;
`

const NewReviewModal = ({ closeModal, metaData, productId, productName }) => {

  let [reviewBody, setReviewBody] = useState('');
  let [summary, setSummary] = useState('');
  let [reviewForm, setReviewForm] = useState({ product_id: productId });
  let [charForm, setCharForm] = useState({})

  let characteristics = metaData.characteristics;
  let availableCharacteristics = Object.keys(characteristics);



  const transferRating = (newRating) => {
    setReviewForm({ ...reviewForm, ['rating']: Number(newRating) });
  }

  let formHandler = (event) => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value

    if (value === 'true') {
      value = true;
      console.log(value);
    }
    if (value === 'false') {
      value = false;
      console.log(value);
    }

    setReviewForm({ ...reviewForm, [name]: value });

    if (name === 'body') {
      setReviewBody(event.target.value);
    }
    if (name === 'summary') {
      setSummary(event.target.value);
    }
  }

  let charHandler = (event) => {
    let name = event.target.name;
    event.preventDefault();
    setCharForm({ ...charForm, [name]: Number(event.target.value) })
  }

  console.log('reviewForm: ', reviewForm);
  console.log('charForm: ', charForm);

  let handleSubmit = (event) => {
    event.preventDefault();
    let submittedForm = { ...reviewForm, 'characteristics': charForm };
    axios.post('/postReviews', submittedForm)
      .then(() => {
        alert('Submitted!');
      })
      .catch(err => console.log(err));
  }

  return (
    <OuterModal>
      <ReviewForm>
          <Exit value='CloseAddReview' onClick={closeModal}>X</Exit>
        <WriteReviewForm >
          <form onSubmit={handleSubmit}>
            <h2>Write You Review</h2>
            <h3>About the {productName}</h3>
            <Input
              type='email'
              name='email'
              label='email'
              placeholder='kjbnjken@gmail.com'
              onChange={formHandler}
              require
            />
            <Input
              type='text'
              name='name'
              placeholder='Your Name'
              onChange={formHandler}
              require
            />
            <div><AddStarRating transferRating={transferRating} onChange={formHandler} /></div>
            <div>
              <h4>Recommend this product?</h4>
              <input
                type='radio'
                value='true'
                name='recommend'
                onChange={formHandler} />recommended
              <input
                type='radio'
                value='false'
                name='recommend'
                onChange={formHandler} />not recommended
            </div>
            <div className='characteristics'>
              {availableCharacteristics.includes('Size') && (<div>
                <h4>How was the sizing?</h4>
                <input type='radio' value='1' id='size1' name={characteristics['Size'].id} onChange={charHandler} />
                <label for='size1'>a size too small</label>
                <input type='radio' value='2' id='size2' name={characteristics['Size'].id} onChange={charHandler} />
                <input type='radio' value='3' id='size3' name={characteristics['Size'].id} onChange={charHandler} />
                <input type='radio' value='4' id='size4' name={characteristics['Size'].id} onChange={charHandler} />
                <input type='radio' value='5' id='size5' name={characteristics['Size'].id} label='a size too big' onChange={charHandler} />
              </div>)}
              {availableCharacteristics.includes('Width') && (<div>
                <h4>How was the width?</h4>
                <input type='radio' value='1' id='width1' name={characteristics['Width'].id} label='too narrow' onChange={charHandler} />
                <input type='radio' value='2' id='width2' name={characteristics['Width'].id} onChange={charHandler} />
                <input type='radio' value='3' id='width3' name={characteristics['Width'].id} onChange={charHandler} />
                <input type='radio' value='4' id='width4' name={characteristics['Width'].id} onChange={charHandler} />
                <input type='radio' value='5' id='width5' name={characteristics['Width'].id} label='too wide' onChange={charHandler} />
              </div>)}
              {availableCharacteristics.includes('Comfort') && (<div>
                <h4>How comfortable was this?</h4>
                <input type='radio' value='1' id='com1' name={characteristics['Comfort'].id} label='uncomfortable' onChange={charHandler} />
                <input type='radio' value='2' id='com2' name={characteristics['Comfort'].id} onChange={charHandler} />
                <input type='radio' value='3' id='com3' name={characteristics['Comfort'].id} onChange={charHandler} />
                <input type='radio' value='4' id='com4' name={characteristics['Comfort'].id} onChange={charHandler} />
                <input type='radio' value='5' id='com5' name={characteristics['Comfort'].id} label='perfect' onChange={charHandler} />
              </div>)}
              {availableCharacteristics.includes('Quality') && (<div>
                <h4>How was the quality?</h4>
                <input type='radio' value='1' id='quality1' name={characteristics['Quality'].id} label='poor' onChange={charHandler} />
                <input type='radio' value='2' id='quality2' name={characteristics['Quality'].id} onChange={charHandler} />
                <input type='radio' value='3' id='quality3' name={characteristics['Quality'].id} onChange={charHandler} />
                <input type='radio' value='4' id='quality4' name={characteristics['Quality'].id} onChange={charHandler} />
                <input type='radio' value='5' id='quality5' name={characteristics['Quality'].id} label='perfect' onChange={charHandler} />
              </div>)}
              {availableCharacteristics.includes('Length') && (<div>
                <h4>How was the length?</h4>
                <input type='radio' value='1' id='length1' name={characteristics['Length'].id} label='runs short' onChange={charHandler} />
                <input type='radio' value='2' id='length2' name={characteristics['Length'].id} onChange={charHandler} />
                <input type='radio' value='3' id='length3' name={characteristics['Length'].id} onChange={charHandler} />
                <input type='radio' value='4' id='length4' name={characteristics['Length'].id} onChange={charHandler} />
                <input type='radio' value='5' id='length5' name={characteristics['Length'].id} label='runs long' onChange={charHandler} />
              </div>)}
              {availableCharacteristics.includes('Fit') && (<div>
                <h4>How was the fit?</h4>
                <input type='radio' value='1' id='fit1' name={characteristics['Fit'].id} label='runs short' onChange={charHandler} />
                <input type='radio' value='2' id='fit2' name={characteristics['Fit'].id} onChange={charHandler} />
                <input type='radio' value='3' id='fit3' name={characteristics['Fit'].id} onChange={charHandler} />
                <input type='radio' value='4' id='fit1' name={characteristics['Fit'].id} onChange={charHandler} />
                <input type='radio' value='5' id='fit5' name={characteristics['Fit'].id} label='runs long' onChange={charHandler} />
              </div>)}
            </div>
            <h4>Review Summary</h4>
            <Input type='text'
              value={summary}
              name='summary'
              onChange={formHandler} />
            <div>
              <h4>Review Body</h4>
              <ReviewBody
                placeholder='Why did you like the product or not?'
                name='body'
                value={reviewBody}
                onChange={formHandler}
              />
              {reviewBody.length < 50 ?
                (<span>{50 - reviewBody.length} More Chars Required</span>) :
                (<span>Requirement Met</span>)
              }
            </div>
            <div>
              <h4>Submit Your Photos</h4>
              <Input
                name='photos'
                type='file'
                accept='.png, .jpeg, .gif'
                multiple
                onChange={formHandler} />
            </div>
            <div>
              <input type='submit' />
            </div>
          </form>
        </WriteReviewForm>
      </ReviewForm>
    </OuterModal>
  )
};

export default NewReviewModal;

//   let testData = {
//     "product_id": 37313,
//     "rating": 4,
//     "summary": "I love these but...",
//     "body": "I don't want to have to wake up super early to use these. I have to hit my alarm like five times and then I only get to wear them for like two hours before I have to change into my afternoon joggers.",
//     "recommend": true,
//     "name": "Sleepy",
//     "email": "SleepIsGood@gmail.com",
//     "photos": ["https://imgur.com/oq8YqZ4", "https://imgur.com/oltqWdF"],
//     "characteristics": {
//             "125036": 3,
//             "125037": 3,
//             "125038": 5,
//             "125039": 5

//     }
// }