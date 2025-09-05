const sumAll = function(num1 ,num2) {
    if (num1 <= 0 || num2 <= 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) 
    return "Error: Both inputs must be positive integers.";
}
const min = Math.min(num1, num2);
const max = Math.max(num1, num2);

let sum =0;
for (let i = min; i <= max; i++){
    sum
}

// Do not edit below this line
module.exports = sumAll;
