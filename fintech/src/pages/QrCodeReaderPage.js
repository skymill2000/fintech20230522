import React, { useState } from "react";
import HeaderTitle from "../components/News/HeaderTitle";
import QrCodeReader, { QRCode } from "react-qrcode-reader";

import Modal from "react-modal";
import ModalWithdraw from "../components/Withdraw/ModalWithdraw";

const QrCodeReaderPage = () => {
  const [val, setVal] = useState("");
  const [openModal, setOpenModal] = useState(false); //no camera : true

  const CustomStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: "9",
    },
    content: {
      width: "95%",
      border: `0 solid black`,
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: "99999",
    },
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleRead = (code) => {
    setOpenModal(true);
    setVal(code.data);
  };

  return (
    <>
      <HeaderTitle title={"QR 코드 리더"}></HeaderTitle>
      <QrCodeReader delay={100} width={500} height={500} onRead={handleRead} />
      <Modal
        isOpen={openModal}
        style={CustomStyles}
        onRequestClose={closeModal}
      >
        <ModalWithdraw tofintechno={val}></ModalWithdraw>
      </Modal>

      <p>{val}</p>
    </>
  );
};

export default QrCodeReaderPage;
