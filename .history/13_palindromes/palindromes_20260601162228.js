const palindromes = function () {
    const cleaned = string
    .toLowerCase()
    .replace(abcdefghijklmnopqrstuvwxyz0123456789);


    const reversed = cleaned
    .split("")
    .reverse()
    .join("");

    return cleaned === reversed;

};

// Do not edit below this line
module.exports = palindromes;
