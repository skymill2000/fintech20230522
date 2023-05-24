import React from "react";
import HeaderTitle from "../components/News/HeaderTitle";
import SearchInput from "../components/News/SearchInput";
import NewsList from "../components/News/NewsList";

const NewsPage = () => {
  return (
    <div>
      <HeaderTitle title={"뉴스검색"}></HeaderTitle>
      <SearchInput></SearchInput>
      <NewsList></NewsList>
    </div>
  );
};

export default NewsPage;
