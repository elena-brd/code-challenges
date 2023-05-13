function twiceAsOld(dadYearsOld, sonYearsOld) {
    const total = (sonYearsOld * 2) - dadYearsOld;
    if (total < 0) {
        return -total;
    }
    return total;
}

console.log(twiceAsOld(55, 30)); // 5
console.log(twiceAsOld(22, 1)); // 20