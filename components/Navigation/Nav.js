import Image from "next/image";
import React, { useState } from "react";

const Nav = () => {
  return (
    <>
      <nav className="flex flex-wrap items-center mt-2 justify-between ">
        <h3 className="text-4xl font-bold">Good morning, Alexandra!</h3>
        <div className="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
          <a
            href="#"
            className="block md:inline-block text-black hover:text-gray-800 px-3 py-3 border-b-2 border-blue-900 md:border-none"
          >
            <span className="material-symbols-outlined">today</span>
          </a>
          <a
            href="#"
            className="block md:inline-block text-black hover:text-gray-800 px-3 py-3 border-b-2 border-blue-900 md:border-none"
          >
            <span className="material-symbols-outlined">notifications</span>
          </a>
          <a
            href="#"
            className="tflex-shrink-0 w-14 h-14 overflow-hidden rounded-full"
          >
            <Image
              src={"/avatars/avatar1.png"}
              alt="MusharofChy"
              className="object-cover w-full h-full"
              width={"100%"}
              height={"100%"}
            />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
