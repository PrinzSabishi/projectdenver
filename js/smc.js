$(document).ready(function(){
    imgSC = [];
    $("#smc").dblclick(function(){
        function losujObr(x) {
            return Math.floor(1+Math.random()*(x));
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

        var postacmsg = "";
        switch (postac) {
            case "clev":
                postacmsg = "My sister Cleveland is for sure the coolest person I've ever known!";
                break;
            
            case "rafi":
                postacmsg = "She is called Laffey. It's the most calmest person I've ever known.. but also one of the coolest! Did you saw her while latest battle was going on?!";
                break;

            case "taihou":
                postacmsg = "That woman her is called Taihou. She is the hardest aircraft carrier in Azur Lane. If you have some luck you might see her beautiful and destructive formation of planes.";
                break;

            default:
                break;
        }
        var imgurl = "img/"+postac+nrob+".jpg";
        console.log(imgurl);
        $("#queryContainerID").append("<div class='queryBox animated fadeInRight'><p>"+postacmsg+"</p></div>");
        $("#queryContainerID").append("<div class='queryBox animated fadeInRight'><img src='"+imgurl+"' class='img-fluid' /></div>");

    });
});