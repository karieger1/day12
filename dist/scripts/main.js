$(document).on("ready", start);

	var $inputBox = $("#inputBox");
	var $button = $("#button"); 
	var $savedStuff = $("#savedStuff");	
	var $list = $("#list");
    var $list = [];

	$button.addEventListener ("click", function() {
		console.log(inputBox.value);
	});

	$savedStuff.on("submit", addStuff);


		function addStuff(e) {

			e.preventDefault();
			if(event.keyCode === 13) { 
			savedStuff.innerHTML += "<div>" + inputBox.value + "</div>";
			inputBox.value("");
			}

			listStuff = render(list);
			$list.html(listStuff);
		}	
			
	    $list.on("click", "li", strike);

	    function strike() {
	        $(this).toggleClass("strikethrough");
	    }

		function render(todoList) {
		return '<ul><li class = "todo">'+todoList.join('</li><li>')+'</li></ul>';
	}
}



//my attempt at "hard mode"
 // Listen for changes in the text field
 document.addEventListener("change", function() {
    sessionStorage.setItem("savedStuff", savedStuff.value);
});
