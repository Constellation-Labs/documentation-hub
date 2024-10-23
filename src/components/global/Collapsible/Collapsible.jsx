import React, { useState } from 'react';
import './Collapsible.css'; // Make sure your CSS file is linked

const Collapsible = ({ title, children, fontSize }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='collapsible-main'>
      <div className="collapsible-title" onClick={() => setIsOpen(!isOpen)}
       style={{ fontSize: fontSize || '1.3em' }} >
        {title} <span className={isOpen ? 'caret down' : 'caret right'}>▼</span>
      </div>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
};

export default Collapsible;