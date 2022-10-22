import React, { useState } from "react";

const IconsGoogle = ({ className, name, rounded }) => {
  const cssClass = `material-symbols-${rounded ? "rounded" : "outlined"}`;
  return (
    <>
      <span className={`${cssClass}   ${className}`}>{name}</span>
    </>
  );
};

export default IconsGoogle;
