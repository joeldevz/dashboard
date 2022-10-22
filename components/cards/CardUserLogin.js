import Image from "next/image";
import React from "react";

const CardUserLogin = ({ children, name }) => {
  return (
    <>
      <a
        href="#"
        class="flex flex-col items-center group gap-2 hover:scale-110 duration-300 transition-all"
      >
        <Image
          class="rounded border-2 border-transparent group-hover:border-2 group-hover:border-gray-300"
          src="/avatars/avatar1.png"
          width={150 + "px"}
          height={150 + "px"}
          alt="avatar"
        />
        <p class="text-gray-500 group-hover:text-gray-300"> {name} </p>
      </a>
    </>
  );
};

export default CardUserLogin;
