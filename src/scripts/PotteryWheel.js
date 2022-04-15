let pottery = 1

export const makePottery = (potteryShape, potteryWeight, potteryHeight) => {
    let potteryObject = {
        id: pottery++,
        shape: potteryShape,
        weight: potteryWeight,
        height: potteryHeight
    }
    return potteryObject
}