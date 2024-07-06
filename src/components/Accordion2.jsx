import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div style={{background:"#fff"}} className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div style={{fontWeight:"600"}}>{title}</div>
        <div>{isActive ? '-' : <img style={{marginTop:"8px"}} src='/assets/downarrow.png'/>}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;