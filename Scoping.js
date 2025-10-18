sampleVariable = "Global scope"
var sampleFunc = ()=>{
    var sampleVariable = "Function Scope";
    console.log(sampleVariable)

    if(true) {
        var sampleVariable = "block scope";
        console.log(sampleVariable)
    }

}
sampleFunc()

console.log(sampleVariable);