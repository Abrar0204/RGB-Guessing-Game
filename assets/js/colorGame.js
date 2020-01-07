var squareClass = document.getElementsByClassName("hard");

var colors = [];

var resultHead = document.getElementById("res");

var winColorNum = "";

var winColor = "";

var easyBut = document.getElementById("easyBut");

var hardBut = document.getElementById("hardBut");

var newCol = document.getElementById("newCol");

var backDrop = document.getElementById("backDrop");

var numOfSquares = 6;

gameStart();

easyBut.addEventListener("click",function(){

    easyBut.classList.add("mode");
    hardBut.classList.remove("mode");
    
    for(var b=0;b<squareClass.length;b++){

        if(squareClass[b].classList.contains("easy")){
            squareClass[b].style.display = "none";
        }

    }

    numOfSquares =3;

    gameStart();

});

hardBut.addEventListener("click",function(){

    easyBut.classList.remove("mode");
    hardBut.classList.add("mode");
    for(var b=0;b<squareClass.length;b++){

        if(squareClass[b].classList.contains("easy")){
            squareClass[b].style.display = "block";
        }

    }

    numOfSquares= 6;

    gameStart();

});

function gameStart(){


    newCol.innerHTML = "New Colors";

    for(var j=0;j<numOfSquares; j++){

        var sq = squareClass[j];

        colors.push(sq.style.backgroundColor = random_rgba());

        sq.addEventListener("click",function(){

            var sqColor = this.style.backgroundColor;

            if(sqColor == winColor){

                backDrop.style.backgroundColor = winColor;

                changeAllColor();

                newCol.innerHTML = "Try Again ?";

            } 

        }); 

    }

    chooseWinColor();

}


function chooseWinColor(){

    winColorNum = chooseWinColorNum();

    winColor = squareClass[winColorNum].style.backgroundColor;

    resultHead.innerHTML = "Try Guessing "+ winColor; 

}

function random_rgba() {

    return 'rgb(' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ')';

}

function chooseWinColorNum(){

    return Math.round(Math.random() * (numOfSquares-1));

}

function changeAllColor(){

    for(var a=0;a<numOfSquares;a++){

        squareClass[a].style.backgroundColor = winColor;

    }

}

function changeBackDropColor(){

    backDrop.style.backgroundColor = "rgb(0,123,255)";

}

newCol.addEventListener("click",function(){

    changeBackDropColor();

    gameStart();

});

