import React from "react";
import axios from "axios";

const AxiosComponents = () => {
  const handleClick = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-04-24&sortBy=publishedAt&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5"
      )
      .then((response) => {
        console.log(response.data);
        console.log("응답 수신 완료");
      });
  };
  return (
    <div>
      <button onClick={handleClick}>요청 보내기</button>
    </div>
  );
};

export default AxiosComponents;
