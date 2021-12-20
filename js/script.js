$(function() {
    $("footer").draggable({ 
        revert: true
    });
})

$(function() {
    $("header").draggable({ 
        revert: true
    });
})

$('.btn-primary').draggable({cancel:false});
$(function() {
    $(".btn-primary").draggable({ 
        revert: true
    });
})

$(function() {
    $("#draggablephoto").draggable({ 
        revert: true
    });
})

$(function() {
    $("#app").draggable({ 
        revert: true
    });
})

$(function() {
    $(".contact").draggable({ 
        revert: true
    });
})

$(function() {
    $(".skills").draggable({ 
        revert: true
    });
})

$(function() {
    $(".bigartheader").draggable({ 
        revert: true
    });
})

$(function() {
    $(".description").draggable({ 
        revert: true
    });
})

$(function() {
    $(".content").draggable({ 
        revert: true
    });
})

$(function() {
    $(".sect_bottom").draggable({ 
        revert: true
    });
})

$(function() {
    $(".progressbar").draggable({ 
        revert: true
    });
})

$(function() {
    $("p").draggable({ 
        revert: true
    });
})

$(function() {
    $("h1").draggable({ 
        revert: true
    });
})

$(function() {
    $(".skills h2").draggable({ 
        revert: true
    });
})

$(function() {
    $(".contact h2").draggable({ 
        revert: true
    });
})

$(function() {
    $(".audio").draggable({ 
        revert: true
    });
})

function newGradient() {
    var randomColor1 = "#" + Math.floor(Math.random()*16777215).toString(16),
        randomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16);
        randomColor3 = "#" + Math.floor(Math.random()*16777215).toString(16);
    return 'radial-gradient(at top left, '+randomColor1+', '+randomColor2+', '+randomColor3+')'
}     

$(".sect_bottom").on("click", function() {
  $(this).css("background", newGradient);
})

$(".content").on("click", function() {
  $(this).css("background", newGradient);
})

$(".description").on("click", function() {
  $(this).css("background", newGradient);
})

var audio = new Audio("../assets/sounds/1.mp3");

$(".btn-primary").on("click", function() {
  audio.play();
})
 