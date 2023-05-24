import React, { useState } from "react";
import HeaderTitle from "../components/News/HeaderTitle";
import SearchInput from "../components/News/SearchInput";
import NewsList from "../components/News/NewsList";
import axios from "axios";

const NewsPage = () => {
  const [searchInput, setSearchInput] = useState("검색어");
  const [newsList, setNewsList] = useState([]);
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };

  const handleClick = () => {
    console.log(searchInput);
    //Work2: searchInput 을 가지고 axios 요청을 작성하기
    //예상결과 : console 에서 CORS 에러가 발생 예상
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchInput}&from=2023-04-24&sortBy=publishedAt&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5`
      )
      .then((response) => {
        console.log(response.data);
        setNewsList(response.data.articles);
        console.log("응답 수신 완료");
      });
  };

  return (
    <div>
      <HeaderTitle title={"뉴스검색"}></HeaderTitle>
      <SearchInput
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInput>
      <NewsList newsList={newsList}></NewsList>
    </div>
  );
};

export default NewsPage;
