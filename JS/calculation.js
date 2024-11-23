alert('Please input the two numbers');
var number1 = Number(prompt("Please input the first number"))
var number2 = Number(prompt("Please input the second number"))
var number3 = number1 * number2;
var number4 = number1 / number2;

document.getElementById("number1").innerText = "First number = " + number1;
document.getElementById("number2").innerText = "Second number = " + number2;
document.getElementById("number3").innerText = "Multiplication: " + number1 + " * " + number2 + " = " + number3;
document.getElementById("number4").innerText = "Division: " + number1 + " / " + number2 + " = " + number4;
