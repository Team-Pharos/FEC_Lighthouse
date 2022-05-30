import React from 'react';
import {Input, OuterModal, InnerModal, SearchBarInput,
        BodyInput, Modal, Span, SpanClicked, EntryTitle} from '../Questions/Styles.jsx';
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

  return (
    <OuterModal>
      <ReviewForm>
        <WriteReviewForm>
          <form>
            <h2>Write You Review</h2>
            <h3>About the [Product Name Here]</h3>
            <Input name='email' label='email' placeholder='kjbnjken@gmail.com'/>
            <div><span>[Insert interactive star component here]</span></div>
            <h4>Recommend this product?</h4>
            <div>
              <input type='radio' value='yes' name='recommendation' />recommended
              <input type='radio' value='no' name='recommendation' />not recommended
            </div>
            <h4>How was the sizing?</h4>
            <div>
              <input type='radio' value='1' name='size' label='a size too small'/>
              <input type='radio' value='2' name='size' />
              <input type='radio' value='3' name='size' />
              <input type='radio' value='4' name='size' />
              <input type='radio' value='5' name='size' label='a size too big'/>
            </div>
            <h4>How was the width?</h4>
            <div>
              <input type='radio' value='1' name='width' label='too narrow'/>
              <input type='radio' value='2' name='width' />
              <input type='radio' value='3' name='width' />
              <input type='radio' value='4' name='width' />
              <input type='radio' value='5' name='width' label='too wide'/>
            </div>
            <h4>How comfortable was this?</h4>
            <div>
              <input type='radio' value='1' name='comfort' label='uncomfortable'/>
              <input type='radio' value='2' name='comfort' />
              <input type='radio' value='3' name='comfort' />
              <input type='radio' value='4' name='comfort' />
              <input type='radio' value='5' name='comfort' label='perfect'/>
            </div>
            <h4>How was the quality?</h4>
            <div>
              <input type='radio' value='1' name='quality' label='poor'/>
              <input type='radio' value='2' name='quality' />
              <input type='radio' value='3' name='quality' />
              <input type='radio' value='4' name='quality' />
              <input type='radio' value='5' name='quality' label='perfect'/>
            </div>
            <h4>How was the length?</h4>
            <div>
              <input type='radio' value='1' name='length' label='runs short'/>
              <input type='radio' value='2' name='length' />
              <input type='radio' value='3' name='length' />
              <input type='radio' value='4' name='length' />
              <input type='radio' value='5' name='length' label='runs long'/>
            </div>
            <h4>How was the fit?</h4>
            <div>
              <input type='radio' value='1' name='fit' label='runs short'/>
              <input type='radio' value='2' name='fit' />
              <input type='radio' value='3' name='fit' />
              <input type='radio' value='4' name='fit' />
              <input type='radio' value='5' name='fit' label='runs long'/>
            </div>
            <h4>Review Summary</h4>
            <Input type='text' value='' name='summary'/>
            <h4>Review Body</h4>
            <ReviewBody value='Why did you like the product or not?' name='body'/>
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