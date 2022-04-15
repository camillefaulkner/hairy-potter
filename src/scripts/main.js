// Imports go first
import {makePottery} from './PotteryWheel.js'
import {firePottery} from './Kiln.js'
import {toSellOrNotToSell} from './PotteryCatalog.js'
import {potteryList} from './PotteryList.js'


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 1, 4)
let vase = makePottery("vase", 4, 8)
let planter = makePottery("planter", 10, 6)
let bowl = makePottery("bowl", 2, 4)
let sculpture = makePottery("sculpture", 20, 24)


// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 1000)
let firedVase = firePottery(vase, 2100)
let firedPlanter = firePottery(planter, 1500)
let firedBowl = firePottery(bowl, 2000)
let firedSculpture = firePottery(sculpture, 3000)

// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedVase)
toSellOrNotToSell(firedPlanter)
toSellOrNotToSell(firedBowl)
toSellOrNotToSell(firedSculpture)

// Invoke the component function that renders the HTML list
let allPottery = makePottery()
const displayPottery = PotteryList() //!
const parentHTMLElement = document.querySelector(".potteryList")
parentHTMLElement.innerHTML = potteryList(allPottery)


console.log(firedMug)
console.log(firedVase)
console.log(firedPlanter)
console.log(firedBowl)
console.log(firedSculpture)
