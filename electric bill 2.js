let electricBill = (units) => {
  let iniUnit = 0;
  let iniBill = 0;

  if (units <= 100) {
    iniBill = units * 10;
  } else if (units > 100 && units <= 300) {
    iniUnit = units - 100;
    iniBill = 100 * 10 + iniUnit * 12;
  } else if (units > 300 && units <= 500) {
    iniUnit = units - 300;
    iniBill = 100 * 10 + 200 * 12 + iniUnit * 15;
  } else if (units > 500 && units <= 700) {
    iniUnit = units - 500;
    iniBill = 100 * 10 + 200 * 12 + 200 * 15 + iniUnit * 20;
  } else {
    iniUnit = units - 700;
    iniBill = 100 * 10 + 200 * 12 + 200 * 15 + 200 * 20 + iniUnit * 25;
  }

  return iniBill;
};
console.log(electricBill(750));
