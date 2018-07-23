

var myGame;

document.getElementById("play").addEventListener("click", function () {
    clearInterval(myGame);
    myGame = setInterval(play, 1000);
});

document.getElementById("pause").addEventListener("click", function () {
    clearInterval(myGame);
});

document.getElementById("reverse").addEventListener("click", function () {
    clearInterval(myGame);
    myGame = setInterval(reverse, 1000);
});


function play() {
    var x = document.getElementById("t1").value;
    var y = document.getElementById("t2").value;
    document.getElementById("t2").value = y+x.charAt(0);
    document.getElementById("t1").value = x.slice(1);
}

function reverse() {
    var x = document.getElementById("t1").value;
    var y = document.getElementById("t2").value;
    document.getElementById("t1").value = y.charAt(y.length-1)+x;
    document.getElementById("t2").value = y.slice(0,y.length-1);
}
