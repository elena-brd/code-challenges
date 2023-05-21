function count(string) {
    let str = {};
    for (let s of string) {
        if (!str[s]) {
            str[s] = 1;
        } else {
            str[s] = str[s] + 1;
        }
    }
    return str;
}

console.log(count('aba'));

