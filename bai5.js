
function fibonacci(n) {
    let a = 0; b = 1; sum;
    while (n >= 0) {
        sum = a + b;
        a = b;
        b = sum;
    }
    console.log(b);
}
// em bí :)))