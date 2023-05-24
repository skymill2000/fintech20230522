import React, { useState } from "react";
import HeaderTitle from "../components/News/HeaderTitle";
import SearchInput from "../components/News/SearchInput";
import NewsList from "../components/News/NewsList";

const NewsPage = () => {
  const [searchInput, setSearchInput] = useState("검색어");

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };

  const handleClick = () => {
    console.log(searchInput);
    //Work2: searchInput 을 가지고 axios 요청을 작성하기
  };

  return (
    <div>
      <HeaderTitle title={"뉴스검색"}></HeaderTitle>
      <SearchInput
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInput>
      <NewsList></NewsList>
    </div>
  );
};

export default NewsPage;
