voterEligibility = (age) =>{
    if (age>18) {
       return "you are eligible for voting";
    } else {
       return "GO HOME!!! you are not eligible for voting";
    }
}
console.log(voterEligibility(10));