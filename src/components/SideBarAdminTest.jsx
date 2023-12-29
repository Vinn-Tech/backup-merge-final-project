import React from "react";
import logo from "../assets/img/logo.png";
export const SideBarAdminTest = () => {
  return (
    <aside>
      <nav>
        <div className="flex items-center justify-center gap-4 py-4 ">
          <img src={logo} alt="brand-logo" className="w-28" />
          <h1 className="text-2xl text-white font-montserrat">Real Skills</h1>
        </div>
        <ul className="py-4 text-base font-bold text-white font-montserrat">
          <li className="py-2 text-justify px-5 bg-blue-500">
            <a href="dashboard">Dashboard</a>
          </li>
          <li className="py-2 text-justify px-5">
            <a href="dashboard">Kelola Kelas</a>
          </li>
          <li className="py-2 text-justify px-5">
            <a href="/admin">Keluar</a>
          </li>
        </ul>
      </nav>
    </aside>
    // <div>
    //   <aside className="fixed top-0 z-10 flex h-screen w-[20%] flex-col border-r-2">
    //     <div className="flex flex-row items-center justify-between mx-14 my-4">
    //       <img
    //         src={logo}
    //         className="h-20 w-20 rounded-full bg-contain"
    //         alt="logo"
    //       />
    //       <h1>Real Skills</h1>
    //     </div>

    //     <div className="flex flex-col items-center">
    //       <a href="test">Dashboard</a>
    //       <a href="http://instagram.com">admin</a>
    //     </div>
    //   </aside>
    // </div>
  );
};
