function lowestPrice(input) {
    let data = {};

    for (let line of input) {
        let info = line.split(/\s*\|\s*/);
        let [town, product, price] = [info[0], info[1], Number(info[2])];

        if (data[product] === undefined) {
            data[product] = {};
            data[product][town] = price;
        } else {
            data[product][town] = price;
        }
    }

    for (let key in data) {
        let item = key;
        let itemTown;
        let itemPrice;

        for (let town in data[key]) {
            let currentPrice = data[key][town];
            let currentTown = town;

            if (itemPrice === undefined) {
                itemPrice = currentPrice;
                itemTown = currentTown;
            } else if (currentPrice < itemPrice) {
                itemPrice = currentPrice;
                itemTown = currentTown;
            }
        }
        console.log(`${item} -> ${itemPrice} (${itemTown})`);
    }
}

//lowestPrice(["Sample Town | Sample Product | 1000","Sample Town | Orange | 2","Sample Town | Peach | 1","Sofia | Orange | 3","Sofia | Peach | 2","New York | Sample Product | 1000.1","New York | Burger | 10"])
lowestPrice(["Sofia City | Audi | 100000","Sofia City | BMW | 100000","Sofia City | Mitsubishi | 10000","Sofia City | Mercedes | 10000","Sofia City | NoOffenseToCarLovers | 0","Mexico City | Audi | 1000","Mexico City | BMW | 99999","New York City | Mitsubishi | 10000","New York City | Mitsubishi | 1000","Mexico City | Audi | 100000","Washington City | Mercedes | 1000"])