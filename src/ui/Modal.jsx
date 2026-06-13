import React from 'react';

const Modal = ({ isOpen, children, ...props }) => {
  if (!isOpen) return null;
  return <div {...props}>{children}</div>;
};

export default Modal;
