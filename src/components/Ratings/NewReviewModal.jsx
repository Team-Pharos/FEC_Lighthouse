import React from 'react';
import { Input, OuterModal, InnerModal, SearchBarInput, BodyInput, Modal, Span, SpanClicked, EntryTitle } from '../Questions/Styles.jsx';

const NewReviewModal = ({closeModal}) => {

  return (
    <OuterModal>
      <InnerModal>
        <div>
          <form>
          <h2>Write You Review</h2>
          <h3>About the [Product Name Here]</h3>
          <span>[Insert interactive star component here]</span>
          <h4>Recommend this product?</h4>
          <input type='radio' value='yes' name='recommendation'/>recommended
          <input type='radio' value='no' name='recommendation'/>not recommended
          </form>
        </div>
        <button value='CloseAddReview' onClick={closeModal}>Close</button>
      </InnerModal>
    </OuterModal>
  )
};

export default NewReviewModal;