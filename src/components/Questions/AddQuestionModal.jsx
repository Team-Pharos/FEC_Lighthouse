import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Input = styled.input`
  width: 200px;
`;

const AddQuestion = (props) => {
  return (
    <>
    <h3>Ask Your Question</h3>
    <h5>{"About the [Product Name Here]"}</h5>
    <p>Your Question *</p>
    <Input type="text" className="bodytext" required maxlength="1000"/>
    <p>What is your nickname? *</p>
    <Input type="text" required maxlength="60" placeholder="Example: jackson11!"/>
    <h6>For privacy reasons, do not use your full name or email address</h6>
    <p>Email *</p>
    <Input type="email" required maxlength="60" placeholder="Example: jackson@email.com"/>
    <h6>For authentication reasons, you will not be emailed</h6>
    <button>Submit Question</button>
    </>
  )
}

export default AddQuestion;