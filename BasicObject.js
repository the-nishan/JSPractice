var flat1 = {

  sqFit:{
    hight:{
      x:10,
      y:20
    },
    width:180
  },
  location:'chasara',
  floor:'3rd'
}


var flat2 = {

  sqFit:{
    hight:{
      x:3,
      y:3
    },
    width:100
  },
  location:'killarpul',
  floor:'1st'
}


var flat3 = {...flat2,newPro:'someValue'} // Spread Operator with new key added

var karimsFlats = [flat1,flat2,flat3];


console.log(karimsFlats)