
function add(a, b) {
    return a + b;
}
function divide(a, b) {
    return a / b;
}
function multiplay(a, b) {
    return a * b;
}
function substraction(a, b) {
    return a - b;
}

function calculate(x, y, operation) {
    return operation(x, y);
}
console.log(calculate(2, 2, add));
console.log(calculate(2, 2, divide));
console.log(calculate(2, 8, multiplay));
console.log(calculate(2, 2, substraction));

