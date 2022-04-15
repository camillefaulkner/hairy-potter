let potteryToSell = []

export const toSellOrNotToSell = (potteryObject) => {
    if (potteryObject.weight >= 6) {
        potteryObject.price = 40
    } else if (potteryObject.weight < 6) {
        potteryObject.price = 20
    } else if (potteryObject.cracked = false) {
        potteryToSell.push(potteryObject)
    }
    return potteryObject    
}

export const usePottery = () => {
    let arrayCopy = potteryToSell.slice()
    return arrayCopy
}
