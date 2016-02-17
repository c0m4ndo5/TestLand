//Define which item is currently in focus on the menu
var focusItem = 0;

$(document).ready(function () {
    setFocus(focusItem);
    $(".navbarright").on("click", function () {
        focusItem = Math.min(focusItem + 1, navitems.length - 1);
        setFocus(focusItem, "right");
    });
    $(".navbarleft").on("click", function () {
        focusItem = Math.max(focusItem - 1, 0);
        setFocus(focusItem, "left");
    });
});

function setFocus(item, direction){
    if (typeof (direction) === undefined) direction = "left";
    $(".contentarea").animate({
        opacity: "0",
        left:direction == "right" ? "-20%" : "120%"
    }, 400, function () {
        $(".contentarea").css('left', direction == "right" ? "120%" : "-20%");
        $(".contentarea").animate({
            opacity: "1",
            left: "10%"
        }, 400);
        navitems.forEach(function (entry) {
            $("#" + entry).css('display', 'none');
        });
        $("#" + navitems[item]).css('display', 'block');
    });
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
    if (item - 2 >= 0) {
        $("#item" + (item - 2)).animate({
            top: "75%",
            left: "15%",
            opacity: "0",
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
    if ($("#item" + (item + 2)).length > 0) {
        $("#item" + (item + 2)).animate({
            top: "75%",
            left: "75%",
            opacity: "0",
            zoom: "1"
        }, 800);
    }
}