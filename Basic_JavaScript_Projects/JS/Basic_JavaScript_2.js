

function newFunction () { //Defining a function and naming it
    var str2 = "This text is blue!"; //Defining a variable and giving it a string value
    var result2 = str2.fontcolor("blue"); //Using the font color method on str variable
    document.getElementById("Blue_Text").innerHTML  = result2; //Putting the value of result into HTML ele. with "Blue_Text" id
}

function myFunction () {
    var sentence1 = "This is becoming more clear" + " ";
    sentence1 += "as I study more!";
    document.getElementById("Sample").innerHTML = sentence1;
}