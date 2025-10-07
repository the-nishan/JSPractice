let funcBreak = (set) => {
  let i = 0;
  let result = [];
  while (i < set.length) {
    if (set[i] === 6) {
      break;
    }
    result.push(set[i]);
    i++;
  }
  return result;
};
console.log(funcBreak([5, 4, 9, 6, 2, 7, 1, 4, 6, 9]));