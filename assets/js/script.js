
function gameFun(_value){

    let playerHandS = parseInt(document.querySelector("#playerHandS").textContent);
    let computerHandS = parseInt(document.querySelector("#computerHandS").textContent);
    
    let playerHand = document.querySelector(".player-hand");
    let computerHand = document.querySelector(".computer-hand");

    playerHand.src = "./assets/images/" + _value.toString() + ".png";

    let randomNumber = Math.floor(Math.random()*3)+1;
   
    computerHand.src = "./assets/images/" + randomNumber.toString() + ".png";

    
       if(_value == 1){

        if(randomNumber == 2){ computerHandS++;}
        if(randomNumber == 3){ playerHandS++;}

    }else if(_value == 2){

        if(randomNumber == 1){ playerHandS++;}
        if(randomNumber == 3){ computerHandS++;}

    }else if(_value == 3){

        if(randomNumber == 1){ computerHandS++;}
        if(randomNumber == 2){ playerHandS++;}

    }

    document.querySelector("#playerHandS").innerHTML = playerHandS;
    document.querySelector("#computerHandS").innerHTML = computerHandS;

}