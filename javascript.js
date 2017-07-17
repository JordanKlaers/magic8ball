$(document).ready(function() {

    var answers = ["what?", "no", "why even ask", "kinda", "haha no", "dont ask"]

    $("img").mouseover(function() {
        $("#answer").toggleClass("hide")
        var number = getRandomInt(0,5);
        $("#answer").html(answers[number]);
        $("#answer").toggleClass("shake");
    })

    $("img").mouseout(function() {
        $("#answer").toggleClass("hide");
        $("#answer").toggleClass("shake");
    })

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
})
