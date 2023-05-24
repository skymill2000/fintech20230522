import React from "react";
import HeaderTitle from "../components/News/HeaderTitle";
import SearchInput from "../components/News/SearchInput";
import NewsList from "../components/News/NewsList";

const NewsPage = () => {
  return (
    <div>
      <HeaderTitle></HeaderTitle>
      <SearchInput></SearchInput>
      <NewsList></NewsList>
    </div>
  );
};

export default NewsPage;
