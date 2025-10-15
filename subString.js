var isSubString = (mainString, subString) => {
    
    return mainString.includes(subString)

}

console.log(isSubString("amar sonar bangla.","bangla")) // Should return true
console.log(isSubString("amar sonar bangla","Abngladesh")) // Should return false
console.log(isSubString("amar sonar bangla","abc")) // Should return false
console.log(isSubString("amar sonar bangla","sonar")) // Should return true
console.log(isSubString("Bangladesh","Bangla")) // Should return true