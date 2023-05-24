import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
  -webkit-box-shadow: 9px 9px 40px 5px #000000;
  box-shadow: 9px 9px 40px 5px #000000;
`;

const StyledComponents = () => {
  return (
    <div>
      <MyButton>내 버튼입니다.</MyButton>
    </div>
  );
};

export default StyledComponents;
