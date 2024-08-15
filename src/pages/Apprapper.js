import React from "react";

const AppWrapper = ({ children }) => {
  return (
    <div className=" overflow-hidden">
      {children}
    </div>
  );
};

export default AppWrapper;
