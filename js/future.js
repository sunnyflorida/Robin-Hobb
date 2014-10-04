window.onload = init;

function init() {
	var pred = document.getElementById("button");
	pred.onclick = FuturePrediction;
}

function FuturePrediction() {
var words1 = ["Today", "Tomorrow", "In a few days"];
var words2 = ["your best friend", "you", "your friend", "you"];
var words3 = ["will be revorded", "will be OK", "will get a prize", "will achieve everything", "will be happy", "will meet a good person", "will find a treasure"];
var words4 = "prediction precision";
var words5 = Math.floor(Math.random()*100);
var words6 = "%";

var rand1 = Math.floor(Math.random()*words1.length);
var rand2 = Math.floor(Math.random()*words2.length);
var rand3 = Math.floor(Math.random()*words3.length);

var future = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
var phraseElement = document.getElementById("prediction");
phraseElement.innerHTML = future;

var accuracy = words4 + " " + words5 + " " + words6;
var accuracyElement = document.getElementById("accuracy");
accuracyElement.innerHTML = accuracy;
}


