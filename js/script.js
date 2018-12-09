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

//Test przycisku Talk with me!
$(document).ready(function(){
    textSC = [];
    $("#twm").dblclick(function(){
        console.log("=========================")
        //Tablica z kwestiami Denver
        var text = [];
            text[0] = "Hello! I am Cleveland class's Denver, the fourth knight of the sea. Before I formally join your forces, will you tell me what kind of future do you wish for?";
            text[1] = "Commander, do you want to spectate my training? Hehe, how about joining in occasionally?";
            text[2] = "I want to fight together with my three sisters again, just like that time at Empress Augusta Bay.";
            text[3] = "Let's continue to march towards the future!";
            text[4] = "Battle scars are the best accolades.";
            text[5] = "I also want to be like Cleveland, rampaging inside the battlefield with swagger!";
        
        //Losowanie numeru kwestii
        function losujText(x) {
            return Math.floor(Math.random()*(x-1));
        }

        if(textSC.length == 6) {
            textSC.splice(0,5);
            console.log("------------------");
            console.log("Czyszczenie tablicy textSC: 6 elementów");
            console.log("------------------");
        }

        if(textSC.length != 0) {
            var n = losujText(text.length);
            console.log("------------------");
            console.log("Wylosowane n: "+n);
            for (let i = 0; i < textSC.length; i++) {
                if(n == textSC[i]) {
                    console.log("n pasuje do elementu z tablicy textSC");
                    n = losujText(textSC.length+1);
                    console.log("inkrementacja n do "+n);
                    break;
                }
            }
            $("#queryContainerID").append("<div class='queryBox animated fadeInRight'>"+text[n]+"</div>");
            testAnim("bounce");
            textSC.push(n);
            console.log("Dodawanie n do tablicy textSC");
            console.log("------------------");
        }
        else {
            console.log("------------------");
            var n = losujText(text.length);
            console.log("n nie pasuje do żadnego elementu z tablicy textSC");
            console.log("Wylosowane n: "+n);
            $("#queryContainerID").append("<div class='queryBox animated fadeInRight'>"+text[n]+"</div>");
            testAnim("bounce");
            textSC.push(n);
            console.log("Dodawanie n do tablicy textSC");
            console.log("------------------");
        }
        console.log("------------------");
        console.log("Długość tablicy textSC : "+textSC.length);
        console.log("------------------");
        console.log("=========================")
    });
});