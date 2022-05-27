import React from 'react';
import {CloseButton} from './OverviewStyledCom.jsx';

const ImageModal = ({expended, setExpended, children}) => {

  return (
    <div className='imageModal' onClick={() => {setExpended(false)}}>
      <div className='imageModal-content' onClick={e => e.stopPropagation()}>
        <div className='imageModal-header'>
          <CloseButton onClick={() => {setExpended(false)}}>❎</CloseButton>
        </div>
        <div className='imageModal-body'>
          {children}
        </div>
        <div className='imageModal-footer'>
        </div>
      </div>
    </div>
  )
}

export default ImageModal;