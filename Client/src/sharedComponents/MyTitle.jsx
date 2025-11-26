import React, { Children } from "react";

const MyTitle = ({ className, children }) => {
  return <div className={`${className} text-secondary font-bold text-2xl`}>{children}</div>;
};

export default MyTitle;
