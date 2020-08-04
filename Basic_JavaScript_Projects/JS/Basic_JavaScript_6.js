function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " " + "to ride.";

}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trailhawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " " + "manufactured in " + Erik.Vehicle_Year;
}

function Dog(Breed, Age, Color) {
    this.Dog_Breed = Breed;
    this.Dog_Age = Age;
    this.Dog_Color = Color;
}
var Zoe = new Dog("Corgi", 2, "Fawn and White");
var Lauren = new Dog("Poodle", 4, "Gray");
var Sam = new Dog("Labrador", 9, "Black");
function dogFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "Zoe owns a  " + Zoe.Dog_Breed + " " + "that is " + Zoe.Dog_Age + " " + "years old " + Zoe.Dog_Color + " " + "in color.";
}

function counting_Function() {
    document.getElementById("Nested_Function").innerHTML = Counting();
    function Counting() {
        var Starting_point = 1;
        function Plus_two() {Starting_point += 2;}
        Plus_two();
        return Starting_point;
        
    }
}
