import React, { useState } from "react";
import HeaderTitle from "../components/News/HeaderTitle";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const AuthResultPage = () => {
  const queryParams = useLocation().search;
  console.log(queryParams.replace("?", "").split("&")[0].split("=")[1]);
  const code = queryString.parse(queryParams).code;
  console.log(code);

  const [accessToken, setAccessToken] = useState("");
  const [userSeqNo, setUserSeqNo] = useState("");

  const getAccessToken = () => {
    //Axios 를 통해 토큰을 발급 받습니다.
    let requestBody = {
      code: code,
      client_id: "9c785a50-ac39-4dac-af61-eb82eb80e139", // 본인 클라이언트 ID
      client_secret: "93b9698e-14a8-4462-9f76-6fe06e0250de", // 클라이언트 Secret
      redirect_uri: "http://localhost:3000/authResult",
      grant_type: "authorization_code",
    };

    const urlFormEncodedRequestBody = queryString.stringify(requestBody);
    //urlencoded 형태로 전송 데이터를 변경합니다.

    axios
      .post("/oauth/2.0/token", urlFormEncodedRequestBody)
      .then(({ data }) => {
        console.log(data.access_token);
        console.log(data.user_seq_no);

        setAccessToken(data.access_token);
        setUserSeqNo(data.user_seq_no);

        if (data.rsp_code !== "O0001") {
          localStorage.setItem("accessToken", data.access_token);
          localStorage.setItem("userSeqNo", data.user_seq_no);
          alert("저장 완료");
        } else {
          alert("인증에 실패했습니다 다시 시도해 주세요");
        }
      });
  };

  return (
    <div>
      <HeaderTitle title={"토큰 발급"}></HeaderTitle>
      <p>발급 받은 인증 코드는 : {code}</p>
      <button onClick={getAccessToken}>AccessToken 발급</button>
      <p>발급 받은 AccessToken : {accessToken}</p>
      <p>발급 받은 userSeqNo : {userSeqNo}</p>
    </div>
  );
};

export default AuthResultPage;
