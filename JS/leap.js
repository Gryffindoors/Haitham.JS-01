var year1 = Number(prompt("Please enter the year"))
var year2 = year1 % 4
if (year2==0) {
    document.getElementById('year1').innerText = "Year: " + year1;
    document.getElementById('year2').innerText = "Result: Leap year";
}
else {
    document.getElementById('year1').innerText = "Year: " + year1;
    document.getElementById('year2').innerText = "Result: Regular year";
}