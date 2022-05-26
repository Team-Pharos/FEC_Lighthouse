import React from 'react';

const ImageModal = ({expended, setExpended, children}) => {
  // if (!expended) {
  //   return null
  // }

  return (
    <div className='imageModal' onClick={() => {setExpended(false)}}>
      <div className='imageModal-content' onClick={e => e.stopPropagation()}>
        <div className='imageModal-header'>
          <h4 className='imageModal-title'></h4>
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