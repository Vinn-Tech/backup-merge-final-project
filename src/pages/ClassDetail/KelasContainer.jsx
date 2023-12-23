import React, { useState } from "react";
import FilterSide from "../../components/FilterSide";
import KelasDummy from "./KelasDummy";

const KelasContainer = () => {
  const [filterParams, setFilterParams] = useState({
    category: "",
    level: "",
    type: "",
  });

  const handleFilterChange = (newFilterParams) => {
    let typeValue = "";

    if (newFilterParams.freeClass) {
      typeValue = "1";
    } else if (newFilterParams.premiumClass) {
      typeValue = "2";
    } else {
      typeValue = "";
    }

    let categoryValue = "";

    if (newFilterParams.uiuxDesign) {
      categoryValue = 1;
    } else if (newFilterParams.productManagement) {
      categoryValue = 2;
    } else if (newFilterParams.webDevelopment) {
      categoryValue = 3;
    } else if (newFilterParams.androidDevelopment) {
      categoryValue = 4;
    } else if (newFilterParams.iosDevelopment) {
      categoryValue = 5;
    } else if (newFilterParams.dataScience) {
      categoryValue = 6;
    } else {
      categoryValue = "";
    }

    let levelValue = "";

    if (newFilterParams.semuaLevel) {
      levelValue = "";
    } else if (newFilterParams.beginnerLevel) {
      levelValue = 1;
    } else if (newFilterParams.intermediateLevel) {
      levelValue = 2;
    } else if (newFilterParams.advancedLevel) {
      levelValue = 3;
    } else {
      levelValue = "";
    }

    setFilterParams({
      ...newFilterParams,
      type: typeValue,
      category: categoryValue,
      level: levelValue,
    });
  };

  return (
    <div className="flex">
      <FilterSide onFilterChange={handleFilterChange} />
      <KelasDummy classesFilter={filterParams} />
    </div>
  );
};

export default KelasContainer;
