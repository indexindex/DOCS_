// jQuery was designed in 2006 to make DOM manipulation easier (it's JS library)

// simple example of jQuery

// click on a paragraph for it to hide away
$(document).ready(function() {
    $("p").click(function() {
        $(this).hide();
    });
});

// before, we had to do something like this...
p.addEventListener("click", function() {

});