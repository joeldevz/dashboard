import React from "react";
import IconsGoogle from "../Icons/IconsGoogle";

const CardStatistics = ({ count, icon, small, title }) => {
  return (
    <>
      <div class="w-full max-w-sm bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex flex-col items-center py-10 text-center">
          <IconsGoogle name={icon} className="text-5xl mb-3 " />
          <span class="text-md text-black dark:text-gray-400">
            {count} <small className="font-semibold text-base">{small}</small>
          </span>
          <h5 class="mb-1 text-lg font-medium  text-gray-900 dark:text-white">
            {title}
          </h5>
        </div>
      </div>
    </>
  );
};

export default CardStatistics;
