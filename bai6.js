
// function gt(n) {
//     if (n === 0) {
//         return 1;
//     }

//     return n * gt(n - 1);
// }
// console.log(gt(5));

function gt(n) {
    x = 1;
    for (i = n; i >= 2; i--) {
        x *= i
    }
    return x;
}
console.log(gt(5));
