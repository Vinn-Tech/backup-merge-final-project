import React, { useState } from "react";
import { SideBarAdmin } from "../../components/admin/SideBarAdmin";
import { NavbarAdmin } from "../../components/admin/NavbarAdmin";
import { ReactTables } from "../../components/ReactTables";
import { CardAdminApi } from "../../components/admin/CardAdminApi";

export const KelolaKelas = () => {
  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [openTambah, setOpenTambah] = useState(false);
  const handleOpenFilter = () => setOpenFilter(true);
  const handleCloseFilter = () => setOpenFilter(false);

  const show = () => {
    setOpen(!open);
  };
  const handleOpenTambah = () => setOpenTambah(!openTambah);

  return (
    <div>
      <div className="flex">
        <div className="laptop:w-[20%] overflow-hidden laptop:block hidden ">
          <SideBarAdmin />
        </div>
        <div className="flex-1 w-10">
          <NavbarAdmin />
          {/* //! Card */}
          <div className="py-2">
            <div className="">
             <CardAdminApi/>
            </div>
          </div>
          {/* //!EndCard */}
          {/* Table */}
          <div className="container mx-auto w-10/12 pb-4">
            <ReactTables />
          </div>
          {/* End Table */}
        </div>
      </div>
    </div>
  );
};
