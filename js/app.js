/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Declare global variables
const gameOverMessage = document.querySelector("#game-over-message")
const gameOverlay = document.getElementById('overlay')
const buttonLetterKeys = document.getElementsByClassName('key')
const phraseDisplayDiv = document.getElementById('phrase')
const phraseDisplayUL = document.querySelector('#phrase > ul:nth-child(1)')
const phraseLettersLI = phraseDisplayUL.getElementsByTagName('li')
const qwertyKeyboard =  document.querySelector("#qwerty").querySelectorAll(".key");

let numberOfTries
let game
let phrase
let userClickedLetter
let totalNumberOfLives
let ulListItem
let phrasesRepo = []

 // Add event listener on start button
 document.getElementById("btn__reset").addEventListener("click", function(){
    game = new Game()
    game.startGame()
 })

 Array.from(buttonLetterKeys).forEach(function(element){
     element.addEventListener('click', function(){
        game.handleInteraction(event.target)
     })
 })
