/**
 * The code consist of one function
 * It takes the image and convert it to a number
 * After player select option, it throws a random number and it converts to an image on the computer side
 * The final part of the function is to calculate who is the winner and to update the score area
 */
function gameFun(_value){

    const msg = (_msg) => {
        document.getElementById('massage').innerHTML = _msg;
    }

    let playerHandS = parseInt(document.querySelector("#playerHandS").textContent);
    let computerHandS = parseInt(document.querySelector("#computerHandS").textContent);
    
    let playerHand = document.querySelector(".player-hand");
    let computerHand = document.querySelector(".computer-hand");

    playerHand.src = "assets/images/" + _value.toString() + ".png";

    let randomNumber = Math.floor(Math.random()*3)+1;
   
    computerHand.src = "assets/images/" + randomNumber.toString() + ".png";
/**
 * The images are numbered from 1-3
 * 1 = rock
 * 2 = paper
 * 3 = scissors
 */
    /** 
     * The if statement here checks the scenario of "rock"
     * If the random number is equal to 2, the computer wins
     * If the random number is equal to 3, the player wins
     * If the random number is equal to 1, it's a draw
     */  
    if(_value == 1){

        if(randomNumber == 2){ computerHandS++; msg("Computer wins!");}
        if(randomNumber == 3){ playerHandS++; msg("You win! well done");}
        if(randomNumber == 1){msg("It's a draw...");} 
                
 /** 
     * The if statement here checks the scenario of "paper"
     * If the random number is equal to 3, the computer wins
     * If the random number is equal to 1, the player wins
     * If the random number is equal to 2, it's a draw
     */ 
    }else if(_value == 2){

        if(randomNumber == 1){ playerHandS++; msg("You win! well done");}
        if(randomNumber == 3){ computerHandS++; msg("Computer wins!");}
        if(randomNumber == 2){msg("It's a draw...");} 

 /** 
     * The if statement here checks the scenario of "scissors"
     * If the random number is equal to 1, the computer wins
     * If the random number is equal to 2, the player wins
     * If the random number is equal to 3, it's a draw
     */ 
    }else if(_value == 3){

        if(randomNumber == 1){ computerHandS++;msg("Computer wins!");}
        if(randomNumber == 2){ playerHandS++; msg("You win! well done");}
        if(randomNumber == 3){msg("It's a draw...");} 


    }

    document.querySelector("#playerHandS").innerHTML = playerHandS;
    document.querySelector("#computerHandS").innerHTML = computerHandS;

}