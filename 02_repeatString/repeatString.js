const repeatString = function(str, num) {
    let initialString = str;

    if (num > 0) {
        for (let i = 0; i < num - 1; i++) {
            str += initialString;
        }
    }
    else if (num == 0) {
        return "";
    }
    else {
        return "ERROR"
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
