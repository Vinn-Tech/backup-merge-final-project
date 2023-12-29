import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarAdmin } from "../../components/admin/NavbarAdmin";
import {faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import filterAdmin from "../../assets/Filter.svg";
import { SideBarAdmin } from "../../components/admin/SideBarAdmin";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import { TablePembayaran } from "../../components/admin/TablePembayaran";
import { CardAdminApi } from "../../components/admin/CardAdminApi";
export const AdminDashboard = () => {
  const [open, setOpen] = useState(false);
  const show = () => {
    setOpen(!open);
  };
  return (
    <div>
  
      <div className="flex">
        <div className="laptop:w-[20%] overflow-hidden laptop:block hidden ">
          <SideBarAdmin />
        </div>
        <div className="flex-1 w-10">
          <NavbarAdmin />
          {/* //! Card */}
          <CardAdminApi/>
          {/* //!EndCard */}

          {/* Table */}
          <div className="container mx-auto w-10/12 pb-4">
            {/* <div className="flex flex-row justify-between pb-2 items-center flex-wrap">
              <h1 className="text-xl font-bold">Status Pembayaran</h1>
              <div className="flex flex-row gap-2">
                <Button
                  variant="outlined"
                  className="rounded-3xl border-blue-600 h-10 w-28 flex items-center gap-2 normal-case hover:bg-purple-600"
                >
                  <img src={filterAdmin} alt="logo" />
                  <h1 className="text-sm text-blue-600">Filter</h1>
                </Button>
                <div className={`relative pb-2`}>
                  <input
                    type="text"
                    className={`rounded-full px-4 border-2 border-[#6148FF] h-10 transition-all duration-500 w-0 focus:w-40 ${
                      open
                        ? "w-40 mobile:w-24 mobile:focus:w-28"
                        : "w-10 mobile:w-10"
                    }`}
                  />
                  <Typography>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      style={{ color: "#6148FF" }}
                      className={`absolute inset-y-0 py-3 right-3 transition-all duration-500 cursor-pointer`}
                      onClick={show}
                    />
                  </Typography>
                </div>
              </div>
            </div> */}
            <TablePembayaran />
          </div>
          {/* End Table */}
        </div>
      </div>
    </div>

  );
};
