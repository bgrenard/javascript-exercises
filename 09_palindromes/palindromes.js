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

    const reversed = noPunct.split("").reduce((total, current) => current + total, "");

    return noPunct === reversed;
};

// Do not edit below this line
module.exports = palindromes;
