window.alert("Hello, World!");


var Fam = "The Smiths", mom = "Sara", dad = "John", daughter = "Angel"; //assigning variables
var Fam2 = "The Jones\'";
var Fam = Fam.fontcolor("blue"); //this makes text blue
document.write(Fam + " " + "and the" + " " + Fam2); //this diplays the two variables concatenated



function My_First_Function () { //Defining a function and naming it
    var str = "This text is green!"; //Defining a variable and giving it a string value
    var result = str.fontcolor("green"); //Using the font color method on str variable
    document.getElementById("Green_Text").innerHTML  = result; //Putting the value of result into HTML ele. with "Green_Text" id
}

