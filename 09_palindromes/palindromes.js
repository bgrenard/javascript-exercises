const palindromes = function (string) {

    string = string.toLowerCase();

    let noPunct = "";

    for (let i = 0; i < string.length; i++) {
        //We need to remove spaces and punctuation from the string before checking for palindrome.
        if (string.charAt(i) !== ' ' &&
            string.charAt(i) !== '.' &&
            string.charAt(i) !== '!' &&
            string.charAt(i) !== '?' &&
            string.charAt(i) !== ','
        ) {
            noPunct += string.charAt(i);
            }
    }

    const firstHalf = noPunct.substring(0, Math.floor(noPunct.length/2));
    let secondHalf = "";

    if (noPunct.length % 2 === 0) {
        secondHalf = noPunct.substring(Math.floor(noPunct.length/2));
    }
    else {
        secondHalf = noPunct.substring(Math.floor(noPunct.length/2) + 1);
    }

    const secondHalfReversed = secondHalf.split("").reduce((total, current) => current + total, "");

    return firstHalf === secondHalfReversed;
};

// Do not edit below this line
module.exports = palindromes;
