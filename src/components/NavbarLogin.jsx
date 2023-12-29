import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  PowerIcon,
  Bars2Icon,
  BellIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { fetchSearch } from "../services/search";
import { CookieKeys, CookieStorage } from "../utils/cookies";
import { getUserById } from "../services/notifikasi_akun/get_user";
import AvatarPP from "../assets/img/icon/avatarPP.png";

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setIsMenuOpen(false);

  const handleMenuClick = (label) => {
    if (label === "My Profile") {
      // Navigate to the profile page when "My Profile" is clicked
      navigate("/profile");
    } else if (label === "Sign Out") {
      // Remove the authentication token and redirect to the login page
      CookieStorage.remove(CookieKeys.AuthToken, {
        path: "/",
        expires: new Date(0),
      });
      navigate("/login");
    }

    // Close the menu in both cases
    closeMenu();
  };

  const [userData, setUserData] = useState({
    profile_picture: null,
    name: "",
    email: "",
    profile: {
      phone_number: "",
      country: "",
      city: "",
    },
  });

  useEffect(() => {
    const fetchDetailUser = async () => {
      try {
        const data = await getUserById();
        setUserData(data.data.user);
        console.log(data.data.user, "data user");
      } catch (error) {
        console.log("data error", error);
      }
    };

    fetchDetailUser();
  }, []);

  const profileMenuItems = [
    {
      label: "My Profile",
      icon: UserCircleIcon,
      onClick: handleMenuClick,
    },
    {
      label: "Sign Out",
      icon: PowerIcon,
      path: "/login",
      onClick: handleMenuClick,
    },
  ];
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="avatar default"
            className="border border-gray-900 p-0.3"
            src={
              userData && userData.profile?.profile_picture
                ? userData.profile.profile_picture
                : AvatarPP
            }
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 mr-3 text-white transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, path }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => handleMenuClick(label)}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// nav list menu
const navListMenuItems = [
  {
    title: "Kelas Berjalan",
    path: "/kelas",
  },
  {
    title: "Topik Kelas",
    path: "/topik",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, path }) => (
    <Link
      to={path}
      key={title}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <MenuItem>
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-1 lg:text-blue-gray-700 lg:hover:text-black text-white hover:text-blue-gray-900"
        >
          {title}
        </Typography>
      </MenuItem>
    </Link>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-normal text-md "
          >
            <MenuItem className="hidden items-center gap-2 font-medium text-white lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px] " /> Course{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[20rem]   overflow-visible lg:grid">
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium  text-white lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]  text-base" /> Course{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: "Account",
    icon: UserCircleIcon,
    path: "/profile",
  },
  {
    label: "Notification",
    icon: BellIcon,
    path: "/notifikasi",
  },
];

function NavList() {
  return (
    <ul className="mt-2  mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon, path }, key) => (
        <Typography
          key={label}
          as={Link}
          to={path}
          variant="small"
          color="gray"
          className="font-medium text-white "
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full text-base">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span className="text-white hover:text-blue-gray-900">
              {" "}
              {label}
            </span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

export const NavbarLogin = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState("");
  const navigate = useNavigate();
  const handleSearch = async () => {
    try {
      const dataSearch = await fetchSearch(search);
      setSearchData(dataSearch);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (searchData) {
      navigate("/search?query=" + search, {
        state: { results: searchData.classes, query: search },
      });
    }
  }, [searchData, search]);

  const enter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="w-full  max-w-full p-2  lg:pl-6 bg-[#6148FF]  shadow-none border-0 rounded-none lg:rounded-none bg-opacity-100">
      <div className="relative  flex items-center justify-between text-blue-gray-900">
        <div className="flex">
          <img src={logo} alt=" " className="w-12 h-12" />
          <h1 className="text-white text-lg flex items-center">RealSkills</h1>
        </div>

        <>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            size="md"
            color="white"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 lg:hidden "
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>
        </>
        <div className="flex gap-2">
          <div className="flex relative">
            <input
              className="p-2 text-sm flex justify-between rounded-lg shadow-sm w-[7.2rem] laptop:w-full text-[#6148FF]"
              placeholder="Cari Kursus terbaik...."
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={enter}
            />
            <button
              onClick={handleSearch}
              className=" bg-[#6148FF] absolute right-2 mt-2 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="p-1"
              >
                <path
                  d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z"
                  fill="#EBF3FC"
                />
                <path
                  d="M11.4118 8.58609C11.7908 8.96609 11.9998 9.46809 11.9998 10.0001H13.9998C14.0007 9.47451 13.8974 8.95398 13.6959 8.46857C13.4944 7.98316 13.1987 7.54251 12.8258 7.17209C11.3118 5.66009 8.68683 5.66009 7.17383 7.17209L8.58583 8.58809C9.34583 7.83009 10.6558 7.83209 11.4118 8.58609Z"
                  fill="#EBF3FC"
                />
              </svg>
            </button>
          </div>
          <ProfileMenu />
        </div>
      </div>

      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
};
