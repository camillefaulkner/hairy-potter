import { usePottery } from "./PotteryCatalog.js"

export const PotteryList = () => {
    const items = usePottery()
    let htmlString = ''
    for (const item of items) {
        htmlString += `<section class="pottery" id="pottery--${item.id}">
            <h2 class="pottery__shape">${item.shape}</h2>
        <div class="pottery__properties">
            Item weighs ${item.weight} grams and is ${item.height} cm in height
        </div>
        <div class="pottery__price">
            Price is $${item.price}
        </div>
        </section>`
    }
    return htmlString
}




//let htmlString = '<article class="potteryforsale">'
//htmlString += '</article>'