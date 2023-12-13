import React from "react";

export const Beranda = () => {
  return (
    <div className="flex flex-col gap-4 justify-center w-screen h-screen items-center bg-slate-900">
      <h1 className="text-white">HomePage is Under Construction</h1>
      <a href="login" className="border-2 rounded-lg w-64 text-center bg-blue-600 text-white">ke Halaman Login User</a>
      <a href="register" className="border-2 rounded-lg w-64 text-center bg-blue-600 text-white">Ke Halaman Register</a>
      <a href="admin"className="border-2 rounded-lg w-64 text-center bg-blue-600 text-white">Ke halaman Admin Login</a>
    </div>
  );
};