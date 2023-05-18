function grow(x) {
    let arr = 1;
    for (let i = 0; i < x.length; i++) {
        arr *= x[i];
    }
    return arr;
}

console.log(grow([1, 2, 3]));
console.log(grow([4, 1, 1, 1, 4]));