import Head from "next/head";
import { useState } from "react";
import { checkPassword } from "../functions/verification";
import { singin } from "../functions/connectbackend";
import { errorAuth } from "../functions/menssage";
import { CODE_HTTP } from "../functions/code";
import IconsGoogle from "../components/Icons/IconsGoogle";
import cookie from "js-cookie";
import { redirect } from "next/dist/server/api-utils";
export default function Register() {
  const [Credentials, setCredentials] = useState({ email: "", password: "" });
  const [visiblePass, setVisiblePass] = useState(true);
  const [error, setError] = useState("");

  const saveCredentials = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value });
  };
  const loggin = async (e) => {
    setError("");
    e.preventDefault();
    if (!checkPassword(Credentials.password))
      return setError("No Cumple los Requirimientos");
    const query = await singin(Credentials);
    if (query.statusCode !== CODE_HTTP.SUCCESS) {
      return errorAuth(query.statusCode, setError);
    }
    cookie.set("access", query.data);
    location.href = "/dashboard/employees";
  };

  return (
    <>
      <Head>
        <title>KOWE.app</title>
      </Head>

      <>
        <div className="bg-blue-50   top-0 left-0 bg-gradient-to-b  bottom-0 leading-5 h-full w-full overflow-hidden"></div>
        <div className="relative   min-h-screen  sm:flex sm:flex-row  justify-center bg-transparent rounded-3xl shadow-2xl">
          <form onSubmit={loggin} className="flex justify-center self-center  ">
            <div className="p-12 bg-black shadow-lg mx-auto rounded-3xl w-96 mt-24 ">
              <h2 className="font-semibold text-3xl text-white text-center mb-4">
                <IconsGoogle
                  className=" text-white text-4xl font-bold"
                  name="lunch_dining"
                />{" "}
                <br />
                KOWE
              </h2>
              <h4 className="text-center text-red-400">{error}</h4>
              <div className="mb-7">
                <h3 className="font-semibold text-xl text-white text-center">
                  Sign In{" "}
                </h3>
                <p className="text-gray-400 invisible">
                  Don thave an account?
                  <a
                    href="#"
                    className="text-sm text-blue-700 hover:text-blue-700"
                  >
                    Sign Up
                  </a>
                </p>
              </div>
              <div className="space-y-6">
                <div className="">
                  <input
                    className=" w-full text-sm text-gray-50  px-4 py-3 bg-gray-900 focus:bg-gray-900 border  border-gray-800 rounded-lg focus:outline-none focus:border-gray-700"
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={saveCredentials}
                    value={Credentials.email}
                  />
                </div>

                <div className="relative">
                  <input
                    placeholder="Password"
                    type={visiblePass ? "password" : "text"}
                    onChange={saveCredentials}
                    name="password"
                    value={Credentials.password}
                    className="text-sm text-gray-50 px-4 py-3 rounded-lg w-full bg-gray-900 focus:bg-gray-900 border border-gray-800 focus:outline-none focus:border-gray-700"
                  />
                  <div className="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5">
                    {visiblePass ? (
                      <svg
                        className="h-4 text-blue-50 cursor-pointer"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        onClick={() => setVisiblePass(false)}
                      >
                        <path
                          fill="currentColor"
                          d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="h-4 text-blue-50 cursor-pointer"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        onClick={() => setVisiblePass(true)}
                      >
                        <path
                          fill="currentColor"
                          d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                        ></path>
                      </svg>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-gray-900  hover:bg-gray-800 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-150"
                  >
                    Sign in
                  </button>
                </div>
              </div>
              <div className="mt-7 text-center text-gray-100 text-xs">
                <span>
                  Copyright © 2021-2023
                  <a
                    href="https://umibu.io/"
                    rel="noopener"
                    title="umibu"
                    className="text-blue-50 hover:text-blue-600 "
                  >
                    UMIBU
                  </a>
                </span>
              </div>
            </div>
          </form>
        </div>
      </>
    </>
  );
}
export const getServerSideProps = async (context) => {
  const cookies = context.req.cookies;
  if (cookies.access && cookies.accessUser) {
    redirect(context.res, 302, "/dashboard");
  }
  if (cookies.access) {
    redirect(context.res, 302, "/dashboard/employees");
  }
  return {
    props: {},
  };
};
