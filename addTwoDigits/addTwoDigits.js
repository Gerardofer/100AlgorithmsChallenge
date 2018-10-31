function addTwoDigits(n) {
  //turn the argument to string
  //split the new argument
  //turn the new array into numbers
  //use reduce to add the digits

  let newNum = n.toString().split("");

  return newNum.reduce((a, b) => {
    return parseInt(a) + parseInt(b);
  });
}

console.log(addTwoDigits(25));
