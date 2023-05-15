function bmi(weight, height) {
    let total = weight / (height * height)

    if (total <= 18.5) {
        return 'Underweight';
    } else if (total <= 25.0) {
        return 'Normal';
    } else if (total <= 30.0) {
        return 'Overweight';
    } else if (total > 30) {
        return 'Obese';
    }


}
console.log(bmi(80, 1.80));
