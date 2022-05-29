import React, { useState } from "react";

export const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 400);
  };

  const hideTip = () => {
    // clearInterval(timeout);
    setTimeout(() => {
      setActive(false);
    }, 400);
  };

  return (
    <div
      className='Tooltip-Wrapper'
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && (
        <div className='Tooltip-Tip right'>
          {props.content}
        </div>
      )}
    </div>
  )
}