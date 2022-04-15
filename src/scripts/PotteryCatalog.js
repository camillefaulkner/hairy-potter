let potteryToSell = []

export const toSellOrNotToSell = (potteryObject) => {
    if (potteryObject.weight >= 6 && potteryObject.cracked === false) {
        potteryObject.price = 40
    } else if (potteryObject.weight < 6 && potteryObject.cracked === false) {
        potteryObject.price = 20
    }
    if (potteryObject.cracked === false) {
        potteryToSell.push(potteryObject)
    }
    return potteryObject    
}

export const usePottery = () => {
    let arrayCopy = potteryToSell.slice()
    console.log(potteryToSell)
    return arrayCopy
}
