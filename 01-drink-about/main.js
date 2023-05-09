function peopleWithAgeDrink(old) {
    if (old < 14) {
        return 'drink toddy';
    } else if (old < 18) {
        return 'drink coke';
    } else if (old < 21) {
        return 'drink beer';
    } else {
        return 'drink whisky'
    }
};

console.log(peopleWithAgeDrink(14));
console.log(peopleWithAgeDrink(15));
console.log(peopleWithAgeDrink(20));
console.log(peopleWithAgeDrink(25));