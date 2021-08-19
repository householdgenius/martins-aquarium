// import the get fish data from fishdata
import { getFish } from './FishData.js'
// set a variable equal to the fish from fishdata
const allTheFish = getFish()

console.log ("the number of fish", allTheFish.length)
console.log ("what is the first fish", allTheFish [0])
console.log("the last item", allTheFish [allTheFish.length-1])

// loop through all the fish
for (const fish of allTheFish) {
    console.log(fish)
}