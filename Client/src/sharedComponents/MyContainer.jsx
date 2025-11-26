import React from "react";

const MyContainer = ({ className, children }) => {
  return (
    <div className={`${className} mx-auto w-11/12 rounded-xl my-5 p-2`}>
      {children}
    </div>
  );
};

export default MyContainer;
