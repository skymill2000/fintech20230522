import React from "react";

const NewsList = ({ newsList }) => {
  return (
    <div>
      {newsList.map((news) => {
        return (
          <>
            <p>{news.title}</p>
            <img src={news.urlToImage}></img>
            <p>{news.description}</p>
            <p>{news.author}</p>
            <a href={news.url}>기사로 이동하기</a>
          </>
        );
      })}
    </div>
  );
};

export default NewsList;
