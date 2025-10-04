let arr = [4, 989, 3, 765, 9984, 293, 656, 239];

max = (accumulator, element) => {
  return Math.max(accumulator, element);
};
let maximum = arr.reduce(max);
console.log(maximum);