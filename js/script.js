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
      var anim = "pulse";
      testAnim(anim);
    });
});

//Zmiana dynamiki tła
$("#bodybgbtn").click(function() {
    var bg = document.querySelector("#bodybg");
    if(bg.classList == "dynamicbg") {
        $("#bodybg").removeClass("dynamicbg").addClass("staticbg");
        $("#bodybgbtn").removeClass("btn-outline-primary").addClass("btn-primary");
    }
    else {
        $("#bodybg").removeClass("staticbg").addClass("dynamicbg");
        $("#bodybgbtn").removeClass("btn-primary").addClass("btn-outline-primary");
    }
});

//Zmiana widoku po kliknięciu w przyciski menu
$(document).ready(function(){
    $("#queryContainerID").hide();
    $("#queryContainerID").append("<div class='queryBox queryBoxAccept animated fadeInRight'>Hello Commander ⭐! Let's do something! Double click the buttons below for some action.</div>");
    var anim = "pulse";
    testAnim(anim);
    $(".denverask").click(function(){
        $("#queryContainerID").fadeIn();
        $("#denver-container").removeClass("denver").addClass("denver-change");
        $("#menu-container").removeClass("menu").addClass("menu-change");
    });
});

//Test przycisku Talk with me!
$(document).ready(function(){
    $("#talkwithme").dblclick(function(){

        //Tablica z kwestiami Denver
        var text = [];
            text[0] = "Hello! I am Cleveland class's Denver, the fourth knight of the sea. Before I formally join your forces, will you tell me what kind of future do you wish for?";
            text[1] = "Commander, do you want to spectate my training? Hehe, how about joining in occasionally?";
            text[2] = "I want to fight together with my three sisters again, just like that time at Empress Augusta Bay.";
            text[3] = "Let's continue to march towards the future!";
            text[4] = "Battle scars are the best accolades.";
            text[5] = "I also want to be like Cleveland, rampaging inside the battlefield with swagger!";
        
        //Losowanie numeru kwestii
        los = Math.floor(Math.random()*5);

        //Tworzenie nowej wiadomości z wylosowaną kwestią
        $("#queryContainerID").append("<div class='queryBox animated fadeInRight'>"+text[los]+"</div>")
        var anim = "bounce";
        testAnim(anim);;
    });
});