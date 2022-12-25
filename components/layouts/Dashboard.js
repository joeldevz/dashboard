import SideBar from "../Navigation/SideBar";

export default function LayoutDashboard({ children, selectNav }) {
  return (
    <>
      <div className=" w-full flex overflow-hidden  h-screen">
        <main
          className=" flex-1 bg-white dark:bg-black
		transition duration-500 ease-in-out overflow-y-auto shadow-inner "
        >
          <SideBar />
          <main className="md:ml-32 py-4 md:pr-8 pr-2 pl-2">{children}</main>
        </main>
      </div>
    </>
  );
}
