//this.value = "some string";


var object = {
  value: 1,
  value2: 2,

  calc: () => {
    console.log("calling arrow, does not have own this!!");
    return this.value //+ this.value2;
  },

//   calc() {
//     console.log("calling");
//     return this.value + this.value2;
//   },
};

//console.log(this.value);
console.log(object.calc());
