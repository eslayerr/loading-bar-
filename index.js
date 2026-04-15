var greenBar = document.getElementById("greenBar");
var nn = document.getElementById("nn");
var txt = document.getElementById("txt");
var yay = document.getElementById("yay");
var lbl = document.getElementById("lbl");


var arr = [
    "getting shit done",
    "Loading assets",
    "Fetching",
    "Almost there",
    "Wrappin up",

];

var n = 0;
var myTimer = null;

doThing() ;

function doThing(){
    myTimer = setInterval(function(){
        var x = Math.floor(Math.random()*3)+1;
        n =Math.min(100, n+x);


        greenBar.style.width = n + "%";
        nn.innerText= n+"%";
        txt.innerText = arr[Math.floor(n / 20)] || arr[4];


        if (n >= 100){
            clearInterval(myTimer);
            txt.innerText=" ";
            yay.classList.add("show")
        }
    }, 40);
}


function restart(){
    n = 0;
    greenBar.style.width ="0%";
    nn.innerText = "0%";
    lbl.innerText = "Initializing...";
    txt.innerText = "Gettin shit done";
    yay.classList.remove("show");
    clearInterval(myTimer);
    doThing();
}
