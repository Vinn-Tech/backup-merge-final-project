import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

const FilterSide = (props) => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    palingBaru: false,
    palingPopuler: false,
    promo: false,
    uiuxDesign: false,
    webDevelopment: false,
    androidDevelopment: false,
    dataScience: false,
    businessIntelligence: false,
    iosDevelopment: false,
    semuaLevel: false,
    beginnerLevel: false,
    intermediateLevel: false,
    advancedLevel: false,
  });

  const handleCheckboxChange = (filterType, value) => {
    const typeMapping = {
      freeClass: 1,
      premiumClass: 2,
    };

    const categoryMapping = {
      uiuxDesign: 1,
      productManagement: 2,
      webDevelopment: 3,
      androidDevelopment: 4,
      iosDevelopment: 5,
      dataScience: 6,
    };

    const levelMapping = {
      semuaLevel: "",
      beginnerLevel: 1,
      intermediateLevel: 2,
      advancedLevel: 3,
    };

    if (typeMapping[filterType] !== undefined) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        category: value ? typeMapping[filterType] : "",
        [filterType]: value,
      }));
    }

    if (categoryMapping[filterType] !== undefined) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        category: value ? categoryMapping[filterType] : "",
        [filterType]: value,
      }));
    }

    if (levelMapping[filterType] !== undefined) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        level: value ? levelMapping[filterType] : "",
        [filterType]: value,
      }));
    }
  };

  const applyFilters = () => {
    props.onFilterChange(filters);
    setIsFilterModalOpen(false);
  };

  const resetFilters = () => {
    setFilters({
      freeClass: false,
      premiumClass: false,
      uiuxDesign: false,
      webDevelopment: false,
      androidDevelopment: false,
      dataScience: false,
      businessIntelligence: false,
      iosDevelopment: false,
      semuaLevel: false,
      beginnerLevel: false,
      intermediateLevel: false,
      advancedLevel: false,
      category: "",
      level: "",
    });
  };

  return (
    <div>
      <div className="hidden laptop:flex justify-center items-center bg-[#EBF3FC]">
        <div className="bg-white shadow-lg py-8 px-10 rounded-xl w-full text-xs">
          <div className="mb-4">
            <p className="text-md font-semibold mb-2  ">Tipe Kelas</p>
            <label className=" mb-2 flex items-center">
              <input
                type="checkbox"
                checked={filters.freeClass}
                onChange={(e) =>
                  handleCheckboxChange("freeClass", e.target.checked)
                }
                className="h-5 w-5 rounded-xl  mr-2 "
              />
              Kelas Gratis
            </label>

            <label className="mb-2 text-md flex items-center">
              <input
                type="checkbox"
                checked={filters.premiumClass}
                onChange={(e) =>
                  handleCheckboxChange("premiumClass", e.target.checked)
                }
                className="h-5 w-5 rounded-xl  mr-2"
              />
              Kelas Premium
            </label>
          </div>

          <div className="mb-4">
            <p className="text-md font-semibold mb-2">Kategori</p>
            <label className="mb-2 text-md flex items-center">
              <input
                type="checkbox"
                checked={filters.uiuxDesign}
                onChange={(e) =>
                  handleCheckboxChange("uiuxDesign", e.target.checked)
                }
                className="h-5 w-5 rounded-xl  mr-2"
              />
              UI/UX Design
            </label>

            <label className="mb-2 text-md flex items-center">
              <input
                type="checkbox"
                checked={filters.productManagement}
                onChange={(e) =>
                  handleCheckboxChange("productManagement", e.target.checked)
                }
                className="h-5 w-5 rounded-xl  mr-2"
              />
              Product Management
            </label>

            <label className="mb-2 text-md flex items-center">
              <input
                type="checkbox"
                checked={filters.webDevelopment}
                onChange={(e) =>
                  handleCheckboxChange("webDevelopment", e.target.checked)
                }
                className="h-5 w-5 rounded-xl  mr-2"
              />
              Web Development
            </label>

            <label className="mb-2 text-md flex items-center">
              <input
                type="checkbox"
                checked={filters.androidDevelopment}
                onChange={(e) =>
                  handleCheckboxChange("androidDevelopment", e.target.checked)
                }
                className="h-5 w-5 rounded-xl  mr-2"
              />
              Android Development
            </label>

            <label className="mb-2 text-md flex items-center">
              <input
                type="checkbox"
                checked={filters.iosDevelopment}
                onChange={(e) =>
                  handleCheckboxChange("iosDevelopment", e.target.checked)
                }
                className="h-5 w-5 rounded-xl  mr-2"
              />
              IOS Development
            </label>

            <label className="mb-2 text-md flex items-center">
              <input
                type="checkbox"
                checked={filters.dataScience}
                onChange={(e) =>
                  handleCheckboxChange("dataScience", e.target.checked)
                }
                className="h-5 w-5 rounded-xl  mr-2"
              />
              Data Science
            </label>
          </div>

          <div className="mb-4">
            <p className="text-md font-semibold mb-2">Level</p>
            <label className="mb-2 text-md flex items-center">
              <input
                type="checkbox"
                checked={filters.beginnerLevel}
                onChange={(e) =>
                  handleCheckboxChange("beginnerLevel", e.target.checked)
                }
                className="h-5 w-5 rounded-xl  mr-2"
              />
              Beginner Level
            </label>

            <label className="mb-2 text-md flex items-center">
              <input
                type="checkbox"
                checked={filters.intermediateLevel}
                onChange={(e) =>
                  handleCheckboxChange("intermediateLevel", e.target.checked)
                }
                className="h-5 w-5 rounded-xl  mr-2"
              />
              Intermediate Level
            </label>

            <label className="mb-2 text-md flex items-center">
              <input
                type="checkbox"
                checked={filters.advancedLevel}
                onChange={(e) =>
                  handleCheckboxChange("advancedLevel", e.target.checked)
                }
                className="h-5 w-5 rounded-xl  mr-2"
              />
              Advanced Level
            </label>
          </div>

          <div className="mb-4">
            <p className="text-md font-semibold mb-2">Level Kesulitan</p>
          </div>

          {/* <div className="mb-4">
            <button
              onClick={applyFilters}
              className="text-[#6148FF] text-center w-full"
            >
              Terapkan Filter
            </button>
          </div> */}

          <div className="flex justify-around">
            <button className="text-[#6148FF] " onClick={applyFilters}>
              Terapkan Filter
            </button>
            <button onClick={resetFilters} className="text-red-500 ">
              Hapus Filter
            </button>
          </div>
        </div>
      </div>

      <div className="flex laptop:hidden ">
        {/* Modal Trigger Button */}
        <button
          className="text-[#6148FF] font-bold "
          onClick={() => setIsFilterModalOpen(!isFilterModalOpen)}
        >
          Filter
        </button>

        {/* Modal Popup */}
        {isFilterModalOpen && (
          <div className="fixed inset-x-0 bottom-0 p-4 bg-white shadow-lg max-w-md mx-auto rounded-t-xl text-base overflow-hidden">
            <button
              onClick={() => {
                setIsFilterModalOpen(false);
              }}
              className="text-right w-full"
            >
              x
            </button>
            {/* Checkbox Inputs */}
            <div className="mb-4">
              <p className="text-md font-semibold mb-2  ">Filter</p>
              {/* Tambahkan label-checkbox lain sesuai kebutuhan Anda */}
            </div>

            <div className="mb-4">
              <p className="text-md font-semibold mb-2">Kategori</p>
              {/* Tambahkan label-checkbox lain sesuai kebutuhan Anda */}
            </div>

            <div className="mb-4">
              <p className="text-md font-semibold mb-2">Level Kesulitan</p>
              {/* Tambahkan label-checkbox lain sesuai kebutuhan Anda */}
            </div>

            <div className="mb-4">
              <button
                onClick={applyFilters}
                className="text-[#6148FF] text-center w-full"
              >
                Terapkan Filter
              </button>
            </div>

            <div className="flex justify-around">
              <button className="text-[#6148FF] ">Terapkan Filter</button>
              <button onClick={resetFilters} className="text-red-500 ">
                Hapus Filter
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSide;
