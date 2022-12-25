import React, { useState } from "react";

const OTPBox = ({ otp, setOtp }) => {
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    //Focus next input
  };

  return (
    <>
      <div className="row">
        <div className="col text-center">
          {otp.map((data, index) => {
            return (
              <input
                class="m-2 border h-12 w-12 text-center form-control rounded text-black"
                type="password"
                id="sixth"
                maxlength="1"
                name="otp"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}
          <p>
            <button
              className="btn btn-secondary mr-2"
              onClick={(e) => setOtp([...otp.map((v) => "")])}
            >
              Clear
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default OTPBox;
