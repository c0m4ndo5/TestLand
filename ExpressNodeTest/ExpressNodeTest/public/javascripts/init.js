//Define which item is currently in focus on the menu
var focusItem = 0;

$(document).ready(function () {
    setFocus(focusItem);
    $(".menuitem").on("click", function () {
        setFocus(1);
    });
});

function setFocus(item){
    $("#item" + item).animate({
        top: "45%",
        left: "42%",
        opacity: "0.9",
        zoom: "2"
    }, 800);
    if (item - 1 >= 0) {
        $("#item" + (item - 1)).animate({
            top: "75%",
            left: "15%",
            opacity: "0.5",
            zoom: "1"
        }, 800);
    }
    if ($("#item" + (item + 1)).length > 0) {
        $("#item" + (item + 1)).animate({
            top: "75%",
            left: "75%",
            opacity: "0.5",
            zoom: "1"
        }, 800);
    }
}