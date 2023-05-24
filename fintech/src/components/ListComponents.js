import React, { useState } from "react";

const ListComponents = () => {
  const [list, setList] = useState([
    { username: "홍길동", age: 33, height: 183 },
    { username: "고길동", age: 43, height: 123 },
    { username: "둘리", age: 23, height: 133 },
  ]);

  return (
    <div>
      {list.map((el) => {
        return (
          <>
            <p>이름 : {el.username}</p>
            <p>나이 : {el.age}</p>
            <p>회원키 : {el.height}</p>
          </>
        );
      })}
    </div>
  );
};

export default ListComponents;
