const reverseString = function(inputString) {
    let inputReversed = "";

    for (let i = inputString.length - 1; i >= 0; i--) {
        inputReversed += inputString[i];
    }

    return inputReversed
};

// Do not edit below this line
module.exports = reverseString;
