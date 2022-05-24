import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuestionListEntry = (props) => {
  console.log('props in list entry');
  console.log(props);

  return(
    <h4>Q: Test Question?</h4><p>Helpful? Yes&#40;#&#41;</p>

  )

}

export default QuestionListEntry;