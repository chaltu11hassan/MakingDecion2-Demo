let backpack = [];

backpack.push('pokeball')
backpack.push('potion')
backpack.push('pokedollars')

// backpack.shift() we removed one item
backpack.splice(0, 1) //remove an item from position 1

let fountItem = 'waterstone';
backpack.push(fountItem)

backpack.pop() //this will remove the last item in the backpack

let itemCount = backpack.length; //this will give you how many items are in backoack
// console.log(itemCount)

backpack.push('greatball', 'antidote', 'revive') // added these into backpack which is our array

// let satchel = backpack.splice(2,3) //remove items from backpack/array in those positions
// console.log(satchel)

// for (let i=0; i<backpack.length;i++){ //we want to see items separately with a for loop
//     console.log(backpack[i]) //printed out each item separately
// } 

// if (backpack.length >= 3){
//     console.log('hit 3 statement')
//     for (let i=0; i<3; i++){ //the 3 is a hard coded to limit it from showing more than three items in list
//         console.log(backpack[i]) //prints only the first three items
      
//     }
// } else {
//     console.log('hit else')
//     for (let i=0; i<backpack.length; i++){ //I want it to tell me how many items total are in list
//         console.log(backpack[i])
        
//     }
// }

// console.log(backpack)

let guessMe = 54;

while (guessMe < 100) {
    console.log('-------', guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0){
        guessMe += 25
        console.log('guesMe is divisible by 4 or 5, added 25')
    } else if (guessMe % 3 === 0){
        guessMe -= 27
        console.log('guesMe is divisble by 3, subtracted 27')
    } else {
        guessMe += 3
        console.log('guessMe hit else, added 3')
    }
    guessMe += 22
    console.log(`added 22, guessME is now ${guessMe}`)
}

console.log('final value', guessMe)