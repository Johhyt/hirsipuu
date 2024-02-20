const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')

const words = [
    "programming",
    "javascript",
    "database",
    "markup",
    "framework",
    "variable",
    "stylesheet",
    "library",
    "asynchronous",
    "hypertext"
]

let randomizeWord = ''
let maskedWord = ''
let arp = 0

const newGame = () => {
    const random = Math.floor(Math.random() * 10) + 1
    randomizeWord = words[random]
    maskedWord = "*".repeat(randomizeWord.length)
    console.log(randomizeWord)
    output.innerHTML = maskedWord
    arp = 0
}

const win = () => {
    alert(`Olet arvannut oikein, sana on ${randomizeWord}. Sinulla meni ${arp} arvausta.` )
    newGame()
}

const replaceFoundChars = (guess) => {
    for (let i = 0; i<randomizeWord.length;i++) {
        const char = randomizeWord.substring(i,i+1)
        if (char === guess) {
            let newString = maskedWord.split('')
            newString.splice(i,1,guess)
            newString = newString.join('')
            maskedWord = newString
        }
        
    }
    output.innerHTML = maskedWord
}

newGame()

input.addEventListener('keypress',(e) => {
    if (e.key === 'Enter') {
        e.preventDefault()

        const guess = input.value
        if (guess.toLowerCase() === randomizeWord.toLowerCase()) {
            win()
        } else  if (guess.length === 1 ) {
            replaceFoundChars(guess)
            if (maskedWord.toLocaleLowerCase()=== randomizeWord.toLocaleLowerCase()) {
                win()
            }
        } else {
            alert("You guessed wrong!")
        }
        
        span.innerHTML = arp
        arp++
        input.value = ''
    }
})