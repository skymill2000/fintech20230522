import React from "react";

const StateComponent = () => {
  let userName = "홍길동";
  setInterval(() => {
    console.log("이름이 변경됩니다 변경된 이름은", userName);
    userName = "둘리";
  }, 3000);

  return <div>{userName}</div>;
};

export default StateComponent;
