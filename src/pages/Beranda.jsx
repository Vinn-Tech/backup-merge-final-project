import React, { useState } from "react";
// import EditTable from "./TEST/EditTable";

export const Beranda = () => {
    const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div className="flex flex-col gap-4 justify-center w-screen h-screen items-center bg-slate-900">
      <h1 className="text-white">HomePage is Under Construction</h1>
      <button onClick={handleOpen} variant="gradient">
    Open Dialog
  </button>
  {/* <EditTable handleOpen={handleOpen} open={open}/>  */}
      <a href="login" className="border-2 rounded-lg w-64 text-center bg-blue-600 text-white">ke Halaman Login User</a>
      <a href="register" className="border-2 rounded-lg w-64 text-center bg-blue-600 text-white">Ke Halaman Register</a>
      <a href="admin"className="border-2 rounded-lg w-64 text-center bg-blue-600 text-white">Ke halaman Admin Login</a>
    </div>
  );
};