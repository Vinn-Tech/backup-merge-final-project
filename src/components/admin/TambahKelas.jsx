import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { FormSelect } from "../form/FormSelect";
import FormInput from "../form/FormInput";
import { postClassForm } from "../../services/create-class";
import { toast } from "react-toastify";

export const TambahKelas = ({ open, handler }) => {
  const [formKelas, setFormKelas] = useState({
    class_image: null,
    name: "",
    code: "",
    price: "",
    goals: [],  
    prerequisites:[],
    author: "",
    about: "",
    category_id: "1",
    type_id: "1",
    level_id: "1",
  });
const handlePrerequisitesChange = (e, index) => {
  const { value } = e.target;
  const updatedPrerequisites = [...formKelas.prerequisites];
    updatedPrerequisites[index] = value;
    setFormKelas({ ...formKelas, prerequisites: updatedPrerequisites });
  };

  const addPrerequisites = () => {
    setFormKelas({ ...formKelas, prerequisites: [...formKelas.prerequisites, ""] });
  };
  const handleRemovePrerequisites = (index) => {
    const updatedPrerequisites = [...formKelas.prerequisites];
    updatedPrerequisites.splice(index, 1);
    setFormKelas({ ...formKelas, prerequisites: updatedPrerequisites });
  };
  const handleGoalsChange = (e, index) => {
    const { value } = e.target;
    const updatedGoals = [...formKelas.goals];
    updatedGoals[index] = value;
    setFormKelas({ ...formKelas, goals: updatedGoals });
  };

  const addGoals = () => {
    setFormKelas({ ...formKelas, goals: [...formKelas.goals, ""] });
  };
  const handleRemoveGoals = (index) => {
    const updatedGoals = [...formKelas.goals];
    updatedGoals.splice(index, 1);
    setFormKelas({ ...formKelas, goals: updatedGoals });
  };

  const handleFileChange = (event) => {
    setFormKelas({ ...formKelas, class_image: event.target.files[0] });
  };

  const handleInputParseIntChange = (e) => {
    const { id, value } = e.target;
    setFormKelas({
      ...formKelas,
      [id]: parseInt(value, 10),
    });
    console.log(e.target.value, formKelas, "ini isinyahandleINPUT");
    console.log(e.target.files, formKelas, "ini file");
  };
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormKelas({
      ...formKelas,
      [id]: value,
    });
    console.log(e.target.value, formKelas, "ini isinya");
  };

  const handleCreateClass = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("goals", formKelas.goals);
    formData.append("prerequisites", formKelas.prerequisites);
    formData.append("class_image", formKelas.class_image);
    formData.append("name", formKelas.name);
    formData.append("code", formKelas.code);
    formData.append("price", formKelas.price);
    formData.append("author", formKelas.author);
    formData.append("about", formKelas.about);
    formData.append("category_id", formKelas.category_id);
    formData.append("type_id", formKelas.type_id);
    formData.append("level_id", formKelas.level_id);
    try {
      const response = await postClassForm(formData);
      toast.success("sukses");
      setFormKelas({
        class_image: null,
        name: "",
        code: "",
        price: "",
        goals: [],
        prerequisites: [],
        author: "",
        about: "",
        category_id: "1",
        type_id: "1",
        level_id: "1",
      });
      handler();
      return response
    } catch (error) {
      toast.error(error);

    }
  };

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
  return (
    <div>
      {" "}
      <Dialog open={open} handler={handler}>
        <form onSubmit={handleCreateClass}>
          <DialogHeader className="justify-center">Tambah Kelas</DialogHeader>

          <DialogBody className="overflow-y-scroll h-[30rem]">
            {/* Input Kelas */}

            <FormInput
              name="Nama Kelas"
              label="name"
              type="text"
              placeholder="Nama Kelas"
              value={formKelas.name}
              onChange={(e) => handleInputChange(e)}
            />
            <FormInput
              name="Kode Kelas"
              label="code"
              type="text"
              placeholder="Kode Kelas"
              value={formKelas.code}
              onChange={(e) => handleInputChange(e)}
            />
            <FormInput
              name="Harga Kelas"
              label="price"
              type="number"
              placeholder="Harga Kelas"
              value={formKelas.price}
              onChange={(e) => handleInputChange(e)}
            />
            <FormInput
              name="Author"
              label="author"
              type="text"
              placeholder="author"
              value={formKelas.author}
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
                placeholder="Tentang kelas"
                value={formKelas.about}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="goals" className="py-2 text-xs">
                Tujuan Kelas
              </label>
              {formKelas.goals.map((goal, index) => (
      
                <div key={index} className="flex flex-row pb-2 pt-1">
                  <input
                    type="text"
                    id="goals"
                    value={goal}
                    placeholder="Tambahkan Tujuan Kelas"
                    onChange={(e) => handleGoalsChange(e, index)}
                    className="w-4/5 h-12 rounded-xl py-2 px-5 border-2"
                  />
                  <button
                    className="px-2 border-2 bg-red-600 rounded-xl mx-4 w-24 h-12 text-white"
                 
                    onClick={() => handleRemoveGoals(index)}
                  >
                    Hapus
                  </button>
                </div>
              ))}
              <Button
                variant="gradient"
                color="green"
                className="rounded-lg"
                onClick={addGoals}
              >
                Tambahkan Tujuan Kelas
              </Button>
            </div>
            {/* //!Prerequisites */}
            <div className="flex flex-col">
              <label htmlFor="prerequisites" className="py-2 text-xs">
              Prerequisites
              </label>
              {formKelas.prerequisites.map((prerequisites, index) => (
      
                <div key={index} className="flex flex-row pb-2 pt-1">
                  <input
                    type="text"
                    id="prerequisites"
                    value={prerequisites}
                    placeholder="Tambahkan Prerequisites"
                    onChange={(e) => handlePrerequisitesChange(e, index)}
                    className="w-4/5 h-12 rounded-xl py-2 px-5 border-2"
                  />
                  <button
                    className="px-2 border-2 bg-red-600 rounded-xl mx-4 w-24 h-12 text-white"
                 
                    onClick={() => handleRemovePrerequisites(index)}
                  >
                    Hapus
                  </button>
                </div>
              ))}
              <Button
                variant="gradient"
                color="green"
                className="rounded-lg"
                onClick={addPrerequisites}
              >
                Tambahkan Prerequisites
              </Button>
            </div>
            <FormSelect
              label="category_id"
              name="Kategori"
              options={kategoriOptions}
              onChange={(e) => handleInputParseIntChange(e)}
            />
            <FormSelect
              name="Tipe Kelas"
              label="type_id"
              options={tipeKelas}
              onChange={(e) => handleInputParseIntChange(e)}
            />
            <FormSelect
              name="Level"
              label="level_id"
              options={levelKesulitan}
              onChange={(e) => handleInputParseIntChange(e)}
            />
            <div className="flex flex-col">
              <label htmlFor="class_image" className="py-2 text-xs">
                Upload Image
              </label>
              <input
                type="file"
                name="file"
                id="class_image"
                className="w-full h-12 rounded-xl py-1 px-5 file:pt-1 file:rounded-full border-2 file:w-24 file:border-gray-800 file:bg-blue-600 file:text-white"
                onChange={handleFileChange}
              />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handler}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button
              variant="gradient"
              color="green"
              className="rounded-2xl"
              type="submit"
            >
              <span>Simpan</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
};
