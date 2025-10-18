//electric bill
funcCalculateElectricBill = (val) => {
  let SV1 = val;

  //  1st step
  if (SV1 < 100) {
    val = val;
  } else {
    SV1 >= 100;
    val = 100;
  }
  sum1 = val * 10;
  val1=SV1-100

  // 2nd step
  if (SV1 >= 100 && SV1 < 300) {
    val = val;
  } else {
    SV1 >= 300;
    val1 = 200;
  }
  sum2 = val1 * 12;
  val2=SV1-100-200;

  // 3rd step
  if (SV1 >= 300 && SV1 < 500) {
    val2 = val2;
  } else {
    SV1 >= 500;
    val2 = 200;
  }
  sum3 = val2 * 15;
  val3=SV1-100-200-200;

  // 4th step
  if (SV1 >= 500 && SV1 < 700) {
    val3 = val3;
  } else {
    SV1 >= 700;
    val3 = 200;
  }
  sum4 = val3 * 20;
  val4=SV1-100-200-200-200;

  if (SV1 >= 700) {
    val4 = 50;
  }
   sum5 = val4 * 25;
  val5=SV1-100-200-200-200-50;

   return sum1 + sum2 + sum3 + sum4 + sum5;

  }

 

console.log(funcCalculateElectricBill(150));
