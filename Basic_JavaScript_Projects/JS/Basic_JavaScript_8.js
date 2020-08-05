function make_Sentences() {
    var piece_1 = "It's a big house," + " ";
    var piece_2 = "it's weird I only ever see the two of you," + " ";
    var piece_3 = "almost like the studio" + " ";
    var piece_4 = "couldn't afford another X-Man.";
    var whole_sentence = piece_1.concat(piece_2,piece_3,piece_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}





function sliceMethod() {
    var sentence = "I am older and I have more insurance.";
    var section = sentence.slice(5,10);
    document.getElementById("Slice_Method").innerHTML = section;
}

function string_Method() {
    var Z = 225;
    document.getElementById("To_String").innerHTML = Z.toString();
}

function precision_Method() {
    var Y = 11848.3457761239075;
    document.getElementById("To_Precision").innerHTML = Y.toPrecision(8)
}