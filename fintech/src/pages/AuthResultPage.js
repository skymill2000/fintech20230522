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

  const getAccessToken = () => {
    //Axios 를 통해 토큰을 발급 받습니다.
    let requestBody = {
      code: code,
      client_id: "9c785a50-ac39-4dac-af61-eb82eb80e139", // 본인 클라이언트 ID
      client_secret: "93b9698e-14a8-4462-9f76-6fe06e0250de", // 클라이언트 Secret
      redirect_uri: "http://localhost:3000/authResult",
      grant_type: "authorization_code",
    };

    axios.post("/oauth/2.0/token", requestBody).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <HeaderTitle title={"토큰 발급"}></HeaderTitle>
      <p>발급 받은 인증 코드는 : {code}</p>
      <button onClick={getAccessToken}>AccessToken 발급</button>
    </div>
  );
};

export default AuthResultPage;
