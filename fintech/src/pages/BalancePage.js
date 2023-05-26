import React, { useEffect } from "react";
import HeaderTitle from "../components/News/HeaderTitle";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const BalancePage = () => {
  const queryParams = useLocation().search;
  const fintechUseNo = queryString.parse(queryParams).fintechUseNo;

  let accessToken = "";
  useEffect(() => {
    console.log(localStorage.getItem("accessToken"));
    console.log(localStorage.getItem("userSeqNo"));
    accessToken = localStorage.getItem("accessToken");
    getAccountBalance();
  }, []);

  const getAccountBalance = () => {
    //해당 부분을 계좌 잔액 조회 API 요청으로 변경 필요

    const option = {
      method: "GET",
      url: "",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Authorization: `Bearer ${accessToken}`,
      },
      params: {},
    };

    axios(option).then(({ data }) => {
      console.log(data);
      //시뮬레이터 응답 전문 없음 (성공)
    });
  };

  return (
    <div>
      <HeaderTitle title={"잔액조회"}></HeaderTitle>
    </div>
  );
};

export default BalancePage;
