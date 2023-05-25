import React, { useEffect } from "react";
import HeaderTitle from "../components/News/HeaderTitle";
import axios from "axios";

const AccountList = () => {
  let accessToken = "";
  let userSeqNo = "";

  useEffect(() => {
    console.log(localStorage.getItem("accessToken"));
    console.log(localStorage.getItem("userSeqNo"));
    accessToken = localStorage.getItem("accessToken");
    userSeqNo = localStorage.getItem("userSeqNo");
    getAccountList();
  }, []);

  const getAccountList = () => {
    const sendData = {
      user_seq_no: userSeqNo,
    };

    const option = {
      method: "GET",
      url: "/v2.0/user/me",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Authorization: `Bearer ${accessToken}`,
      },
      params: sendData,
    };

    axios(option).then(({ data }) => {
      console.log(data);
    });
  };

  return (
    <div>
      <HeaderTitle title={"계좌목록"}></HeaderTitle>
    </div>
  );
};

export default AccountList;
