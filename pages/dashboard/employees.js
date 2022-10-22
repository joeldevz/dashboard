import { redirect } from "next/dist/server/api-utils";
import Head from "next/head";
import Image from "next/image";
import CardStatistics from "../../components/cards/CardStatistics";
import CardUserLogin from "../../components/cards/CardUserLogin";
import LayoutDashboard from "../../components/layouts/Dashboard";
import Nav from "../../components/Navigation/Nav";
import SideBar from "../../components/Navigation/SideBar";
import { getAllEmployeer } from "../../functions/connectbackend";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../../components/modals";
export default function Employeer({ employees }) {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const countEmployees = employees.length;
  return (
    <div class="bg-black h-screen ">
      <div class="h-full flex flex-col items-center justify-center">
        <h1 class="text-gray-200 text-5xl">Whoss watching?</h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-slate-50"
          onClick={() => open()}
        >
          Launch modal
        </motion.button>
        <div
          class={`grid grid-cols-1 md:grid-cols-${
            countEmployees < 2 ? countEmployees : 2
          } lg:grid-cols-${countEmployees < 4 ? countEmployees : 4} gap-5 mt-8`}
        >
          {employees.map((employee, index) => (
            <CardUserLogin key={index} name={employee.nickname} />
          ))}
        </div>
        {modalOpen && <Modal handleClose={close} text="sdfsd" />}
        <button
          disabled
          class="border-2 disabled:opacity-50 disabled:hover:text-gray-600 disabled:hover:border-gray-600 border-gray-600 text-gray-600 px-4 py-1 mt-20 hover:border-gray-400 hover:text-gray-400"
        >
          Manage Profiles
        </button>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const cookies = context.req.cookies;
  if (!cookies.access) {
    redirect(context.res, 302, "/");
  }
  const data = await getAllEmployeer(cookies.access);
  if (data.error) {
    redirect(context.res, 302, "/");
  }
  return {
    props: {
      employees: data.data,
    },
  };
};
