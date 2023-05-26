import React, { useState } from "react";
import HeaderTitle from "../components/News/HeaderTitle";
import QrCodeReader, { QRCode } from "react-qrcode-reader";

const QrCodeReaderPage = () => {
  const [val, setVal] = useState("");

  const handleRead = (code) => {
    setVal(code.data);
  };

  return (
    <>
      <HeaderTitle title={"QR 코드 리더"}></HeaderTitle>
      <QrCodeReader delay={100} width={500} height={500} onRead={handleRead} />
      <p>{val}</p>
    </>
  );
};

export default QrCodeReaderPage;
