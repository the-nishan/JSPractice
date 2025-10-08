var findNumberThatCalculateValuesNotDividedByThree = (num) => {

    let final = []
    for(var i=0;i<num.length;i++){

        if(num[i]%3 !== 0 || num[i] === 0 ){
            continue
        }
        final.push(num[i])

    }
    return final;
};


// findNumberThatCalculateValuesNotDividedByThree declaration is called Camel case!!!




console.log(findNumberThatCalculateValuesNotDividedByThree([1,2,4,9,50,0])); 