import React, { useEffect, useState } from "react";
import { CardAdmin } from "../../components/admin/CardAdmin";
import { getPremiumClass, getTotalClass } from "../../services/get-all-class";
import { getUsers } from "../../services/all-users";
import logoUsers from "../../assets/LogoUsers.svg";
import premiumCourse from "../../assets/PremiumCourse.svg";
import logoFreeCourse from "../../assets/LogoFreeCourse.svg";
export const CardAdminApi = () => {
  const [totalClass, setTotalClass] = useState();
  const [allPremiumClass, setAllPremiumClass] = useState();
  const [allUsers, setAllUsers] = useState();

  const getClass = async () => {
    try {
      const response = await getTotalClass();
      console.log(response.data.data, "dari CARD");
      setTotalClass(response.data.data.pagination.total_items);
    } catch (error) {
      console.error(error);
    }
  };
  const getAllPremiumClass = async () => {
    try {
      const response = await getPremiumClass();
      console.log(response.data.data, "dari Premium");
      setAllPremiumClass(response.data.data.pagination.total_items);
    } catch (error) {
      console.error(error);
    }
  };
  const getAllUsers = async () => {
    try {
      const response = await getUsers();
      console.log(response.data.data.pagination, "dari Users");
      setAllUsers(response.data.data.pagination.total_items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getClass();
    getAllPremiumClass();
    getAllUsers();
  }, []);

  return (
    <div className="flex flex-row gap-4 justify-center mobile:gap-3 mobile:justify-center laptop:gap-4 laptop:justify-center py-8 flex-wrap">
      <CardAdmin
        totalUsers={allUsers}
        tittleCards={"Active Users"}
        bgColor={"bg-blue-600"}
        logoUser={logoUsers}
      />
      <CardAdmin
        totalUsers={totalClass}
        tittleCards={"Active Class"}
        bgColor={"bg-green-600"}
        logoUser={logoFreeCourse}
      />
      <CardAdmin
        totalUsers={allPremiumClass}
        tittleCards={"Premium Class"}
        bgColor={"bg-blue-600"}
        logoUser={premiumCourse}
      />
    </div>
  );
};
