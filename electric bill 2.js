let electricBill = (units) => {
  let iniUnit = 0;
  let iniBill = 0;
  let TotalBill = 0;
  let lessBillCount = 0;
  let overBillCount1 = 0;
  let overBillCount2 = 0;
  let overBillCount3 = 0;
  let range1 = 0;
  let range2 = 0;
  let range3 = 0;
  let ExtraAmount = 0;
  let DiscountAmount = 0;
  let lessResult=[];

  for (let i = 0; i < units.length; i++) {
    if (units[i] <= 0) {
      iniBill = 0;
    } else if (units[i] > 0 && units[i] <= 100) {
      iniBill = units[i] * 10;
    } else if (units[i] > 100 && units[i] <= 300) {
      iniUnit = units[i] - 100;
      iniBill = 100 * 10 + iniUnit * 12;
    } else if (units[i] > 300 && units[i] <= 500) {
      iniUnit = units[i] - 300;
      iniBill = 100 * 10 + 200 * 12 + iniUnit * 15;
    } else if (units[i] > 500 && units[i] <= 700) {
      iniUnit = units[i] - 500;
      iniBill = 100 * 10 + 200 * 12 + 200 * 15 + iniUnit * 20;
    } else {
      iniUnit = units[i] - 700;
      iniBill = 100 * 10 + 200 * 12 + 200 * 15 + 200 * 20 + iniUnit * 25;
    }
    if (iniBill > 0 && iniBill < 4000) {
      iniBill = iniBill;
      lessBillCount++;
      lessResult.push(iniBill);
    } else if (iniBill >= 4000 && iniBill < 8000) {
      iniBill = iniBill + 200;
      overBillCount1++;
      range1 = overBillCount1 * 200;
    } else if (iniBill >= 8000 && iniBill < 20000) {
      iniBill = iniBill + 500;
      overBillCount2++;
      range2 = overBillCount2 * 500;
    } else if (iniBill >= 20000) {
      iniBill = iniBill + 5000;
      overBillCount3++;
      range3 = overBillCount3 * 5000;
    }

    TotalBill = iniBill + TotalBill;
    ExtraAmount = range1 + range2 + range3;
    DiscountAmount = ExtraAmount / lessBillCount;
  }
  return {
    "Bill is": TotalBill,
    "Over bill users compensation": ExtraAmount,
    "Discount rate": DiscountAmount,
    "Individual User bill of less use": lessResult,

  };
};
console.log(electricBill([50, 100, 300, 500, 700, 1000]));
