function add(param1, param2) {
  const params = [...arguments];

  return params.reduce((a, b) => {
    return a + b;
  });
}

function add2(param1) {
  const numbers = [...arguments];
  let total = 0;

  numbers.forEach(n => {
    total += n;
  });
  return total;
}
console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));
