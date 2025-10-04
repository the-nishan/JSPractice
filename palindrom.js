var palindrome = (word) => {
  var wordRev = word.split("").reverse().join("");
  return wordRev === word;
};

console.log(palindrome("madam"));
