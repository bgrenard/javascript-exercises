const removeFromArray = function(inputArray, ...elementsToRemove) {
    let newArray = [];
    
    for (const x of inputArray) {
        if (!elementsToRemove.includes(x)) {
            newArray.push(x);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
