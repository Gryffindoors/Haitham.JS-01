var number1 = Number(prompt('Please enter the number to verify'))
if ((number1>0) && ((number1%3==0) || (number1%7==0))){
    document.getElementById('resultVerify').innerText = "Number is divisible by either 3 or 7 ;)"
    if ((number1%3==0) && (number1%7!=0)){
        document.getElementById('resultVerify').innerText = "Number is divisible by 3 only"
    }
    if((number1%3!=0) && (number1%7==0)){
        document.getElementById('resultVerify').innerText = "Number is divisible by 7 only"
    }
    if((number1%3==0) && (number1%7==0)){
        document.getElementById('resultVerify').innerText = "Number is divisible by both 3 and 7"
    }
}
else{
    document.getElementById('resultVerify').innerText = "Number is divisible by neither 3 or 7"
   
}