const palindromes = function (string) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

  // Create a new reversed string for comparison
  const reversedString = cleanedString.split('').reverse().join('');
  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
