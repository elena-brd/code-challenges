const areaOrPerimeter = function (l, w) {
    let square;
    let rectangle;
    if (l === w) {
        square = l * w;
        return square;
    } else if (l !== w) {
        rectangle = 2 * (l + w)
        return rectangle;
    }
};

console.log(areaOrPerimeter(2, 2));
console.log(areaOrPerimeter(6, 10));