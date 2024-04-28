const fibonacci = function(n) {
    let processedNum = Number(n);

    if (processedNum < 0) {
        return "OOPS";
    }
    else if (processedNum === 0) {
        return 0;
    }
    else if (processedNum === 1) {
        return 1;
    }

    let a = 0;
    let b = 1;
    let fib = 0;

    for (let i = 0; i < processedNum - 1; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }

    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
