import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Input = styled.input`
  width: 200px;
`;

const AddAnswer = (props) => {
  return (
    <>
    <h3>Submit Your Answer</h3>
    <h5>{"[Product Name]:[Question Body]"}</h5>
    <p>Your Answer *</p>
    <Input type="text" required maxlength="1000"/>
    <p>What is your nickname? *</p>
    <Input type="text" required maxlength="60" placeholder="Example: jack543!"/>
    <h6>For privacy reasons, do not use your full name or email address</h6>
    <p>Email *</p>
    <Input type="email" required maxlength="60" placeholder="Example: jack@email.com"/>
    <h6>For authentication reasons, you will not be emailed</h6>
    <button>Submit Answer</button><button>Close</button>
    </>
  )
}

export default AddAnswer;