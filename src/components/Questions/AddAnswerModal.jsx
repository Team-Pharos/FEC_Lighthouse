import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AddAnswer = (props) => {
  return (
    <>
    <h3>Submit Your Answer</h3>
    <h5>{"[Product Name]:[Question Body]"}</h5>
    <p>Your Answer *</p>
    <input type="text" required maxlength="1000"/>
    <p>What is your nickname? *</p>
    <input type="text" required maxlength="60" placeholder="Example: jack543!"/>
    <h6>For privacy reasons, do not use your full name or email address</h6>
    <p>Email *</p>
    <input type="email" required maxlength="60" placeholder="Example: jack@email.com"/>
    <h6>For authentication reasons, you will not be emailed</h6>
    <button>Submit Answer</button>
    </>
  )
}

export default AddAnswer;