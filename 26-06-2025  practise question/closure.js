function createCount() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCount();

console.log(counter()); 
console.log(counter()); 
console.log(counter()); 
