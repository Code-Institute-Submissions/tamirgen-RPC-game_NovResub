/**
 * The code consist of one function
 * It takes the image and convert it to a number
 * After player select option, it throws a random number and it converts to an image on the computer side
 * The final part of the function is to calculate who is the winner and to update the score area
 */
function gameFun(_value){

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
     */  
    if(_value == 1){

        if(randomNumber == 2){ computerHandS++;}
        if(randomNumber == 3){ playerHandS++;}
                
 /** 
     * The if statement here checks the scenario of "paper"
     * If the random number is equal to 3, the computer wins
     * If the random number is equal to 1, the player wins
     */ 
    }else if(_value == 2){

        if(randomNumber == 1){ playerHandS++;}
        if(randomNumber == 3){ computerHandS++;}
 /** 
     * The if statement here checks the scenario of "scissors"
     * If the random number is equal to 1, the computer wins
     * If the random number is equal to 2, the player wins
     */ 
    }else if(_value == 3){

        if(randomNumber == 1){ computerHandS++;}
        if(randomNumber == 2){ playerHandS++;}
    }

    document.querySelector("#playerHandS").innerHTML = playerHandS;
    document.querySelector("#computerHandS").innerHTML = computerHandS;

}