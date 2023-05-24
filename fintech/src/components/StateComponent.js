import React, { useState } from "react";

const StateComponent = () => {
  //   let userName = "홍길동";
  let [count, setCount] = useState(0);

  setInterval(() => {
    console.log("카운트를 셉니다", count);
    setCount(1000);
  }, 5000);

  return <div>{count}</div>;
};

export default StateComponent;
