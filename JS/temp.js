var temp1 = Number(prompt('Enter the Celsius Temp or leave blank'));
var temp2 = Number(prompt('Enter the Fahrenheit Temp or leave blank'));

if (temp2==0) {
    var temp3 = ((temp1/5)*9)+32;
    document.getElementById('temp3').innerText = temp1 + " \u00B0C is " + temp3 + " \u00B0F" ;
}
else {
    var temp3 = ((temp2-32)/9)*5;
    document.getElementById('temp3').innerText = temp1 + " \u00B0F is " + temp3 + " \u00B0C" ;
}

