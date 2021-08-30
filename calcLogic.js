// Standard operation functions
function add(a, b) {
    return(Number(a) + Number(b));
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
    console.log(`Operating with: ${operator} using numbers ${num1} and ${num2}`);
    switch(operator){
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
        default:
            break;
    }
}

function screenWrite(symbol) { //Function that writes the number on the calc screen
    console.log(`Called write function with: ${symbol}`);
    if(calcScreen.value.includes(".") && symbol == "."){
        return
    }
    calcScreen.value += symbol;
}

function readScreen(button){ //function for reading the calculator screen when pressing operator
    if(!calcScreen.value) {
        console.log("tried to use operator without a number");
        return
    }
    if(!num1){
        oper = button;
        num1 = calcScreen.value;
        calcScreen.value = "";
        console.log(`Chose operator ${oper} with num1: ${num1}`);   
    }
    else {
        oper = button;
        num2 = calcScreen.value;
        num1 = operate(oper, num1, num2);
        calcScreen.value = num1;
        num2 = "";
    }
}
function equals(){
    if(!num1){
        return //no value for num1 given so we'll stop here
    }
    num2 = calcScreen.value;
    num1 = operate(oper, num1, num2);
    calcScreen.value = num1;
    num2 = "";
}

function screenClear(){ //clears the calculator screen, num1, num2, and the chosen operator
    console.log("called clear");
    num1 = "";
    num2 = "";
    oper = "";
    calcScreen.value = "";
}

//initialize the num1, num2, and operator needed
let num1 = "";
let num2 = "";
let oper = "";

//button clicklisteners
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
document.getElementById("btnDec").onclick = function(){screenWrite(".")};

document.getElementById("btnClr").onclick = function(){screenClear()};
document.getElementById("btnEqu").onclick = function(){equals()};

document.getElementById("btnAdd").onclick = function(){readScreen("+")};
document.getElementById("btnSub").onclick = function(){readScreen("-")};
document.getElementById("btnMult").onclick = function(){readScreen("*")};
document.getElementById("btnDiv").onclick = function(){readScreen("/")};

const calcScreen = document.getElementById("screen");

