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
    // setIsFilterModalOpen(false);
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

          <div className="flex justify-around gap-4">
            <button className="text-[#6148FF] " onClick={applyFilters}>
              Terapkan Filter
            </button>
            <button onClick={resetFilters} className="text-red-500 ">
              Hapus Filter
            </button>
          </div>
        </div>
      </div>

      <div className="flex w-full laptop:hidden ">
        {/* Modal Trigger Button */}
        <button
          className="text-[#6148FF] font-bold mobile:flex laptop:hidden"
          onClick={() => setIsFilterModalOpen(!isFilterModalOpen)}
        >
          Filter
        </button>

        {/* Modal Popup */}
        {isFilterModalOpen && (
          <div className="fixed inset-x-0 bottom-0 p-4 bg-white shadow-lg  rounded-t-xl text-base overflow-hidden">
            <button
              onClick={() => {
                setIsFilterModalOpen(false);
              }}
              className=" flex justify-end w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M0.292893 14.2929C-0.0976311 14.6834 -0.0976311 15.3166 0.292893 15.7071C0.683418 16.0976 1.31658 16.0976 1.70711 15.7071L8 9.41421L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L9.41421 8L15.7071 1.70711C16.0976 1.31658 16.0976 0.683417 15.7071 0.292894C15.3166 -0.0976312 14.6834 -0.0976312 14.2929 0.292894L8 6.58579L1.70711 0.292895C1.31658 -0.0976293 0.683418 -0.0976293 0.292893 0.292895C-0.097631 0.683419 -0.097631 1.31658 0.292893 1.70711L6.58579 8L0.292893 14.2929Z"
                  fill="#6148FF"
                />
              </svg>
            </button>
            {/* Checkbox Inputs */}
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

            <div className="flex justify-around">
              <button className="text-[#6148FF] " onClick={applyFilters}>
                Terapkan Filter
              </button>
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
