function allTheArgs(func, ...args) {
  return (...moreArgs) => func.apply(this, [...args, ...moreArgs]);
}
/*
function sum(...nums) {
  return nums.reduce((acc, num) => acc + num);
}

const onePlusTwo = allTheArgs(sum, 1, 2);
console.log('🚀 ~ file: index.js ~ line 6 ~ onePlusTwo', onePlusTwo);

const onePlusTwoPlusThree = onePlusTwo(3);
const onePlusTwoPlusFour = onePlusTwo(4);

console.log(onePlusTwoPlusThree); // => 6
console.log(onePlusTwoPlusFour); // => 7

function allTheArgs(func, ...args) {
  console.log(args);
  // debugger;
  // Your code here
  return (...moreArgs) => func.apply(this, [...args, ...moreArgs]);
}


*/

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
