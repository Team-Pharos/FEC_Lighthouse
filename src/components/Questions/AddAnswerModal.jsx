import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AddAnswer = (props) => {
  return (
    <>
    <h3>Submit Your Answer</h3>
    <h5>{"[Product Name]:[Question Body]"}</h5>
    <h6>Your Answer *</h6>
    <input type="text" required maxlength="1000"/>
    <h6>What is your nickname? *</h6>
    <input type="text" required maxlength="60" placeholder="Example: jack543!"/>
    <p>For privacy reasons, do not use your full name or email address</p>
    <h6>Email *</h6>
    <input type="email" required maxlength="60" placeholder="Example: jack@email.com"/>
    <p>For authentication reasons, you will not be emailed</p>
    </>
  )
}

export default AddAnswer;