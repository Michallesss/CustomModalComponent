import { useState } from 'react';
import './modal.css';

function Modal({isOpen: initIsOpen = false, children}){
  const [isOpen, setIsOpen] = useState(initIsOpen);

  const toggle = () => setIsOpen(!open);

  if (isOpen) return (
    <div className="modal-background" onClick={toggle}>
      <div onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}


Modal.Header = ({ title, toggle }) => (
  <div className="modal-header">
    <h2>{title}</h2>
    <button onClick={toggle}>X</button>
  </div>
);

Modal.Content = ({ children }) => (
  <div className="modal-body">
    {children}
  </div>
);

Modal.Footer = ({ callToActionLabel }) => (
  <div className="modal-footer">
    <button>{callToActionLabel}</button>
  </div>
);

export default Modal;