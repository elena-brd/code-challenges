function repeatStr(n, s) {
    if (n > 0) {
        return s.repeat(n)
    }
    return '';
}


console.log(repeatStr(2, 'hi'));