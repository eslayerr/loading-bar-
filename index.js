var fill = document.getElementById("fill");
var pct = document.getElementById("pct");
var status = document.getElementById("status");
var doneMsg = document.getElementById("done-msg");
var label = document.getElementById("label");


var messages = [
    "getting shit done",
    "Loading assets",
    "Fetching",
    "Almost there",
    "Wrappin up",

];

var current = 0;
var timer = null;

run() ;

function run(){
    timer = setInterval(function(){
        var jump = Math.floor(Math.random()*3)+1;
        current =Math.min(100, current+jump);


        fill.style.width = current + "%";
        pct.innerText= current+"%";
        status.innerText = messages[Math.floor(current / 20)] || messages[4];


        if (current >= 100){
            clearInterval(timer);
            status.innerText=" ";
            doneMsg.classList.add("show")
        }
    }, 40);
}


function restart(){
    current = 0;
    fill.style.width ="0%";
    pct.innerText = "0%";
    label.innerText = "Initializing...";
    status.innerText = "Gettin shit done";
    doneMsg.classList.remove("show");
    clearInterval(timer);
    run();
}
