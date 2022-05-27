import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Input, OuterModal, InnerModal, BodyInput, Modal } from './Styles.jsx';

const AddAnswer = ({ productName, questionBody, addAnswer, onClose }) => {

  const [bodyInput, setBodyInput] = useState('');
  const [nicknameInput, setNicknameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');


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
          <BodyInput type="text" required maxlength="1000"/>
          <p>What is your nickname? *</p>
          <Input type="text" required maxlength="60" placeholder="Example: jack543!" />
          <h6>For privacy reasons, do not use your full name or email address</h6>
          <p>Email *</p>
          <Input type="email" required maxlength="60" placeholder="Example: jack@email.com" />
          <h6>For authentication reasons, you will not be emailed</h6>
          <input type="submit" value="SubmitAnswer"></input><button onClick={onClose}>Close</button>
          </form>
      </Modal>
        </InnerModal>
    </OuterModal>
  )
}

export default AddAnswer;