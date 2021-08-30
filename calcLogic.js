// Standard operation functions
function add(a, b) {
    return(a + b);
}
function subtract(a, b) {
    return (a - b);
}
function multiply(a, b) {
    return (a * b);
}
function divide(a, b) {
    return (a / b);
}
//----------------------------

function operate(operator, num1, num2) {
    switch(operator){
        case add:
            add(num1, num2);
            break;
        case subtract:
            subtract(num1, num2);
            break;
        case multiply:
            multiply(num1, num2);
            break;
        case divide:
            divide(num1, num2);
            break;
        default:
            break;
    }
}