var number1 = Number(prompt('Please input the first number'))
var number2 = Number(prompt('Please input the second number'))

if ((number1==50) || (number2==50) || (number1 + number2 ==50)){
    document.getElementById('resultVerify').innerText = "True"
}
else{
    document.getElementById('resultVerify').innerText = "False"
}