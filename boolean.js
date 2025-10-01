// voterEligibility = (age) =>{
//     if (age>18) {
//        return "you are eligible for voting";
//     } else {
//        return "GO HOME!!! you are not eligible for voting";
//     }
// }
// console.log(voterEligibility(10));

// // login with id pass example

// loginServer = (ID, password)=>{
//     if (ID === true && password === true){
//         return "Login successfull!!";
//     } else {
//         return "Try again!";
//     }
// }
// console.log(loginServer(true, true));

// // equality function

// equalityCheck = (a) =>{
//     if (a == 12){
//         return "Equal";
//     } else {
//         return "Not equal";
//     }
// }
// console.log(equalityCheck(7));

// sortPositiveAndNegetive = (arr)=>{
//     let i = 0;
//     let positive = [];
//     let negetive = [];
//     while(i<arr.length){

//     if(arr[i]<0){
//         negetive.push(arr[i]);
//     } else {
//         positive.push(arr[i]);
//     }
//        i++;
//     }
//     return { positive, negetive};
// }
// let arr = [2,4,-8,-4];
// console.log(sortPositiveAndNegetive(arr));

// // chain if..else

//     chainCondition = (number) =>{
//         if(number>0 && number<5) {
//             return "Its Tiny!";
//         }
//         if(number>=5 && number<10) {
//             return "Its Small!";
//         }
//         if(number>=10 && number<15) {
//             return "Its Medium!";
//         }
//         if(number>=15 && number<20) {
//             return "Its Big!";
//         }
//           else {
//             return "Its Huge!";
//         }
//         return number;
//     }
//     console.log(chainCondition(22));

//     // switch statement
//      let day = 9;
//     switch(day) {
//         case 1:
//         console.log("Saturday");
//         break;
//         case 2:
//         console.log("SUNDAY");
//         break;
//         case 3:
//         console.log("Monday");
//         break;
//         case 4:
//         console.log("Tuesday");
//         break;
//         case 5:
//         console.log("Wednesday");
//         break;
//         case 6:
//         console.log("Thrusday");
//         break;
//         default:
//         console.log("Friday");

//     }

//    caseInSwitch =(val)=> {
// let answer = "";
// switch(val){
//     case 1:
//         console.log("Alpha");
//         break;
//     case 2:
//         console.log("Beta");
//         break;
//     case 3:
//         console.log("Gamma");
//         break;
//         default:
//             console.log("N/A");
// }
// return answer;
//    }
//    console.log(caseInSwitch(3));

//switch function for calculation

// calculation = (op, n1, n2) => {
//     switch (op) {
//         case "add":
//             return n1+n2;
//             break;
//         case "substract":
//             return n1-n2;
//             break;
//         case "multiply":
//             return n1*n2;
//             break;
//         case "divide":
//             return n1/n2;
//             break;
//             default:
//                 return "invalid input!";

//     }
// }
// console.log(calculation("add",9,10));
// console.log(calculation("divide",10,5));

// conversion of number to word

/*digitToWord = (num) => {
    switch(num) {
        case 1:
            return "One";
            break;
        case 2:
            return "Two";
            break;
        case 3:
            return "Three";
            break;
        case 4:
            return "Four";
            break;
        case 5:
            return "Five";
            break;
            default:
                return "N/A";
    }
}
console.log(digitToWord(2));*/



// Season of the year

seasons = (month) => {
  switch (month) {
    case "December":
    case "January":
    case "February":
      return "Winter";
    case "March":
    case "April":
    case "May":
      return "Spring";
      default:
        return "N/A";
  }
};
console.log(seasons("December"));