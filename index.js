//declare variable
const prompt = require('readline-sync')
const handlePath1 = () => {
    
    const userName = prompt.question(`Help! I can hear you! Whats your name?\n`)
    let realName = ["Booty Scratcher", "Witch Doc", "Wack"]
    let randomName = Math.floor(Math.random() * realName.length)
    let realName1 = realName[randomName]
    console.log(`HahaHa! Nice try "${userName}" I know that's you, ${realName1}`);
    
    
    let pickPath = prompt.question(`Press 1 to help me. Press 2 to ignore.\n`)
    if (pickPath == 1){
        console.log(`Thank you so much ${realName1}!\n`)
        lockBox()
        hiddenLevel()
        
    }
    else if (pickPath == 2){
        console.log(`Well forget you too then!`)
        tryAgain()
    }
    else {
        console.log(`You can't read? Try again.`)
        tryAgain()
    }
}

const tryAgain = () => {
    let tryAgain = prompt.question(`Do you want to try again? y||n\n`)
    tryAgain = tryAgain.toLowerCase()
    if (tryAgain === "y")
    {          
        handlePath1()
        
    } else {
        console.log(`Well okay, bye!`)
    }

}

let lockBox = () => {
    pickPath11 = prompt.question(`I'm locked in this box, help me get out. Pick your tool: Press 1 for Gun. 2 for Chainsaw. 3 for Lockpicking tools\n`)
    if (pickPath11 == 1){
        console.log(`You shot the lock!`)

    } else if (pickPath11 == 2) {
        console.log(`You cut me in half, you lose!`)
        tryAgain()

    }else if (pickPath11 == 3) {
        console.log(`You picked the lock!`)

    } else {
        console.log(`You lose!`)
        tryAgain()

    }
}

let hiddenLevel = () => {
    console.log(`Thank you so much, I appreciate you!`)
    console.log(`I have some money for you!`)
    console.log(`Come help me go get it..`)
    pickPath21 = prompt.question(`There's a guard standing outside of my door! (Press 1 to: Use Gun; 2 to: Runaway; 3 to: Use Bellydancing Distraction)`)
    if (pickPath21 == 1) {
        console.log(`You shot the guard but then the other guards came and shot both of us. You lose!`)
        tryAgain()

    } else if (pickPath21 == 2) {
        console.log(`Wow really? You Lose!`)
        tryAgain()

    } else if (pickPath21 == 3) {
        console.log(`${realName1}, You distracted the guard! You Win!`)
        tryAgain()

    } else {
        tryAgain()
    }
}

handlePath1()

