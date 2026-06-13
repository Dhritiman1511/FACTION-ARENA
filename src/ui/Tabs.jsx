import React from 'react';

const Tabs = ({ tabs, children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default Tabs;
