import React from "react";

const SearchInput = ({ handleChange, handleClick }) => {
  return (
    <div>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>이름 바꾸기</button>
    </div>
  );
};

export default SearchInput;
