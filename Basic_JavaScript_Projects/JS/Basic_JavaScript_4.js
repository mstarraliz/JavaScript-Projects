

function new_Dictionary() {
    var Car = {
        Make: "Tesla",
        Model: "Y",
        Color: "Black",
        Year:2020,
        Motor: "AWD"
    };
    delete Car.Make;
    document.getElementById("Dictionary").innerHTML = Car.Make;
}