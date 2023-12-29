import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardFooter,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import { getClassByQuery } from "../services/get-all-class";
import { FormSelect } from "./form/FormSelect";
import FormInput from "./form/FormInput";
import { editClassById } from "../services/edit-class";
import { deleteClassById } from "../services/delete-class";
import { useNavigate } from "react-router-dom";
import { FilterAdmin } from "./admin/FilterAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import filter from "../assets/Filter.svg";
import { TambahKelas } from "./admin/TambahKelas";
import { toast } from "react-toastify";
const TABLE_HEAD = [
  "Kode Kelas",
  "Kategori",
  "Nama Kelas",
  "Tipe Kelas",
  "Level",
  "Harga Kelas",
  "Aksi",
];

export const ReactTables = () => {
  const [edit, setEdit] = useState(false);
  const [hapus, setHapus] = useState(false);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [level, setLevel] = useState("");
  const [dataTables, setDataTables] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [openTambah, setOpenTambah] = useState(false);
  const [notFound, setNotFound] = useState(null);
  const handleOpenFilter = () => setOpenFilter(true);
  const handleCloseFilter = () => setOpenFilter(false);
  const show = () => {
    setOpen(!open);
  };
  const handleOpenTambah = () => setOpenTambah(!openTambah);
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    price: 0,
    author: "",
    about: "",
    category_id: 1,
    type_id: 1,
    level_id: 1,
  });
  const navigate = useNavigate();

  const handleGetClass = useCallback(async () => {
    try {
      const response = await getClassByQuery(
        page,
        limit,
        search,
        category,
        type,
        level
      );

      if (response.data.data.classes.length === 0) {
        setDataTables([]);
        setNotFound("Kelas Tidak Ditemukan");
      } else {
        setDataTables(response.data.data.classes);
        setNotFound(null);
      }
    } catch (error) {
      // console.error(error.response.data.error);
      // setNotFound(error.response.data.error);
      setDataTables([]);
    }
  }, [page, limit, search, category, type, level]);

  useEffect(() => {
    handleGetClass();
  }, [handleGetClass]);

  const handleSearch = (e) => {
    setTimeout(() => {
      setSearch(e.target.value);
    }, 1500);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const getLabelById = (id, mapping) => {
    const match = mapping.find((item) => item.id === id);
    return match ? match.label : "Unknown";
  };

  const typeMapping = [
    { id: 1, label: "GRATIS" },
    { id: 2, label: "PREMIUM" },
  ];
  const levelMapping = [
    { id: 1, label: "Beginner" },
    { id: 2, label: "Intermediate" },
    { id: 3, label: "Advanced" },
  ];
  const categoryMapping = [
    { id: 1, label: "UI/UX Design" },
    { id: 2, label: "Product Management" },
    { id: 3, label: "Web Development" },
    { id: 4, label: "Android Development" },
    { id: 5, label: "IOS Development" },
    { id: 6, label: "Data Science" },
  ];
  const kategoriOptions = [
    { label: "UI/UX Design", value: 1 },
    { label: "Product Management", value: 2 },
    { label: "Web Development", value: 3 },
    { label: "Android Development", value: 4 },
    { label: "IOS Development", value: 5 },
    { label: "Data Science", value: 6 },
  ];
  const tipeKelas = [
    { label: "Gratis", value: 1 },
    { label: "Premium", value: 2 },
  ];
  const levelKesulitan = [
    { label: "Beginner", value: 1 },
    { label: "Intermediate", value: 2 },
    { label: "Advanced", value: 3 },
  ];

  const handleEdit = (row) => {
    setEdit(true);
    setSelectedRow(row);
    setFormData({
      name: row.name,
      code: row.code,
      price: row.price,
      author: row.author,
      about: row.about,
      category_id: row.category_id,
      type_id: row.type_id,
      level_id: row.level_id,
    });
  };
  const handleEditDialogClose = () => {
    setEdit(false);
    setSelectedRow(null);
    setFormData({
      name: "",
      code: "",
      price: 0,
      author: "",
      about: "",
      category_id: "",
      type_id: "",
      level_id: "",
    });
  };

  // const handleInputParseIntChange = (e) => {
  //   const { id, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [id]: parseInt(value, 10),
  //   });
  //   console.log(e.target.value, formData, "ini isinyahandleINPUT");
  // };
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    console.log(e.target.value, formData, "ini isinya");
  };
  const handleEditSubmit = async () => {
    try {
      await editClassById(selectedRow.id, formData);
      handleGetClass();
      handleEditDialogClose();
      toast.success("Kelas Berhasil diubah !");
    } catch (error) {
      toast.error("Kelas gagal diubah !");
      console.error(error);
    }
  };
  const handleHapus = (row) => {
    setSelectedRow(row);
    setHapus(true);
  };
  const handleDeleteSubmit = async () => {
    try {
      await deleteClassById(selectedRow.id);
      setHapus(false);
      toast.success("Kelas Berhasil dihapus");
    } catch (error) {
      setHapus(false);
      toast.error("Kelas gagal dihapus");
      console.error(error);
    }
  };
  return (
    <div>
      {/* Tambah KELAS */}
      <TambahKelas open={openTambah} handler={handleOpenTambah} />
      {/* Tambah KELAS */}
      <div className="flex flex-row justify-between pb-2 items-center flex-wrap">
        <h1 className="text-xl font-bold">Kelola Kelas</h1>
        <div className="flex flex-row gap-2 flex-wrap">
          <Button
            variant="filled"
            className="rounded-3xl h-10 w-28 flex items-center gap-2 normal-case pl-4 bg-blue-600"
            onClick={handleOpenTambah}
          >
            <FontAwesomeIcon
              icon={faPlus}
              size="sm"
              className="border-2 border-white rounded-full w-3 h-3 p-1"
            />
            <h1 className="text-sm">Tambah</h1>
          </Button>
          <Button
            variant="outlined"
            className="rounded-3xl border-blue-600 h-10 w-28 flex items-center gap-2 normal-case hover:bg-purple-600"
            onClick={handleOpenFilter}
          >
            <img src={filter} alt="logo" />
            <h1 className="text-sm text-blue-600">Filter</h1>
          </Button>
          <div className={`relative pb-2`}>
            <input
              type="text"
              className={`rounded-full px-4 border-2 border-[#6148FF] h-10 transition-all duration-500 w-0 focus:w-40 ${
                open ? "w-40 mobile:w-40 mobile:focus:w-40" : "w-10 mobile:w-10"
              }`}
              onChange={handleSearch}
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
      {/* Filter Admin */}
      <FilterAdmin
        open={openFilter}
        onClose={handleCloseFilter}
        category={category}
        type={type}
        level={level}
        handleCategory={(e) => setCategory(e.target.value)}
        handleType={(e) => setType(e.target.value)}
        handleLevel={(e) => setLevel(e.target.value)}
        getFilter={handleGetClass}
        setFilter={(filter) => {
          setPage(1);
          setCategory(filter.category || "");
          setType(filter.type || "");
          setLevel(filter.level || "");
        }}
      />
      {/* Filter Admin */}
      {/* UNTUK UBAH */}
      <Dialog open={edit} handler={handleEditDialogClose}>
        <DialogHeader className="justify-center">Edit Kelas</DialogHeader>

        <DialogBody className="overflow-y-scroll h-[30rem]">
          <FormInput
            name="Nama Kelas"
            label="name"
            type="text"
            placeholder="Nama Kelas"
            value={formData.name}
            onChange={(e) => handleInputChange(e)}
          />
          <FormInput
            name="Kode Kelas"
            label="code"
            type="text"
            placeholder="Kode Kelas"
            value={formData.code}
            onChange={(e) => handleInputChange(e)}
          />
          <FormInput
            name="Harga Kelas"
            label="price"
            type="number"
            placeholder="Harga Kelas"
            value={formData.price}
            onChange={(e) => handleInputChange(e)}
          />
          <FormInput
            name="Author"
            label="author"
            type="text"
            placeholder="author"
            value={formData.author}
            onChange={(e) => handleInputChange(e)}
          />
          <div className="flex flex-col">
            <label htmlFor="materi" className="text-xs py-2">
              Materi
            </label>
            <textarea
              name="Materi"
              id="about"
              cols="40"
              rows="4"
              className="border-2 rounded-2xl px-4"
              value={formData.about}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <FormSelect
            name="Kategori"
            label="category_id"
            options={kategoriOptions}
            onChange={(e) => handleInputChange(e)}
          />
          <FormSelect
            name="Tipe Kelas"
            label="type_id"
            options={tipeKelas}
            onChange={(e) => handleInputChange(e)}
          />
          <FormSelect
            name="Level"
            label="level_id"
            options={levelKesulitan}
            onChange={(e) => handleInputChange(e)}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="blue"
            onClick={() =>
              navigate(`/admin/kelola-kelas/chapters/${selectedRow.id}`)
            }
            className="mr-1"
          >
            <span>Chapter Kelas</span>
          </Button>
          <Button
            variant="gradient"
            color="blue"
            onClick={() => navigate(`/admin/kelola-kelas/${selectedRow.id}`)}
            className="mr-1"
          >
            <span>Tambah Chapter</span>
          </Button>
          <Button
            variant="text"
            color="red"
            onClick={handleEditDialogClose}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            className="rounded-2xl"
            type="submit"
            onClick={handleEditSubmit}
          >
            <span>Simpan</span>
          </Button>
        </DialogFooter>
      </Dialog>
      {/* //! END UNTUK UBAH */}
      {/* //!UNTUK HAPUS */}
      <Dialog open={hapus} handler={() => setHapus(false)}>
        <DialogHeader>Anda yakin ingin menghapus kelas ini ?</DialogHeader>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setHapus(false)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleDeleteSubmit}>
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
            {dataTables?.length === 0 ? (
              <tr>
                <td className="p-4 border-b border-blue-gray-50">
                  <h1 className="text-lg uppercase">{notFound}</h1>
                </td>
              </tr>
            ) : (
              dataTables?.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data.code}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {getLabelById(data.category_id, categoryMapping)}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data.name}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {getLabelById(data.type_id, typeMapping)}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {getLabelById(data.level_id, levelMapping)}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data.price}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <div className="flex flex-row gap-1">
                        <Button
                          size="sm"
                          className="normal-case rounded-2xl bg-blue-600"
                          onClick={() => handleEdit(data)}
                        >
                          Ubah
                        </Button>
                        <Button
                          size="sm"
                          className="normal-case rounded-2xl bg-red-600"
                          onClick={() => handleHapus(data)}
                        >
                          Hapus
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
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
  );
};
