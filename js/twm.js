//Test przycisku Talk with me!
$(document).ready(function(){
    textSC = [];
    $("#twm").dblclick(function(){
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
        }

        if(textSC.length != 0) {
            var n = losujText(text.length);
            for (let i = 0; i < textSC.length; i++) {
                if(n == textSC[i]) {
                    n = losujText(textSC.length+1);
                    for (let i = 0; i < textSC.length; i++) {
                        if(n == textSC[i]) {
                            n++;
                            break;
                        }
                    }
                    break;
                }
            }
            $("#queryContainerID").append("<div class='queryBox animated fadeInRight'>"+text[n]+"</div>");
            testAnim("bounce");
            textSC.push(n);
        }
        else {
            var n = losujText(text.length);
            $("#queryContainerID").append("<div class='queryBox animated fadeInRight'>"+text[n]+"</div>");
            testAnim("bounce");
            textSC.push(n);
        }  
    });
});