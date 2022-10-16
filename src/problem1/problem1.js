var sum_to_n_a = function(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
};

var sum_to_n_b = function(n) {
    if (n === 1) {
        return n;
    }

    return n + sum_to_n_b(n-1);
};

var sum_to_n_c = function(n) {
    let sum = 0;
    if (n % 2 != 0) {
        sum = n;
        n -= 1;
    }

    return sum + ((n + 1) * (n/2));
};

console.log("Method A: " + sum_to_n_a(12));
console.log("Method B: " + sum_to_n_b(12));
console.log("Method C: " + sum_to_n_c(12));
