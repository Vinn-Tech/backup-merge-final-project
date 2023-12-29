import { Button, Card, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { getAllPayment } from "../../services/all-payment";
import filterAdmin from "../../assets/Filter.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export const TablePembayaran = () => {
  const [dataPayments, setDataPayments] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const show = () => {
    setOpen(!open);
  };
  const TABLE_HEAD = [
    "ID",
    "Kategori",
    "Nama Kelas",
    "Status",
    "Metode Pembayaran",
    "Tanggal Bayar",
  ];

  const getAllPayments = async () => {
    try {
      const response = await getAllPayment();
      console.log(response.data.data, "dari getAllPayments");
      setDataPayments(response.data.data);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllPayments();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchDataTable = dataPayments.filter((payment) =>
    payment.class.name.toLowerCase().includes(search.toLowerCase())
  );

  const getLabelById = (id, mapping) => {
    const match = mapping.find((item) => item.id === id);
    return match ? match.label : "Unknown";
  };
  const categoryMapping = [
    { id: 1, label: "UI/UX Design" },
    { id: 2, label: "Product Management" },
    { id: 3, label: "Web Development" },
    { id: 4, label: "Android Development" },
    { id: 5, label: "IOS Development" },
    { id: 6, label: "Data Science" },
  ];
  return (
    <div>
      <div className="flex flex-row justify-between pb-2 items-center flex-wrap">
        <h1 className="text-xl font-bold">Status Pembayaran</h1>
        <div className="flex flex-row gap-2">
          {/* <Button
            variant="outlined"
            className="rounded-3xl border-blue-600 h-10 w-28 flex items-center gap-2 normal-case hover:bg-purple-600"
          >
            <img src={filterAdmin} alt="logo" />
            <h1 className="text-sm text-blue-600">Filter</h1>
          </Button> */}
          <div className={`relative pb-2`}>
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              className={`rounded-full px-4 border-2 border-[#6148FF] h-10 transition-all duration-500 w-0 focus:w-40 ${
                open
                  ? "mobile:focus:w-40 w-40 mobile:w-40 "
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
      </div>
      <Card className="h-80 w-[full] overflow-y-scroll">
        <table className="w-full min-w-max table-auto text-left ">
          <thead>
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
            {searchDataTable?.map((payment, index) => {
              const originalDate = new Date(payment.payment_date);
              const dateFormatter = new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                timeZone: "UTC",
              });
              const formattedDate = dateFormatter.format(originalDate);
              const paymentClass = payment.is_paid ? "text-green-400":"text-red-600"
              const paymentStatus = payment.is_paid
                ? "Sudah Dibayar"
                : " Belum Dibayar";
              return (
                <tr key={index}>
                  <td className="p-2 border-b-2">
                    <p className="text-sm">{payment.user_id}</p>
                  </td>
                  <td className="p-2 border-b-2">
                    <p className="text-sm">
                      {getLabelById(payment.class.category_id, categoryMapping)}
                    </p>
                  </td>
                  <td className="p-2 border-b-2">
                    <p className="text-sm">{payment.class.name}</p>
                  </td>
                  <td className="p-2 border-b-2">
                    <p className={`text-sm ${paymentClass}`}>{paymentStatus}</p>
                  </td>
                  <td className="p-2 border-b-2">
                    <p className="text-sm">{payment.payment_method}</p>
                  </td>
                  <td className="p-2 border-b-2">
                    <p className="text-sm">{formattedDate}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};
