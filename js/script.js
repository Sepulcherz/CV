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

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
  
typewriter.typeString('Oh!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Bonjour.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Hi.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Ni Hao.')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(4000)
    .typeString('Je m\'appelle <strong>Matthias DEVAUX.</strong>')
    .pauseFor(2000)
    .deleteChars(7)
    .typeString('et je vous souhaite la bienvenue sur mon C.V "intéractif" ')
    .pauseFor(2500)
    .typeString('J\'espère que vous le trouverez aussi amusant que moi. ')
    .pauseFor(2500)
    .typeString('Bonne visite!')
    .pauseFor(3000)
    .start();

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
 