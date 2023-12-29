import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../services/all-users";
import { Button, Card, CardFooter, Typography } from "@material-tailwind/react";
import { PostNotif } from "./PostNotif";

export const TableUsers = () => {
  const [page, setPage] = useState(1);
  const [dataAllusers, setDataAllUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const getAllDataUsers = async () => {
    try {
      const response = await getAllUsers(page);
      setDataAllUsers(response.data.data.users);
      console.log(response.data.data.users, "dari admin Users");
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getAllDataUsers();
  }, [page]);
  const TABLE_HEAD = ["Id", "Nama", "Email", "Status", "Jumlah Kelas"];
  return (
    <div>
      <PostNotif open={open} handler={handleOpen} />
      <div className="flex flex-row items-center justify-between px-5 flex-wrap py-3 ">
        <h1 className="text-lg font-bold">Data Users</h1>
        <Button onClick={handleOpen} color="blue">Broadcast Notifikasi</Button>
      </div>
      <div>
        <Card className="h-80 w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead className="sticky top-0">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataAllusers?.map((data, index) => {
                const status = data.is_verified
                  ? "Terverifikasi"
                  : "Tidak Terverivikasi";
                return (
                  <tr key={index}>
                    <td className="p-3 pl-6 border-b-2">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data.id}
                      </Typography>
                    </td>
                    <td className="p-3 border-b-2">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data.name}
                      </Typography>
                    </td>
                    <td className="p-3 border-b-2">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data.email}
                      </Typography>
                    </td>
                    <td className="p-3 border-b-2">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {status}
                      </Typography>
                    </td>
                    <td className="p-3 border-b-2">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal after:content-['Kelas'] after:px-2"
                      >
                        {data.class.length}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <CardFooter className="flex items-center laptop:justify-end gap-2 border-t border-blue-gray-50 p-4">
          <Button
            variant="gradient"
            size="sm"
            color="green"
            onClick={handlePreviousPage}
            disabled={page === 1}
          >
            Previous
          </Button>
          <Button
            variant="gradient"
            size="sm"
            color="green"
            onClick={handleNextPage}
          >
            Next
          </Button>
        </CardFooter>
        </Card>
      </div>
    </div>
  );
};
