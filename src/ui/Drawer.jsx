import React from 'react';

const Drawer = ({ isOpen, children, ...props }) => {
  if (!isOpen) return null;
  return <div {...props}>{children}</div>;
};

export default Drawer;
