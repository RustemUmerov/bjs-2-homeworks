"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let disc = b*b - 4*a*c;
  if (disc < 0){
    return [];
    }
  else if (disc === 0) {
    return [-b / (2*a)];
  } else {
  let sqrtDisc = Math.sqrt(disc);
    return [(-b + sqrtDisc) / (2*a),(-b - sqrtDisc) / (2*a)];
  }     
}
//let res = solveEquation (5, 3, 7);
//console.log(res);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }
  let monthlyPercent = percent / 100 / 12;
  let creditBody = amount - contribution;
  let monthlyPayment = creditBody * (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));
  let totalAmount = monthlyPayment * countMonths;
  return +totalAmount.toFixed(2);
}
//let res = calculateTotalMortgage(10, 20000, 20000, 24);
//console.log(res);