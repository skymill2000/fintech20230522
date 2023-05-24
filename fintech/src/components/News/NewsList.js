import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 20px;
`;

const Card = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 8px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const Image = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const Description = styled.p`
  margin-top: 10px;
`;

const Author = styled.p`
  margin-top: 10px;
  font-style: italic;
`;

const Link = styled.a`
  display: block;
  margin-top: 10px;
  color: #333;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NewsList = ({ newsList }) => {
  return (
    <Container>
      {newsList.map((news) => (
        <Card key={news.title}>
          <Title>{news.title}</Title>
          <Image src={news.urlToImage} alt={news.title} />
          <Description>{news.description}</Description>
          <Author>{news.author}</Author>
          <Link href={news.url}>기사로 이동하기</Link>
        </Card>
      ))}
    </Container>
  );
};

export default NewsList;
