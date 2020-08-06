function count_to_ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_ten").innerHTML = Digit;
}

var Flowers = ["Roses", "Lilies", "Daisies", "Violets", "Orchids", "Plumeria", "Hibiscus"];
var Content = "";
var X;
function for_Loop() {
    for (X = 0; X < Flowers.length; X++){
        Content += Flowers[X] + "<br>";
    }
    document.getElementById("List_of_Flowers").innerHTML = Content;
}

function dog_picture() {
    var dog_pics = [];
    dog_pics[0] = "snoring";
    dog_pics[1] = "begging";
    dog_pics[2] = "borking";
    dog_pics[3] = "chasing";
    document.getElementById("Dog").innerHTML = "In this picture, the dog is " + dog_pics[2] + ".";

}

function constant_function() {
    const Coffee_Maker = {type:"espresso machine", brand:"Breville", color:"silver"};
    Coffee_Maker.color = "black";
    Coffee_Maker.price = "$1350";
    document.getElementById("Constant").innerHTML = "The cost of the " + Coffee_Maker.type + " was " + Coffee_Maker.price;
}

let phone = {
    make: "iPhone ",
    model: "eleven ",
    year: "2021 ",
    color: "gold",
    description : function() {
        return "The phone is a " + this.year + this.color + this.make + this.model; 
    }
};
document.getElementById("Phone_Object").innerHTML = phone.description();