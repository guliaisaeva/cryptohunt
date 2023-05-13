import React from "react";
const SelectButton = ({ children, selected, onClick }) => {
    return (
      <span
        onClick={onClick}
        className={
          selected
            ? "font-bold border border-yellow-400 rounded-md cursor-pointer p-1 px-2 font-mons bg-yellow-400 text-black "
            : " border border-yellow-400 rounded-md cursor-pointer p-1 px-2 font-mons "
        }
      >
        {children}
      </span>
    );
  };

  export default SelectButton;