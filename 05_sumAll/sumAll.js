const sumAll = function(a, b) {
    if (a < 0 || b < 0) {
        return "ERROR"
    }
    else if (!(typeof a === 'number' && typeof b === 'number')) {
        return "ERROR"
    }

    else {
        let first = Math.min(a, b);
        let last = Math.max(a,b)
        return 0.5*(last - first + 1)*(last + first);
    }
};

// Do not edit below this line
module.exports = sumAll;
