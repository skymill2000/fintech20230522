//Java
//int[4] intArray = new Array[4];
//ArrayList<Integer> intArray = new ArrayList<Type>;

let array = [1, 2, 3, 4, "String", 43.923];

console.log(array);
console.log(array[0]);
console.log(array[4]);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]); //0,1,2,3,4,5
}

for (arr of array) {
  console.log(arr);
}

array.map((arr) => {
  console.log(arr);
});
