
function gameFun(_value){

    let playerHandS = parseInt(document.querySelector("#playerHandS").textContent);
    let computerHandS = parseInt(document.querySelector("#computerHandS").textContent);
    
    let playerHand = document.querySelector(".player-hand");
    let computerHand = document.querySelector(".computer-hand");

    playerHand.src = "./assets/images/" + _value.toString() + ".png";

    let randomNumber = Math.floor(Math.random()*3)+1;
   
    computerHand.src = "./assets/images/" + randomNumber.toString() + ".png";

    const ROCK_TYPE = 1;
    const PAPER_TYPE = 2;
    const SCISSORS_TYPE = 3;

    if(_value == ROCK_TYPE){

        if(randomNumber == PAPER_TYPE){ computerHandS++;}
        if(randomNumber == SCISSORS_TYPE){ playerHandS++;}

    }else if(_value == PAPER_TYPE){

        if(randomNumber == ROCK_TYPE){ playerHandS++;}
        if(randomNumber == SCISSORS_TYPE){ computerHandS++;}

    }else if(_value == SCISSORS_TYPE){

        if(randomNumber == ROCK_TYPE){ computerHandS++;}
        if(randomNumber == PAPER_TYPE){ playerHandS++;}

    }

    document.querySelector("#playerHandS").innerHTML = playerHandS;
    document.querySelector("#computerHandS").innerHTML = computerHandS;

}