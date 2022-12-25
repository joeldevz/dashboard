import Link from "next/link";
import React, { useState } from "react";
import IconsGoogle from "../Icons/IconsGoogle";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    {
      title: "Dashboard",
      src: (
        <IconsGoogle
          className=" text-3xl hover:scale-110 transition-transform "
          name="home"
        />
      ),
      url: "/dashboard",
      mobile: true,
    },
    {
      title: "TPV",
      src: (
        <IconsGoogle
          className=" text-3xl hover:scale-110 transition-transform "
          name="storefront"
        />
      ),
      url: "/dashboard/tpv",

      mobile: true,
    },
    {
      title: "Inbox",
      src: (
        <IconsGoogle
          className=" text-3xl hover:scale-110 transition-transform "
          name="barcode_scanner"
        />
      ),
      url: "/dashboard",

      mobile: true,
    },
    {
      title: "Product",
      src: (
        <IconsGoogle
          className=" text-3xl hover:scale-110 transition-transform "
          name="inventory"
        />
      ),
      url: "/dashboard",

      mobile: true,
    },
  ];

  return (
    <>
      <div className="h-full absolute hidden md:flex z-40">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-black dark:bg-gray-300 my-4 ml-4  p-5  rounded-3xl pt-8 relative duration-300 shadow-lg shadow-black`}
        >
          <div
            className={`absolute cursor-pointer bg-gray-900 dark:bg-gray-300  -right-3 top-20 w-7 rounded-full  `}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <span class="material-symbols-outlined text-white dark:text-black ">
                arrow_back_ios
              </span>
            ) : (
              <span class="material-symbols-outlined text-white dark:text-black">
                arrow_forward_ios
              </span>
            )}
          </div>
          <div className="flex gap-x-4 items-center">
            <div
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            >
              <IconsGoogle
                className=" text-white dark:text-black text-4xl"
                name="lunch_dining"
              />
            </div>
            <h1
              className={`text-white dark:text-black origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              KOWE
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <Link href={Menu.url} key={index}>
                <li
                  className={`flex  rounded-md p-1.5 cursor-pointer  dark:text-black text-gray-300 text-sm items-center gap-x-4  hover:scale-110 transition-transform
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                    index === 0 && "bg-light-white"
                  } `}
                >
                  {Menu.src}
                  <span
                    className={`${!open && "hidden"} origin-left duration-300 `}
                  >
                    {Menu.title}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className=" w-full absolute  md:hidden bottom-0 flex">
        <div
          className={` w-full bg-gray-900 my-4 mx-4 rounded-3xl  relative duration-300`}
        >
          <ul className="flex justify-around ">
            {Menus.map((Menu, index) =>
              Menu.mobile ? (
                <li
                  key={index}
                  className={`flex  rounded-md cursor-pointer p-5 hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
               `}
                >
                  {Menu.src}
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
