let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let card1 = getRandom()
let card2 = getRandom()
let cards = [card1, card2]

let sum = card1 + card2
let hasBlackJack = false
let isAlive = true

let message = ""

player = {
    name: "Per",
    chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $"+player.chips

function getRandom(){
    let rn = Math.floor(Math.random()*13) + 1
    if(rn === 1){
        return 11 //Ace
    }else if(rn >10){
        return 10
    }else{return rn}
}

function printcards(){
    cardsEl.textContent = "Cards: "
    for(let a = 0; a<cards.length; a++){
        cardsEl.textContent += cards[a]
        if(a < cards.length - 1){
            cardsEl.textContent += ", "
        }
    }
}

function start(){
    printcards()
    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    }else{
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card3 = getRandom()
        sum += card3
        cards.push(card3)
        start()
    }
}
