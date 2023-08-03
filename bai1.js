let n = 13;
function kiemtra(n) {
    var tex = true;

    if (n < 2) {
        tex = false;
    } else {
        for (var i = 2; i < n - 1; i++) {
            if (n % i == 0) {
                tex = false;
                break;
            }
        }
    }
    if (tex == true) {
        document.write(n + "Là số nguyên tố <br>");
    } else {
        document.write(n + "Không phải số nguyên tố <br>");
    }
}
function kt() {
    a = 1;
    for (var a = 1; a < n; a++) {
        if (kiemtra(a)) {
            document.write(a);
        }
    }
    a++;
}
