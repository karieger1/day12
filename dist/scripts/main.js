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

function render(todoList) {
		return '<ul><li class = "todo">'+todoList.join('</li><li>')+'</li></ul>';
	}

function strikethrough(event) {
	var target= $(event.target);
	if (target.is("li")) {
		target.style.css('text-decoration', 'underline');
}


// function strikethrough(e) {
// 		var i = e.target;
// 		// through(i);
// 		(e.target).style.textDecoration = "line-through";
// 	}


//my attempt at "hard mode"
 // Listen for changes in the text field
 document.addEventListener("change", function() {
    sessionStorage.setItem("savedStuff", savedStuff.value);
});
