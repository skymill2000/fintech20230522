const Welcome = ({ username, age }) => {
  console.log(username);
  return (
    <p>
      안녕하세요! {username}님 반갑습니다. 나이는 {age}세 입니다.
    </p>
  );
};

export default Welcome;
