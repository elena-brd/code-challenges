function fakeBin(x) {
    let str = '';
    for (i = 0; i < x.length; i++) {
        if (x[i] < 5) {
            str += 0
        } else {
            str += 1;
        }
    }
    return str;
}

console.log(fakeBin('45385593107843568'));

