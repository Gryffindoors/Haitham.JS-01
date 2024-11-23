alert ("Please enter the traingle's border lengths");
var jsWritten1 = Number(prompt('Enter the first border length'));
var jsWritten2 = Number(prompt('Enter the second border length'));
var jsWritten3 = Number(prompt('Enter the third border length'));

if ((jsWritten1 + jsWritten2 > jsWritten3) && (jsWritten1 + jsWritten3 > jsWritten2) && (jsWritten2 + jsWritten3 > jsWritten1)) {
    document.getElementById('jsWritten1').innerText = "First Border = " + jsWritten1;
    document.getElementById('jsWritten2').innerText = "Second Border = " + jsWritten2;
    var s = (jsWritten1 + jsWritten2 + jsWritten3) / 2;
    var jsWritten4 = Math.sqrt(s * (s - jsWritten1) * (s - jsWritten2) * (s - jsWritten3)); 
    document.getElementById('jsWritten3').innerText = "Third Border = " + jsWritten3;
    document.getElementById('jsWritten4').innerText = "Triangle's Area is = " + jsWritten4;
}
else {
    document.getElementById('jsWritten4').innerText = "Illogical triangle ";
}
