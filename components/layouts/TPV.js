import SideBar from "../Navigation/SideBar";

export default function LayoutTPV({ children, selectNav }) {
  return (
    <>
      <div className=" w-full flex overflow-hidden  h-screen">
        <SideBar />
        <main className="md:ml-32 py-4 md:pr-8 w-full pr-2 pl- h-full">
          {children}
        </main>
      </div>
    </>
  );
}
