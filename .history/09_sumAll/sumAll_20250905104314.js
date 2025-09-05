const sumAll = function(min , max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) 
    return "Error: Both inputs must be positive integers.";
}
const min = Math.min
const max = Math.max(num1, num2);

let sum =0;
for (let i = min; i <= max; i++){
    sum += i;
}
return sum;
// Do not edit below this line
module.exports = sumAll;
