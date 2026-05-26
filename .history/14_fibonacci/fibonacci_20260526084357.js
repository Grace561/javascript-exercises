const fibonacci = function(n) {
    n = Number(n);
     if (n <= 0) {
    return "OOPS";
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  let first = 1;
  let second = 1;

  for (let i = 2; i <= n; i++) {
    let next = first + second;

    first = second;
    second = next;
  }

  return second;
};



// Do not edit below this line
module.exports = fibonacci;
