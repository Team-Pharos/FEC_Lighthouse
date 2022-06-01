import React from 'react';
import {CloseButton} from './OverviewStyledCom.jsx';
import {FaWindowClose} from 'react-icons/fa';

const ImageModal = ({setExpanded, children, zoomed, setZoomed}) => {

  return (
    <div data-testid='testImageModal' className='imageModal' onClick={() => {setExpanded(false); setZoomed(false);}}>
      <div className='imageModal-content' onClick={e => e.stopPropagation()}>
        <div className='imageModal-header'>
          <CloseButton
            style={{display: zoomed ? 'none' : ''}}
            onClick={() => {setExpanded(false); setZoomed(false);}}
          ><FaWindowClose /></CloseButton>
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