function multiTable(number) {
    let result = '';
    for (let i = 1; i <= 10; i++) {
        result = result + `${i} * ${number} = ${i * number}\n`;
    }
    return result;

}

console.log(multiTable(5));



