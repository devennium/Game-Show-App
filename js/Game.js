/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

    // All variables are declared at the top of app.js

class Game {   
    constructor(){
        this.missed = 0
        this.phrases = this.createPhrases()
        this.activePhrase = null
    }

/* Start game method hides the start screen overlay
 * calls the getRandomPhrase method to select a phrase object from the Game object's array of phrases
 * adds phrase to the gameboard by calling the addPhraseToDisplay method 
 * */
    startGame(){
        const randomPhrase = this.getRandomPhrase()
        numberOfTries = document.querySelectorAll('.tries')
        totalNumberOfLives = numberOfTries.length

        phrase = new Phrase(randomPhrase)
        this.activePhrase = phrase
        this.hideOverlayDiv()
        phrase.addPhraseToDisplay(phrase)
    }

//Gets random phrase from current game context
    getRandomPhrase(){
        let randomPhrase = this.phrases[Math.floor(Math.random()*this.phrases.length)]
        return randomPhrase
    }

//Handles all user interaction
    handleInteraction(target){
        let letter = target.textContent
        let checkLetter = Boolean(phrase.checkLetter(letter, this.activePhrase.phrase))

        // Use checkLetter() to see if letter is match in phrase
        if(checkLetter){
            this.showMatchedLetter(letter)
            this.handleKeyboardLayout(true , target)
            this.checkForWin()
        } else if(!(checkLetter)){
            this.handleKeyboardLayout(false , target)
            this.removeLife()
        }
    }
//Reduces current life total by 1 and changes last life IMG to lostHeart.png
    removeLife(){
        numberOfTries[totalNumberOfLives-1].getElementsByTagName('IMG')[0].src = "images/lostHeart.png"
        totalNumberOfLives -= 1
        if(totalNumberOfLives === 0){
            this.gameOver(false)
        }
    }

// Hanlder to disable keyboard items upon user selection
    handleKeyboardLayout(match, target) {
        if(match === true){
            target.setAttribute('disabled', 'disabled')
            target.className = 'chosen'
        } else {
            target.setAttribute('disabled', 'disabled')
            target.className = 'wrong'
        }
    }

// Method to show matched letters on the board if selection is correct
    showMatchedLetter(letter){
        for (var i=0; i < phraseLettersLI.length; i++){
            let txtValue = phraseLettersLI[i].textContent
            if(txtValue === letter){
                phraseLettersLI[i].className = 'show'
            }
        }
    }

// Checks current number of shown letters vs total letters in active phrase 
// if equal game is over user has won the game

    checkForWin(){
        const totalLettersRevelead = document.querySelectorAll('.show').length
        const totalNumberOfWhiteSpaces = document.querySelectorAll('.space').length
        const totalNumberOfLettersInPhrase = this.activePhrase.phrase.length - totalNumberOfWhiteSpaces

        if (totalNumberOfLettersInPhrase === totalLettersRevelead){
            this.gameOver(true)
        }
    }
//Unhides overlay
//Displays Game over status in h1 header

    gameOver(gameOutcome){
        if (gameOutcome == true){
            gameOverlay.style.visibility = 'visible'
            gameOverMessage.innerHTML = 'Game Over - You Win!'
            this.resetGame()
        }
        if (gameOutcome == false){
            gameOverlay.style.visibility = 'visible'
            gameOverMessage.innerHTML = 'Game Over - Out of lives!'
            this.resetGame()
        }
    }
//Creates an array of phrases to be user at random when the player clicks start game
    createPhrases(){
        phrasesRepo.push('blue or red pill')
        phrasesRepo.push('the sky is falling')
        phrasesRepo.push('may the force be with you')
        phrasesRepo.push('do or do not')
        phrasesRepo.push('a dime a dozen')
        phrasesRepo.push('a piece of cake')
        phrasesRepo.push('an arm and a leg')
        phrasesRepo.push('back to square one')
        phrasesRepo.push('burst your bubble')
        phrasesRepo.push('between a rock and a hard place')
        return phrasesRepo
    }

//Resets game by removing all LI items from UL gameboard section

    resetGame(){
        this.activePhrase.phrase = null
        while(phraseDisplayUL.firstChild){
            phraseDisplayUL.removeChild(phraseDisplayUL.firstChild)
        }
        qwertyKeyboard.forEach(function(key){
            key.className = 'key'
            key.removeAttribute('disabled', 'disabled')
        })
        numberOfTries.forEach(function(lives){
            lives.getElementsByTagName('IMG')[0].src = "images/liveHeart.png"
        })
    }

// Hide overlay div to display phrase board
    hideOverlayDiv(){
        document.getElementById('overlay').style.visibility = 'hidden'
    }

}
