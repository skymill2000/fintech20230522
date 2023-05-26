import React, { useEffect, useState } from "react";
import HeaderTitle from "../components/News/HeaderTitle";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import BalanceCard from "../components/Balance/BalanceCard";
import TransactionList from "../components/Balance/TransactionList";

const BalancePage = () => {
  const queryParams = useLocation().search;
  const fintechUseNo = queryString.parse(queryParams).fintechUseNo;
  const [balance, setBalance] = useState("0");
  const [transactionList, setTransactionList] = useState([]);

  let accessToken = "";
  useEffect(() => {
    console.log(localStorage.getItem("accessToken"));
    console.log(localStorage.getItem("userSeqNo"));
    accessToken = localStorage.getItem("accessToken");
    getAccountBalance();
    getAccountTransactionList();
  }, []);

  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    const clientNo = "M202300440"; //이용기관번호 본인것 입력
    let transId = clientNo + "U" + countnum;
    return transId;
  };

  const getAccountTransactionList = () => {
    //axios 요청 작성
    const requestBodyForTransactionList = {
      bank_tran_id: genTransId(),
      fintech_use_num: fintechUseNo,
      inquiry_type: "A",
      inquiry_base: "D",
      from_date: "20220101",
      to_date: "20220201",
      sort_order: "D",
      tran_dtime: "20230511150100",
    };
    const option = {
      method: "GET",
      url: "v2.0/account/transaction_list/fin_num",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Authorization: `Bearer ${accessToken}`,
      },
      params: requestBodyForTransactionList,
    };

    axios(option).then(({ data }) => {
      console.log(data);
      setTransactionList(data.res_list);
    });
  };

  const getAccountBalance = () => {
    //해당 부분을 계좌 잔액 조회 API 요청으로 변경 필요
    const sendObj = {
      bank_tran_id: genTransId(),
      fintech_use_num: fintechUseNo,
      tran_dtime: "20230526100600",
    };

    const option = {
      method: "GET",
      url: "v2.0/account/balance/fin_num",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Authorization: `Bearer ${accessToken}`,
      },
      params: sendObj,
    };

    axios(option).then(({ data }) => {
      console.log(data);
      setBalance(data);
    });
  };

  return (
    <div>
      <HeaderTitle title={"잔액조회"}></HeaderTitle>
      <BalanceCard
        bankName={balance.bank_name}
        fintechNo={balance.fintech_use_num}
        balance={balance.balance_amt}
      ></BalanceCard>
      <TransactionList transactionList={transactionList}></TransactionList>
    </div>
  );
};

export default BalancePage;
