import React from "react";
import HeaderTitle from "../components/News/HeaderTitle";
import { QRCodeSVG } from "qrcode.react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const QRBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;
const QrCodePage = () => {
  const queryParams = useLocation().search;
  const fintechUseNo = queryString.parse(queryParams).fintechUseNo;

  return (
    <div>
      <HeaderTitle title={"QR 코드 생성"}></HeaderTitle>
      <QRBlock>
        <QRCodeSVG value={fintechUseNo} size={256} />
        <p>{fintechUseNo}</p>
      </QRBlock>
    </div>
  );
};

export default QrCodePage;
