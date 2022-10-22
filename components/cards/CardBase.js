import React from "react";

const CardBase = ({ children, className }) => {
  return (
    <>
      <div
        className={`shadow-sm  bg-slate-100  bg-opacity-50  rounded-3xl p-5 ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export default CardBase;
