import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

const FilterSide = () => {
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
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
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
  };

  return (
    <div>
      <div className="hidden laptop:flex justify-center items-center bg-[#EBF3FC]">
        <div className="bg-white shadow-lg py-8 px-10 rounded-xl w-full text-xs">
          <div className="mb-4">
            <p className="text-md font-semibold mb-2  ">Filter</p>
            <label className=" mb-2 flex items-center">
              <input
                type="checkbox"
                checked={filters.palingBaru}
                onChange={(e) =>
                  handleCheckboxChange("palingBaru", e.target.checked)
                }
                className=" h-5 w-5 rounded-xl  mr-2 "
              />
              Paling Baru
            </label>

            <label className="mb-2 text-md flex items-center">
              <input
                type="checkbox"
                checked={filters.palingPopuler}
                onChange={(e) =>
                  handleCheckboxChange("palingPopuler", e.target.checked)
                }
                className="h-5 w-5 rounded-xl  mr-2"
              />
              Paling Populer
            </label>

            <label className="mb-2 text-md flex items-center">
              <input
                type="checkbox"
                checked={filters.promo}
                onChange={(e) =>
                  handleCheckboxChange("promo", e.target.checked)
                }
                className="h-5 w-5 rounded-xl  mr-2"
              />
              Promo
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
                checked={filters.businessIntelligence}
                onChange={(e) =>
                  handleCheckboxChange("businessIntelligence", e.target.checked)
                }
                className="h-5 w-5 rounded-xl  mr-2"
              />
              Business Intelligence
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
          </div>

          <div className="mb-4">
            <p className="text-md font-semibold mb-2">Level Kesulitan</p>
            <label className="mb-2 text-md flex items-center">
              <input
                type="checkbox"
                checked={filters.semuaLevel}
                onChange={(e) =>
                  handleCheckboxChange("semuaLevel", e.target.checked)
                }
                className="h-5 w-5 rounded-xl  mr-2"
              />
              Semua Level
            </label>

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

          <button
            onClick={resetFilters}
            className=" text-red-500 text-center w-full"
          >
            Hapus Filter
          </button>

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
            className=" text-right w-full"
          >
            x
          </button>
          {/* Checkbox Inputs */}
          <div className="mb-4">
            <p className="text-md font-semibold mb-2  ">Filter</p>
            <label className=" mb-2 flex items-center">
              <input
                type="checkbox"
                checked={filters.palingBaru}
                onChange={(e) =>
                  handleCheckboxChange("palingBaru", e.target.checked)
                }
                className=" h-5 w-5 rounded-xl  mr-2 "
              />
              Paling Baru
            </label>

            <label className="mb-2 text-md flex items-center">
              <input
                type="checkbox"
                checked={filters.palingPopuler}
                onChange={(e) =>
                  handleCheckboxChange("palingPopuler", e.target.checked)
                }
                className="h-5 w-5 rounded-xl  mr-2"
              />
              Paling Populer
            </label>

            <label className="mb-2 text-md flex items-center">
              <input
                type="checkbox"
                checked={filters.promo}
                onChange={(e) =>
                  handleCheckboxChange("promo", e.target.checked)
                }
                className="h-5 w-5 rounded-xl  mr-2"
              />
              Promo
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
                checked={filters.businessIntelligence}
                onChange={(e) =>
                  handleCheckboxChange("businessIntelligence", e.target.checked)
                }
                className="h-5 w-5 rounded-xl  mr-2"
              />
              Business Intelligence
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
          </div>

          <div className="mb-4">
            <p className="text-md font-semibold mb-2">Level Kesulitan</p>
            <label className="mb-2 text-md flex items-center">
              <input
                type="checkbox"
                checked={filters.semuaLevel}
                onChange={(e) =>
                  handleCheckboxChange("semuaLevel", e.target.checked)
                }
                className="h-5 w-5 rounded-xl  mr-2"
              />
              Semua Level
            </label>

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

<div className="flex justify-around">

          <button className="text-[#6148FF] ">Terapkan Filter</button>
          {/* Reset Filters Button */}
          <button
            onClick={() => {
              
              resetFilters();
            }}
            className="text-red-500 "
          >
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
