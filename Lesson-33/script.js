// arrow functions

// regular function
const calcArea = function(radius){
    let area = 3.14 * radius ** 2;
    console.log(area);
}
calcArea(6); // 113.04

// arrow function
const calcArea1 = (radius1) => {
    return 3.14 * radius1 ** 2
};
// const calArea1 = radius => 3.14 * radius1 **2 ; // valid
const area = calcArea1(6);
console.log(area); // 113.04


// regular function 
const greet = function(){
    return "Hello, World";
}
const greetReturns = greet();
console.log(greetReturns); // Hello, World

// arrow function
const newGreet = () => "Hello, World";
const newGreetReturns = newGreet();
console.log(newGreetReturns); // Hello, World


// regular function
const bill = function(products, tax){
    let total = 0;
    for(let i=0; i<products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}
const billReturns = bill([20, 13, 45], 56);
console.log(billReturns); // 4446

// arrow function
const newBill = (newProducts, newTax) => {
    let newTotal = 0;
    for(let i=0; i<newProducts.length; i++){
        newTotal += newProducts[i] + newProducts[i] * newTax;
    }
    return newTotal;
}
const newBillReturns = newBill([20, 13, 45], 56);
console.log(newBillReturns); // 4446