
// Break Code example


// var sampleCode = (str)=>{

//     var finalString = ""
//     for(var i = 0;i<str.length;i++){ // loop body
//         if(str[i] === 'x' || str[i] === "X"){
//             break;
//         }
//         finalString = finalString + str[i];
//     }//end of the loop
//     return finalString;
// }


//console.log(sampleCode("Boxer"))



// continue code example


var sampleCode = (str)=>{

    var finalString = ""
    for(var i = 0;i<str.length;i++){ // loop body
        if(str[i] === 'x' || str[i] === "X"){
            continue;
        }
        finalString = finalString + str[i];
    }//end of the loop
    return finalString;
}


console.log(sampleCode("Boxer"))