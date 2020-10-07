import React from "react";

const DropDown = ({ options }) => {
  const listOfOptions = options.map((option) => {
    return <option value={option}>{option}</option>;
  });

  return (
    <select name="" id="">
      {listOfOptions}
    </select>
  );
};

export default DropDown;
