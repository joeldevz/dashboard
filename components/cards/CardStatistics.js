import React, { useState } from "react";
import IconsGoogle from "../Icons/IconsGoogle";
import CardBase from "./CardBase";

const CardStatistics = ({ children, count, icon, small }) => {
  return (
    <>
      <CardBase className={` bg-slate-100 `}>
        <div className="grid grid-cols-2">
          <IconsGoogle name={icon} className="text-5xl" />
          <IconsGoogle name="more_vert" className="text-4xl text-right" />
        </div>
        <div className=" mt-3">
          <h3 className=" text-3xl  font-bold">
            {count} <small className="font-semibold text-base">{small}</small>
          </h3>
          <div className="mt-3">{children}</div>
        </div>
      </CardBase>
    </>
  );
};

export default CardStatistics;
