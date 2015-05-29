$(document).ready(start);

function start(e) {

    var $inputBox = $("#inputBox");
    var $todoButton = $("button");
    
    var $savedStuff = $('#savedStuff');
    var $list = $('#list');
    var list = [];


    $savedStuff.on('submit', addStuff);

    function addStuff(e) {
        e.preventDefault();

        list.push($inputBox.val());
        $inputBox.val(" ");

        var listHtml = render(list); 
        $list.html(listHtml); 
    }

    $('#list').on('click', 'li', check);

    function check() {
        $(this).toggleClass('strikethrough');
    }

    function render(todoList) {
        return '<ul><li>'+todoList.join('</li><li>')+'</li></ul>';
    }
}
