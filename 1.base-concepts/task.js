"use strict"

function solveEquation(a, b, c) {
  let arr = [];

	let discriminant = b ** 2 - 4 * a * c;
	
	if (discriminant > 0) {
		arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
		arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
	} else if (discriminant === 0) {
		arr.push(-b / (2 * a));
	}

	return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	let credit = amount - contribution;
	let bid = (percent * 0.01) / 12;
	let payment = credit * (bid + (bid / (((1 + bid) ** countMonths) - 1)));
	let sum = payment * countMonths;

	return +sum.toFixed(2);
}