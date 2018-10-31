function adjacentElementsProduct(inputArray) {
  let total = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i + 1] > total) {
      total = inputArray[i] * inputArray[i + 1];
      //   console.log(total);
    }
  }
  return total;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(
  adjacentElementsProduct([-3, -5, -1, 7, 4, -1, 10, 0, -13, -5, 16])
);
console.log(
  adjacentElementsProduct([0, 0, 0, 0, 0, 1, 2, 3, 4, 1, 0, 0, 0, 0, 16, 0, 17])
);
console.log(adjacentElementsProduct([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]));
console.log(adjacentElementsProduct([100, 1, 200, 1, 300, -1, 400, 2]));
