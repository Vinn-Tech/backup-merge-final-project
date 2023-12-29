import React from "react";
import { Card, Typography, List, ListItem } from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { toast } from "react-toastify";
export const SideBarAdmin = () => {
  const location = useLocation();
  const navigate = useNavigate()

  const getBgClass = (path) => {
    return location.pathname === path ? "bg-red-600" : "";
  };
  const handleLogout = () => {
    CookieStorage.remove(CookieKeys.AuthToken);
    toast.success("Log Out Berhasil!");
    navigate("/admin");
  };


  return (
    <Card className="h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none bg-[#6148FF]">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          RealSkills
        </Typography>
      </div>
      <List>
        <Link to={"/admin/dashboard"}>
          <ListItem
            className={`text-white hover:bg-[#489CFF] hover:text-white hover:font-semibold ${getBgClass("/admin/dashboard")}`}
          >
            Dashboard
          </ListItem>
        </Link>
        <Link to={"/admin/kelola-kelas"}>
          <ListItem className={`text-white ${getBgClass("/admin/kelola-kelas")}`}>
            Kelola Kelas
          </ListItem>
        </Link>
        <Link to={"/admin/users"}>
          <ListItem className={`text-white ${getBgClass("/admin/users")}`}>
            Users
          </ListItem>
        </Link>
          <ListItem className="text-white" onClick={handleLogout}>Log Out</ListItem>
      </List>
    </Card>
  );
};
