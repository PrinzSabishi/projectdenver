$(document).ready(function(){
    imgSC = [];
    $("#smc").dblclick(function(){
        function losujObr(x) {
            return Math.floor(1+Math.random()*(x));
        }
        function losujNrMsg(x) {
            return Math.floor(1+Math.random()*(x-1));
        }



        var nrob = losujObr(6);
        var nrpostac = losujObr(3);
        if(nrpostac == 1) {
            var postac = "clev";
        }
        else if(nrpostac == 2) {
            var postac = "rafi";
        }
        else {
            var postac = "taihou";
        }
        var nrmsg = losujNrMsg(3);
        var postacmsg = [];
        switch (postac) {
            case "clev":
                postacmsg = [
                    "My sister Cleveland is for sure the coolest person I've ever known!",
                    "This is Cleveland! She is my sister. One day, I want to become just like her!",
                    "For sure you heard about Cleveland! Who didn't?! She is sooo cool. Am I right?"
                ] ;
                
                break;
            
            case "rafi":
                postacmsg = [
                    "She is called Laffey. It's the most calmest person I've ever known.. but also one of the coolest! Did you saw her while latest battle was going on?!",
                    "That's Laffey! She is suuuper cute and always sleepy!",
                    "That girl here is called Laffey. At first she seems to be calm and innocent but believe me.. that's a little devil while in battle!"
                ];
                break;

            case "taihou":
                postacmsg = [
                    "That woman here is called Taihou. She is the hardest aircraft carrier in Azur Lane. If you have some luck you might see her beautiful and destructive formation of planes.",
                    "Meet Taihou! I'm always impresed by her strength!",
                    "Oh! Look, that's Taihou - The Hardest Aircraft Carrier in IJN. This is so cool!"
                ];
                break;

            default:
                break;
        }
        var imgurl = "img/"+postac+nrob+".jpg";
        console.log(imgurl);
        $("#queryContainerID").append("<div class='queryBox animated fadeInRight'><p>"+postacmsg[nrmsg]+"</p></div>");
        $("#queryContainerID").append("<div class='queryBox animated fadeInRight'><img src='"+imgurl+"' class='img-fluid' /></div>");

    });
});