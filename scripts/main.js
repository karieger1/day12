$(document).on("ready", start);

var inputBox = $("inputBox");
var button = $("button"); 
	button.addEventListener ("click", function() {
		console.log(inputBox.value);
});

var myArray = []; //create empty array
	button.addEventListener ("click", function() { //listen for button click, when clicked run function
		myArray.push(inputBox.value); // push the value in the inputBox into the array
		console.log(myArray); //log array values
});


var inputBox = $("inputBox");
var todoList = $("savedStuff");

input.addEventListener("keyup", appendMessage);

function appendMessage() {
	if(event.keyCode === 13) { //can't figure out how to make this happen on button click, too
		
	savedStuff.innerHTML += "<div>" + input.value + "</div>";
	input.value = "";
	}
};

var newStuff = [];
var messageBox  = document.getElementById("savedStuff");

function render() {
	newStuffInput.value = ""; //get value of input
  	messageBox.innerHTML = ""; //clear input box
  	savedStuff.join([" ,"]) //not working?
  	//not sure i understood the directions of step 5 very well
}

//my attempt at "hard mode"
 // Listen for changes in the text field
 document.addEventListener("change", function() {
    sessionStorage.setItem("savedStuff", savedStuff.value);
});
