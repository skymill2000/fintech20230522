const Welcome = ({ username }) => {
  console.log(username);
  return <p>안녕하세요! {username}님 반값습니다.</p>;
};

export default Welcome;
