import React from "react";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormInput = ({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  isValid,
  isIconValid,
  classNameInput,
  classNameLabel,
}) => {
  const inputClassName = () => {
    if (isValid === true) {
      return "border-green-600 focus:outline-green-600";
    } else if (isValid === false) {
      return "border-red-600 focus:outline-red-600";
    }
  };

  const iconValidation = () => {
    if (isIconValid === true) {
      return (
        <FontAwesomeIcon
          icon={faCircleCheck}
          size="xl"
          style={{ color: "#188E55" }}
          className="absolute inset-y-0 py-3 end-5"
        />
      );
    } else if (isIconValid === false) {
      return (
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="xl"
          style={{ color: "#FF0000" }}
          className="absolute inset-y-0 py-3 end-5"
        />
      );
    }
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={label} className={`py-2 text-xs ${classNameLabel}`}>
        {name}
      </label>
      <div className="relative">
        {iconValidation()}
        <input
          id={label}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full h-12 rounded-xl px-5 border-2 ${inputClassName()} ${classNameInput}`}
          required
        />
      </div>
    </div>
  );
};

export default FormInput;
