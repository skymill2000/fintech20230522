import React, { useState } from "react";

const InputComponents = () => {
  const [userName, setUserName] = useState("홍길동");

  const handleChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setUserName(value);
  };

  const handleClick = () => {
    alert(userName);
  };

  return (
    <div>
      <br></br>
      <p>{userName}</p>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>이름 바꾸기</button>
    </div>
  );
};

export default InputComponents;
