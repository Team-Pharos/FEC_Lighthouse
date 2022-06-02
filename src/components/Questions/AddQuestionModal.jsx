import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Input, OuterModal, InnerModal, BodyInput, Modal, InputLabel, SectionTitle, PrimaryButton, Button, SubTitle, Description, TitleBackground } from '../Styles.jsx';

const AddQuestion = ({ productName, productId, addQuestion, getAllQuestions, onClose }) => {

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
        getAllQuestions()
      })
      .then(() => {
        alert('Question added!');
      })
      .then(() => {
        onClose();
      })
      .catch((err) => {
        alert('Please fill out all fields with asterisks (*)');
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
          <TitleBackground>
            <SectionTitle>Ask Your Question</SectionTitle>
          </TitleBackground>
          <SubTitle>{`About the ${productName}`}</SubTitle>
          <form>
            <InputLabel>Your Question *</InputLabel>
            <BodyInput type="text" className="bodytext" required maxlength="1000" onChange={(e) => { setBodyInput(e.target.value) }} />
            <InputLabel>What is your nickname? *</InputLabel>
            <Input type="text" required maxlength="60" placeholder="Example: jackson11!" onChange={(e) => { setNicknameInput(e.target.value) }} />
            <Description>For privacy reasons, do not use your full name or email address</Description>
            <InputLabel>Email *</InputLabel>
            <Input type="email" required maxlength="60" placeholder="Example: jackson@email.com" onChange={(e) => { setEmailInput(e.target.value) }} />
            <Description>For authentication reasons, you will not be emailed</Description>
            <PrimaryButton onClick={submitHandler}>Submit Question</PrimaryButton><Button onClick={onClose}>Close</Button>
          </form>
        </Modal>
      </InnerModal>
    </OuterModal>
  )
}

export default AddQuestion;