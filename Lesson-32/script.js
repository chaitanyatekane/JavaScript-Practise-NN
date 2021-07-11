// functions with return values

const calcArea = function(radius){
    let area = 3.14 * radius ** 2;
    console.log(area);
}
calcArea(6); // 113.04

// console.log(area); // ReferenceError :- area is not defined

const newCalcArea = function(newRadius){
    let newArea = 3.14 * newRadius ** 2;
    return newArea;
}
const calculatedArea = newCalcArea(6);
console.log(calculatedArea); // 113.04


const newArea = function(nRadius){
    return 3.14 * nRadius ** 2;
}
const calArea = newArea(6);
console.log(calArea); // 113.04