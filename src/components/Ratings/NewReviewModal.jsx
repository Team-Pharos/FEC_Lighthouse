import React, { useState } from 'react';
import {
  Input, OuterModal, InnerModal,
  BodyInput, Modal, Span, SpanClicked, EntryTitle
} from '../Questions/Styles.jsx';
import styled from 'styled-components';

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
  position: relative;
  top: 0px;
  right: 0px;
`;

const ReviewBody = styled.textarea`
  width: 300px;
`

const NewReviewModal = ({ closeModal }) => {

  let [reviewBody, setReviewBody] = useState('');
  let [summary, setSummary] = useState('');
  let [reviewForm, setReviewForm] = useState({});

  let createdForm = {};

  let formHandler = (event) => {
    event.preventDefault();
    let name = event.target.name;
    console.log(name);

    createdForm[name] = event.target.value;
    setReviewForm({...reviewForm, [name]: event.target.value});
    console.log(createdForm);
    console.log(reviewForm);

    if (name === 'body') {
      setReviewBody(event.target.value);
    }
    if (name === 'summary') {
      setSummary(event.target.value);
    }
  }

  let radioHandler = (event) => {
    event.preventDefault();
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(`You've submitted!`);
  }

  return (
    <OuterModal>
      <ReviewForm>
        <WriteReviewForm >
          <form onSubmit={handleSubmit}>
            <h2>Write You Review</h2>
            <h3>About the [Product Name Here]</h3>
            <Input
              type='email'
              name='email'
              label='email'
              placeholder='kjbnjken@gmail.com'
              require
            />
            <div><span>[Insert interactive star component here]</span></div>
            <h4>Recommend this product?</h4>
            <div>
              <input
                type='radio'
                value={'true'}
                name='recommendation'
                onChange={formHandler} />recommended
              <input
                type='radio'
                value={'false'}
                name='recommendation'
                onChange={formHandler} />not recommended
            </div>
            <h4>How was the sizing?</h4>
            <div>
              <input type='radio' value='1' name='Size' label='a size too small' />
              <input type='radio' value='2' name='Size' />
              <input type='radio' value='3' name='Size' />
              <input type='radio' value='4' name='Size' />
              <input type='radio' value='5' name='Size' label='a size too big' />
            </div>
            <h4>How was the width?</h4>
            <div>
              <input type='radio' value='1' name='Width' label='too narrow' />
              <input type='radio' value='2' name='Width' />
              <input type='radio' value='3' name='Width' />
              <input type='radio' value='4' name='Width' />
              <input type='radio' value='5' name='Width' label='too wide' />
            </div>
            <h4>How comfortable was this?</h4>
            <div>
              <input type='radio' value='1' name='Comfort' label='uncomfortable' />
              <input type='radio' value='2' name='Comfort' />
              <input type='radio' value='3' name='Comfort' />
              <input type='radio' value='4' name='Comfort' />
              <input type='radio' value='5' name='Comfort' label='perfect' />
            </div>
            <h4>How was the quality?</h4>
            <div>
              <input type='radio' value='1' name='Quality' label='poor' />
              <input type='radio' value='2' name='Quality' />
              <input type='radio' value='3' name='Quality' />
              <input type='radio' value='4' name='Quality' />
              <input type='radio' value='5' name='Quality' label='perfect' />
            </div>
            <h4>How was the length?</h4>
            <div>
              <input type='radio' value='1' name='Length' label='runs short' />
              <input type='radio' value='2' name='Length' />
              <input type='radio' value='3' name='Length' />
              <input type='radio' value='4' name='Length' />
              <input type='radio' value='5' name='Length' label='runs long' />
            </div>
            <h4>How was the fit?</h4>
            <div>
              <input type='radio' value='1' name='Fit' label='runs short' />
              <input type='radio' value='2' name='Fit' />
              <input type='radio' value='3' name='Fit' />
              <input type='radio' value='4' name='Fit' />
              <input type='radio' value='5' name='Fit' label='runs long' />
            </div>
            <h4>Review Summary</h4>
            <Input type='text'
              value={summary}
              name='summary'
              onChange={formHandler} />
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
          </form>
        </WriteReviewForm>
        <Exit value='CloseAddReview' onClick={closeModal}>Close</Exit>

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