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
/* let funcCountVowels = (word) => {
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
console.log(funcCountVowels("paper")); */

//find maximum
/* let findTheMaximumValueFromArray = (set) => {

} */

//funcCountEvenNumber.  normal
/* funcCountEvenNumber = (set) => {
  let evens = 0;

  for (let i = 0; i < set.length; i++) {
    if (set[i] % 2 === 0) {
      evens++;
    }
  }
  return evens;
};
console.log(funcCountEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])); */

//funcFindEvenNumber.  normal
/* funcFindEvenNumber = (set) => {
  let evens = [];

  for (let i = 0; i < set.length; i++) {
    if (set[i] % 2 === 0) {
      evens.push(set[i]);
    }
  }
  return evens;
};
console.log(funcFindEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])); */


//funcFindEvenNumber.  Break/Continue
/* let funcFindEvenNumber = (set) => {
let range = [];
  for(let i=0;i<set.length;i++) {
    if (set[i]%2 !== 0) {
     continue;
  }
  range.push(set[i]);
}
return range;
}
console.log(funcFindEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])); */



funcBubbleSort = (set) => {
let i=0;
let j=1;
let sorted = [];

for(let i=0;i<set.length;i++) {
  for(let j=1;j<set.length;j++) {

  if(set[i]>set[j]) {
    set[j]=set[i];
  }
  i++;
  }
}
 return (sorted);
}
console.log(funcBubbleSort([34, 7, 23, 32, 5, 62, 12, 9, 17, 45]));