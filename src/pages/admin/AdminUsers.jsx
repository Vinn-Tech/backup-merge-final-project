import React, { useEffect, useState } from "react";
import { NavbarAdmin } from "../../components/admin/NavbarAdmin";
import { SideBarAdmin } from "../../components/admin/SideBarAdmin";
import { CardAdminApi } from "../../components/admin/CardAdminApi";
import { TableUsers } from "../../components/admin/TableUsers";
import { Spinner } from "@material-tailwind/react";
export const AdminUsers = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);
  const fetchData = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };
  return (
    <div>
      {/* {loading ? (
        // Show loading spinner while data is being fetched
        <div className="w-screen h-screen flex justify-center items-center">
          <Spinner className="w-28 h-28" />
        </div>
      ) : (

        <div className="flex">
          <div className="laptop:w-[20%] overflow-hidden laptop:block hidden">
            <SideBarAdmin />
          </div>
          <div className="flex-1 w-10">
            <NavbarAdmin />
    
            <CardAdminApi />
          
         
            <div className="container mx-auto w-10/12 pb-4">
              <TableUsers />
            </div>
           
          </div>
        </div>
      )} */}
      <div className="flex">
        <div className="laptop:w-[20%] overflow-hidden laptop:block hidden ">
          <SideBarAdmin />
        </div>
        <div className="flex-1 w-10">
          <NavbarAdmin />

          <CardAdminApi />

          <div className="container mx-auto w-10/12 pb-4">
            <TableUsers />
          </div>
        </div>
      </div>
    </div>
  );
};
