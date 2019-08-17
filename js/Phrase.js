/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

    // All variables are declared at the top of app.js

class Phrase {
    constructor(phrase) {
        this.phrase = phrase
    }

// Method to add phrase to be displayed
    addPhraseToDisplay(){
        this.setupLetterToBeDisplayed()
    }

// Check if selected letter is in phrase
    checkLetter(letter, phrase){
        let letterMatchFilter = new RegExp(letter)
        let matched = letterMatchFilter.test(phrase)
        return matched
    }

// Method to set letter classes on active phrase
    setupLetterToBeDisplayed(){
        // Check if character is alphabet letter
        const matchAlphabetCharacter = /[a-z]/i
        const matchSpace = /\s/g
        let textNode
        let li

        for (var i =0; i < this.phrase.length; i++){
             li = document.createElement('LI');
            if (this.phrase.charAt(i).match(matchAlphabetCharacter)){
                textNode = document.createTextNode(this.phrase.charAt(i))
                li.className = 'letter'
                li.setAttribute('id', this.phrase.charAt(i))
                li.appendChild(textNode)
                phraseDisplayUL.appendChild(li)
            } else if (this.phrase.charAt(i).match(matchSpace)){
                textNode = document.createTextNode(' ')
                li.className = 'space'
                li.appendChild(textNode)
                phraseDisplayUL.appendChild(li)
                }
            }
        }
}