import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Input, OuterModal, InnerModal, BodyInput, Modal, InputLabel, SectionTitle, PrimaryButton, Button, SubTitle, Description, TitleBackground } from './Styles.jsx';

const AddAnswer = ({ productName, questionID, questionBody, addAnswer, getAllAnswers, onClose }) => {

  const [bodyInput, setBodyInput] = useState(null);
  const [nicknameInput, setNicknameInput] = useState(null);
  const [emailInput, setEmailInput] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/postAnswer',
      data: {
        question_id: questionID,
        body: bodyInput,
        name: nicknameInput,
        email: emailInput,
      }
    })
      .then(() => {
        getAllAnswers();
      })
      .then(() => {
        alert('Answer added!');
      })
      .then(() => {
        onClose();
      })
      .catch((err) => {
        alert('Please fill out all fields with asterisks (*)');
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
        <TitleBackground>
          <SectionTitle>Submit Your Answer</SectionTitle>
        </TitleBackground>
          <SubTitle>{`${productName}: ${questionBody}`}</SubTitle>
          <form>
          <InputLabel>Your Answer *</InputLabel>
          <BodyInput type="text" required maxlength="1000" onChange={(e) => {setBodyInput(e.target.value)}}/>
          <InputLabel>What is your nickname? *</InputLabel>
          <Input type="text" required maxlength="60" placeholder="Example: jack543!" onChange={(e) => {setNicknameInput(e.target.value)}}/>
          <Description>For privacy reasons, do not use your full name or email address</Description>
          <InputLabel>Email *</InputLabel>
          <Input type="email" required maxlength="60" placeholder="Example: jack@email.com" onChange={(e) => {setEmailInput(e.target.value)}}/>
          <Description>For authentication reasons, you will not be emailed</Description>
          <PrimaryButton onClick={submitHandler}>SubmitAnswer</PrimaryButton><Button onClick={onClose}>Close</Button>
          </form>
      </Modal>
        </InnerModal>
    </OuterModal>
  )
}

export default AddAnswer;