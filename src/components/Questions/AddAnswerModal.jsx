import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Input, OuterModal, InnerModal, BodyInput, Modal } from './Styles.jsx';

const AddAnswer = ({ productName, question_id, questionBody, addAnswer, onClose }) => {

  const [bodyInput, setBodyInput] = useState(null);
  const [nicknameInput, setNicknameInput] = useState(null);
  const [emailInput, setEmailInput] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/postAnswer',
      data: {
        question_id: question_id,
        body: bodyInput,
        name: nicknameInput,
        email: emailInput,
      }
    })
      // .then(() => {
      //   //this is where you'll add it to state to the top of the list
      // })
      .then(() => {
        onClose();
      })
      .catch((err) => {
        console.log(`error: ${err}`);
      })
  }


  if (addAnswer === false) {
    return null;
  }

  return (
    <OuterModal>
        <InnerModal>
      <Modal>
          <h3>Submit Your Answer</h3>
          <h5>{`${productName}: ${questionBody}`}</h5>
          <form>
          <p>Your Answer *</p>
          <BodyInput type="text" required maxlength="1000" onChange={(e) => {setBodyInput(e.target.value);}}/>
          <p>What is your nickname? *</p>
          <Input type="text" required maxlength="60" placeholder="Example: jack543!" onChange={(e) => {setNicknameInput(e.target.value)}}/>
          <h6>For privacy reasons, do not use your full name or email address</h6>
          <p>Email *</p>
          <Input type="email" required maxlength="60" placeholder="Example: jack@email.com" onChange={(e) => {setEmailInput(e.target.value)}}/>
          <h6>For authentication reasons, you will not be emailed</h6>
          <button onClick={submitHandler}>SubmitAnswer</button><button onClick={onClose}>Close</button>
          </form>
      </Modal>
        </InnerModal>
    </OuterModal>
  )
}

export default AddAnswer;