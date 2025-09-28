voterEligibility = (age) =>{
    if (age>18) {
       return "you are eligible for voting";
    } else {
       return "GO HOME!!! you are not eligible for voting";
    }
}
console.log(voterEligibility(10));


// login with id pass example

loginServer = (ID, password)=>{
    if (ID === true && password === true){
        return "Login successfull!!";
    } else {
        return "Try again!";
    }
}
console.log(loginServer(true, true));


// equality function

equalityCheck = (a) =>{
    if (a == 12){
        return "Equal";
    } else {
        return "Not equal";
    }
}
console.log(equalityCheck(7));