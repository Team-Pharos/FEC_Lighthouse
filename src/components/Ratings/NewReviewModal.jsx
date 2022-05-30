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

const NewReviewModal = ({ closeModal, metaData, productId }) => {

  let [reviewBody, setReviewBody] = useState('');
  let [summary, setSummary] = useState('');
  let [reviewForm, setReviewForm] = useState({});

  let characteristics = metaData.characteristics;
  let availableCharacteristics = Object.keys(characteristics);

  let formHandler = (event) => {
    event.preventDefault();
    let name = event.target.name;

    setReviewForm({ ...reviewForm, [name]: event.target.value });
    console.log(reviewForm);

    if (name === 'body') {
      setReviewBody(event.target.value);
    }
    if (name === 'summary') {
      setSummary(event.target.value);
    }
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(`You've submitted!`);
  }

  return (
    <OuterModal>
      <ReviewForm>
        <WriteReviewForm >
          <form onSubmit={handleSubmit} onChange={formHandler}>
            <h2>Write You Review</h2>
            <h3>About the [Product Name Here]</h3>
            <Input
              type='email'
              name='email'
              label='email'
              placeholder='kjbnjken@gmail.com'
              require
            />
            <Input
              type='text'
              name='name'
              placeholder='Your Name'
              require
            />
            <div><span>[Insert interactive star component here]</span></div>
            <div>
              <h4>Recommend this product?</h4>
              <input
                type='radio'
                value={'true'}
                name='recommendation' />recommended
              <input
                type='radio'
                value={'false'}
                name='recommendation' />not recommended
            </div>
            {availableCharacteristics.includes('Size') && (<div>
              <h4>How was the sizing?</h4>
              <input type='radio' value='1' name={characteristics['Size'].id} label='a size too small' />
              <input type='radio' value='2' name={characteristics['Size'].id} />
              <input type='radio' value='3' name={characteristics['Size'].id} />
              <input type='radio' value='4' name={characteristics['Size'].id} />
              <input type='radio' value='5' name={characteristics['Size'].id} label='a size too big' />
            </div>)}
            {availableCharacteristics.includes('Width') && (<div>
              <h4>How was the width?</h4>
              <input type='radio' value='1' name={characteristics['Width'].id} label='too narrow' />
              <input type='radio' value='2' name={characteristics['Width'].id} />
              <input type='radio' value='3' name={characteristics['Width'].id} />
              <input type='radio' value='4' name={characteristics['Width'].id} />
              <input type='radio' value='5' name={characteristics['Width'].id} label='too wide' />
            </div>)}
            {availableCharacteristics.includes('Comfort') && (<div>
              <h4>How comfortable was this?</h4>
              <input type='radio' value='1' name={characteristics['Comfort'].id} label='uncomfortable' />
              <input type='radio' value='2' name={characteristics['Comfort'].id} />
              <input type='radio' value='3' name={characteristics['Comfort'].id} />
              <input type='radio' value='4' name={characteristics['Comfort'].id} />
              <input type='radio' value='5' name={characteristics['Comfort'].id} label='perfect' />
            </div>)}
            {availableCharacteristics.includes('Quality') && (<div>
              <h4>How was the quality?</h4>
              <input type='radio' value='1' name={characteristics['Quality'].id} label='poor' />
              <input type='radio' value='2' name={characteristics['Quality'].id} />
              <input type='radio' value='3' name={characteristics['Quality'].id} />
              <input type='radio' value='4' name={characteristics['Quality'].id} />
              <input type='radio' value='5' name={characteristics['Quality'].id} label='perfect' />
            </div>)}
            {availableCharacteristics.includes('Length') && (<div>
              <h4>How was the length?</h4>
              <input type='radio' value='1' name={characteristics['Length'].id} label='runs short' />
              <input type='radio' value='2' name={characteristics['Length'].id} />
              <input type='radio' value='3' name={characteristics['Length'].id} />
              <input type='radio' value='4' name={characteristics['Length'].id} />
              <input type='radio' value='5' name={characteristics['Length'].id} label='runs long' />
            </div>)}
            {availableCharacteristics.includes('Fit') && (<div>
              <h4>How was the fit?</h4>
              <input type='radio' value='1' name={characteristics['Fit'].id} label='runs short' />
              <input type='radio' value='2' name={characteristics['Fit'].id} />
              <input type='radio' value='3' name={characteristics['Fit'].id} />
              <input type='radio' value='4' name={characteristics['Fit'].id} />
              <input type='radio' value='5' name={characteristics['Fit'].id} label='runs long' />
            </div>)}
            <h4>Review Summary</h4>
            <Input type='text'
              value={summary}
              name='summary' />
            <div>
              <h4>Review Body</h4>
              <ReviewBody
                placeholder='Why did you like the product or not?'
                name='body'
                value={reviewBody}
              />
              {reviewBody.length < 50 ?
                (<span>{50 - reviewBody.length} More Chars Required</span>) :
                (<span>Requirement Met</span>)
              }
            </div>
            <div>
              <h4>Submit Your Photos</h4>
              <Input name='photos' type='file' accept='.png, .jpeg, .gif' />
            </div>
            <div>
              <input type='submit' />
            </div>
          </form>
        </WriteReviewForm>
        <div>
          <Exit value='CloseAddReview' onClick={closeModal}>Close</Exit>
        </div>
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