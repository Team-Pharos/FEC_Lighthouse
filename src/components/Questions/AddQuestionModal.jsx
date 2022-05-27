import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Input, OuterModal, InnerModal, BodyInput, Modal } from './Styles.jsx';

const AddQuestion = ({ productName, productId, addQuestion, onClose }) => {

  const [bodyInput, setBodyInput] = useState(null);
  const [nicknameInput, setNicknameInput] = useState(null);
  const [emailInput, setEmailInput] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/postQuestion',
      data: {
        product_id: productId,
        body: bodyInput,
        name: nicknameInput,
        email: emailInput
      }
    })
      .then(() => {
        alert('Question added!');
      })
      .then(() => {
        onClose();
      })
      .catch((err) => {
        console.log(`error: ${err}`);
      });
  }

  if (addQuestion === false) {
    return null
  }

  return (
    <OuterModal>
      <InnerModal>
        <Modal>
        <h3>Ask Your Question</h3>
        <h5>{`About the ${productName}`}</h5>
        <form>
        <p>Your Question *</p>
        <BodyInput type="text" className="bodytext" required maxlength="1000" onChange={(e) => {setBodyInput(e.target.value)}}/>
        <p>What is your nickname? *</p>
        <Input type="text" required maxlength="60" placeholder="Example: jackson11!" onChange={(e) => {setNicknameInput(e.target.value)}}/>
        <h6>For privacy reasons, do not use your full name or email address</h6>
        <p>Email *</p>
        <Input type="email" required maxlength="60" placeholder="Example: jackson@email.com" onChange={(e) => {setEmailInput(e.target.value)}}/>
        <h6>For authentication reasons, you will not be emailed</h6>
        <button onClick={submitHandler}>Submit Question</button><button onClick={onClose}>Close</button>
        </form>
        </Modal>
      </InnerModal>
    </OuterModal>
  )
}

export default AddQuestion;