const car = {
  name: "sonata",
  ph: 149,
  start: () => {
    console.log("engine is started");
  },
  stop: () => {
    console.log("engine is stoped");
  },
};

console.log(car.name);
console.log(car.ph);
car.start;
car.stop;
car.start();
car.stop();
