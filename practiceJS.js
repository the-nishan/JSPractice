//reverse
/* let revString = (word) => {
  return word
  .split("")
  .reverse()
  .join("");
};
console.log(revString("redmi")); */

//panlindrome
/* let palindromeCheck = (word) => {
  let revWord = [];
  word
  .split("")
  .reverse()
  .join("");
  revWord.push(word);
  return revWord;
};
console.log(palindromeCheck("abc")); */

//find vowels
/* let funcCountVowels = (word) => {
  let vowels = [];
for(let i=0;i<word.length;i++) {
if(word[i] === "a" || word[i] === "e" || word[i] === "i" ||
  word[i] === "o" || word[i] === "u") {
    vowels.push(word[i]);
  }
}


  return(vowels);
}
console.log(funcCountVowels("paper")); */

//count vowels
let funcCountVowels = (word) => {
  let vowelCount = 0;
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      vowelCount++;
    }
  }

  return vowelCount;
};
console.log(funcCountVowels("paper"));