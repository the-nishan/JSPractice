//reverse
let revString = (word) => {
  return word
  .split("")
  .reverse()
  .join("");
};
console.log(revString("redmi"));

//panlindrome
let palindromeCheck = (word) => {
  let revWord = [];
  word
  .split("")
  .reverse()
  .join("");
  revWord.push(word);
  return revWord;
};
console.log(palindromeCheck("abc"));
