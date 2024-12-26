
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let cards = [ ] //Array of cards 


let messageEl = document.getElementById("message-el"); //object
let sumofcard = document.querySelector("#sumofcards");
let cardsEl = document.getElementById("cards-el");

let player = {
    name: "Per",
    chips: 145
};


let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard(){
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}



function startGame(){
    isAlive = true
    let firstCard = getRandomCard();    
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message; 
    sumofcard.textContent = "Sum: "+sum;
    
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}