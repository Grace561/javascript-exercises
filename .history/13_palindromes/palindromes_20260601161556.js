const palindromes = function (string) {
    const cleaned = string
    .toLowerCase()
    .replace(abcdefghijklmnopqrstuvwxyz0123456789);


    const reversed = cleaned
    .split("")
    .reverse()
    .join("");

    return cleaned

};

// Do not edit below this line
module.exports = palindromes;
