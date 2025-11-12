let taxCalculation = (taxAmount) => {
  let myTax = 0;

  if (taxAmount <= 0) {
    myTax = 0;
  } else if (taxAmount <= 350000) {
    myTax = 0;
  } else if (taxAmount <= 450000) {
    myTax = (taxAmount - 350000) * 0.05;
  } else if (taxAmount <= 850000) {
    myTax = (100000 * 0.05) + (taxAmount - 450000) * 0.1;
  } else {

    myTax = (100000 * 0.05) + (400000 * 0.1) + (taxAmount - 850000) * 0.2;
  }

  return myTax;
};

console.log(taxCalculation(-49585));
