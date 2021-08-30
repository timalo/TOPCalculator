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

function screenWrite(symbol) { //Function that writes the number or operator on the calc screen
    console.log(`Called write function with: ${symbol}`);
}

function readScreen(){ //function for reading the calculator screen and splitting the contents into num1, num2 and operator

}

//button functionality
document.getElementById("btn0").onclick = function(){screenWrite("0")};
document.getElementById("btn1").onclick = function(){screenWrite("1")};
document.getElementById("btn2").onclick = function(){screenWrite("2")};
document.getElementById("btn3").onclick = function(){screenWrite("3")};
document.getElementById("btn4").onclick = function(){screenWrite("4")};
document.getElementById("btn5").onclick = function(){screenWrite("5")};
document.getElementById("btn6").onclick = function(){screenWrite("6")};
document.getElementById("btn7").onclick = function(){screenWrite("7")};
document.getElementById("btn8").onclick = function(){screenWrite("8")};
document.getElementById("btn9").onclick = function(){screenWrite("9")};
document.getElementById("btnAdd").onclick = function(){screenWrite("+")};
document.getElementById("btnSub").onclick = function(){screenWrite("-")};
document.getElementById("btnMult").onclick = function(){screenWrite("*")};
document.getElementById("btnDiv").onclick = function(){screenWrite("/")};

document.getElementById("btnClr").onClick = function(){screenClear()};
document.getElementById("btnEqu").onClick = function(){readScreen()};