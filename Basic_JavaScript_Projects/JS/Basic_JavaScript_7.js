

var Y = 15;
function globalFunction() {
    document.getElementById("Global_Function").innerHTML = (30 + Y);
}
globalFunction();

function localFunction() {
var Z = 20;
document.getElementById("Local_Function").innerHTML = (20 + Z);
}
localFunction();



function Add_Numbers_1() {
    var X = 10;
    console.log(15 + X);
    }
function Add_Numbers_2() {
    console.log(X + 100);
}
Add_Numbers_1();
Add_Numbers_2();

function seniorAge_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 55){
         Discount = "You get the discount!";
    }
    else {
        Discount = "You do not get the discount!";
    }
    document.getElementById("Old_enough_for_the_discount?").innerHTML = Discount;
}

function Time_function() {
    var time = new Date().getHours();
    var respond;
    if (time < 12 == time > 0) {
        respond = "Good Morning!";
    }
    else if (time > 12 == time < 18) {
        respond = "Good afternoon!";
    }
    else {
        respond = "Good evening!";
    }
    document.getElementById("The_Time").innerHTML = respond;
}





