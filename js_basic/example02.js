//private void getName(){}
//def getName():

function getName(p1, p2) {
  return p1 + p2;
}

const getName2 = (p1, p2) => {
  console.log("첫번째인자는", p1);
  console.log("두번째 인자는", p2);
  return p1 + p2;
};

console.log(getName("홍", "길동"));
console.log(getName2("홍", "길동"));
