

document.write(typeof "Tester");


function four_Function(){
document.getElementById("9").innerHTML = typeof 9;
}

function five_Function(){
document.getElementById("Infinity").innerHTML = 2E310;
}

function six_Function(){
document.getElementById("-Infinity").innerHTML = -3E310;
}

function one_Function(){
    document.getElementById("Boolean True").innerHTML = 12 > 6;
}

function two_Function(){
    document.getElementById("Boolean False").innerHTML = 12 < 6;
}

console.log(5 + 5);


console.log("15" + 5);


function seven_Function() {
    document.getElementById("True").innerHTML = 10 == 10;
}

function eight_Function() {
    document.getElementById("False").innerHTML = 3 == 11;
}

function nine_Function() {
    var a = 20;
    var b = 20;
    document.getElementById("Triple Equal Signs").innerHTML = a === b;
}

function ten_Function() {
    var c = 7;
    var d = 10;
    document.getElementById("AND").innerHTML =  c < 10 && d > 5;
}

function eleven_Function() {
    var x = 10;
    var y = 4;
    document.getElementById("OR Operator").innerHTML = (x === 2 || y === 3);
}

function not_Function() {
    document.getElementById("NOT").innerHTML = !(30 > 15);
}



