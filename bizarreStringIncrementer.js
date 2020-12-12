// Start your implementation here
const incrementFunction = (alphaNum) =>
  alphaNum.replace(/(\d+)$/, (num) => ++num);

console.log(incrementFunction("90abcg12"));
