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


sortPositiveAndNegetive = (arr)=>{
    let i = 0;
    let positive = [];
    let negetive = [];
    while(i<arr.length){
     

    if(arr[i]<0){
        negetive.push(arr[i]);
    } else {
        positive.push(arr[i]);
    }
       i++;
    }
    return { positive, negetive};
}
let arr = [2,4,-8,-4];
console.log(sortPositiveAndNegetive(arr));