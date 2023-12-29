import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
const TABLE_HEAD = [
  "Kode Kelas",
  "Kategori",
  "Nama Kelas",
  "Tipe Kelas",
  "Level",
  "Harga Kelas",
  "Aksi",
];

const TABLE_ROWS = [
  {
    kodeKelas: "UIUX0123",
    kategori: "UI/UX Design",
    namaKelas: "Belajar Web Designer dengan Figma",
    tipeKelas: "Gratis",
    level: "Beginer",
    hargaKelas: "Rp 0",
  },
  {
    kodeKelas: "UIUX0124",
    kategori: "UI/UX Design",
    namaKelas: "Belajar Web Designer dengan Figma",
    tipeKelas: "Gratis",
    level: "Beginer",
    hargaKelas: "Rp 0",
  },
  {
    kodeKelas: "UIUX0125",
    kategori: "UI/UX Design",
    namaKelas: "Belajar Web Designer dengan Figma",
    tipeKelas: "Premium",
    level: "Advanced",
    hargaKelas: "Rp 550.000",
  },
  {
    kodeKelas: "UIUX0126",
    kategori: "UI/UX Design",
    namaKelas: "Belajar Web Designer dengan Figma",
    tipeKelas: "Gratis",
    level: "Beginer",
    hargaKelas: "Rp 0",
  },
  {
    kodeKelas: "UIUX0127",
    kategori: "UI/UX Design",
    namaKelas: "Belajar Web Designer dengan Figma",
    tipeKelas: "Gratis",
    level: "Beginer",
    hargaKelas: "Rp 0",
  },
  {
    kodeKelas: "UIUX0128",
    kategori: "UI/UX Design",
    namaKelas: "Belajar Web Designer dengan Figma",
    tipeKelas: "Premium",
    level: "Advanced",
    hargaKelas: "Rp 550.000",
  },
];
export const TableAdmin = () => {
  const [edit, setEdit] = useState(false);
  const [hapus, setHapus] = useState(false);
  const handleEdit = () => setEdit((cur) => !cur);
  const handleHapus = () => setHapus((cur) => !cur);
  return (

<div>
      {/* //!UNTUK UBAH */}
       <Dialog
        size="xs"
        open={edit}
        handler={handleEdit}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Sign In
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your email and password to Sign In.
            </Typography>
          
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleEdit} fullWidth>
              Sign In
            </Button>
        
          </CardFooter>
        </Card>
      </Dialog>
      {/* //! END UNTUK UBAH */}
      {/* //!UNTUK HAPUS */}
      <Dialog open={hapus} handler={handleEdit}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleEdit}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleHapus}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      {/* //!UNTUK HAPUS */}
      {/* Table */}
      <Card className="h-80 w-full overflow-y-scroll">
        <table className="w-full min-w-max table-auto text-left ">
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
            {TABLE_ROWS.map(
              (
                {
                  kodeKelas,
                  kategori,
                  namaKelas,
                  tipeKelas,
                  level,
                  hargaKelas,
                },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={kodeKelas}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {kodeKelas}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {kategori}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {namaKelas}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {tipeKelas}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {level}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {hargaKelas}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-row gap-1">
                        <Button size="sm" className="normal-case rounded-2xl bg-blue-600" onClick={handleEdit}>
                          Ubah
                        </Button>
                        <Button size="sm" className="normal-case rounded-2xl bg-red-600" onClick={handleHapus}>
                          Hapus
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Card>
    </div>


    // <div>
    //   <div>
    //     <div className="overflow-y-scroll h-[21rem]">
    //       <table className="table-auto w-[100%] text-justify ">
    //         <thead className="bg-[#EBF3FC] text-xs font-normal sticky top-0">
    //           <tr>
    //             {tHeading.map((columnName, index) => (
    //               <th key={index} className="p-3">
    //                 {columnName}
    //               </th>
    //             ))}
    //           </tr>
    //         </thead>
    //         <tbody className="text-[0.625rem] font-bold">
    //           {data.map((rowData, rowIndex) => (
    //             <tr key={rowIndex}>
    //               {Object.keys(rowData).map((key, columnIndex) => (
    //                 <td key={columnIndex}>
    //                   {tHeading.includes(key) ? (
    //                     <div>
    //                       <button onClick={() => handleEdit(rowData)}>
    //                         Edit
    //                       </button>
    //                       <button onClick={() => handleDelete(rowData)}>
    //                         Delete
    //                       </button>
    //                     </div>
    //                   ) : (
    //                     rowData[key]
    //                   )}
    //                 </td>
    //               ))}
    //             </tr>
    //           ))}
    //           {console.log(tHeading.includes())}

    //           {/* {data.map((rowData, rowIndex) => (
    //             <tr key={rowIndex}>
    //               {Object.values(rowData).map((value, columnIndex) => (
    //                 <td key={columnIndex}>{value}</td>
    //               ))}
    //             </tr>
    //           ))} */}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    //   {/* <div className="overflow-y-scroll h-[21rem] font-montserrat">
    //     <table className="table-auto w-[100%] text-justify ">
    //       <thead className="bg-[#EBF3FC] text-xs font-normal sticky top-0 ">
    //         <tr>
    //           <th className="p-3">ID</th>
    //           <th className="p-3">Kategori</th>
    //           <th className="p-3">Kelas Premium</th>
    //           <th className="p-3">Status</th>
    //           <th className="p-3">Metode Pembayaran</th>
    //           <th className="p-3">Tanggal Bayar</th>
    //         </tr>
    //       </thead>
    //       <tbody className="text-[0.625rem] font-bold ">
    //         {dataTable.map((data) => (
    //           <tr key={data.id}>
    //             <td className="p-3 text-[#4E5566]">{data.username}</td>
    //             <td className="p-3 text-[#4E5566]">{data.kategori}</td>
    //             <td className="p-3 text-[#202244]">{data.kelasPremium}</td>
    //             <td className="p-3 text-xs">{data.status}</td>
    //             <td className="p-3 text-black">{data.metodePembayaran}</td>
    //             <td className="p-3 text-[#4E5566]">{data.tglBayar}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div> */}
    // </div>
  );
};
