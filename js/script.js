//Włączenie tooltipów
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

// Włączenie popoverów
$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
});


//Animacja po kliknięciu na Denver
function testAnim(x) {
    $('#denvy').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
    });
};

$(document).ready(function(){
    $('#denvy').click(function(e){
      e.preventDefault();
      testAnim("pulse");
    });
});

//Zmiana dynamiki tła
$("#bodybgbtn").click(function() {
    var bg = document.querySelector("body");
    if(bg.classList == "dynamicbg") {
        $("body").removeClass("dynamicbg").addClass("staticbg");
        $("#bodybgbtn").removeClass("btn-outline-primary").addClass("btn-primary");
    }
    else {
        $("body").removeClass("staticbg").addClass("dynamicbg");
        $("#bodybgbtn").removeClass("btn-primary").addClass("btn-outline-primary");
    }
});

//Zmiana widoku po kliknięciu w przyciski menu
$(document).ready(function(){
    $("#queryContainerID").hide();
    $("#queryContainerID").append("<div class='queryBox queryBoxAccept animated fadeInRight'>Hello Commander! Let's do something! Double click the buttons below for some action.</div>");
    $(".denverask").click(function(){
        testAnim("bounce");
        $("#queryContainerID").fadeIn();
        $("#denver-container").removeClass("denver").addClass("denver-change");
        $("#menu-container").removeClass("menu").addClass("menu-change");
    });
});