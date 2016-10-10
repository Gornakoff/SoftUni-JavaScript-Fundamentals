function cityMarkets(input) {
    let result = new Map();

    for (let obj of input) {
        let [town, product, quantityPrice] = obj.split(/\s*->\s*/);
        let [quantity, price] = quantityPrice.split(/\s*:\s*/);

        if (!result.has(town)) {
            result.set(town, new Map());
        }

        let income = quantity * price;
        let incomeByProduct = result.get(town).get(product);

        if (incomeByProduct) {
            income += incomeByProduct;
        }

        result.get(town).set(product, income);
    }

    for (let [town, product] of result) {
        console.log(`Town - ${town}`);

        for (let [product, income] of result.get(town)) {
            console.log(`$$$${product} : ${income}`);
        }
    }
}

cityMarkets(["Sofia -> Laptops HP -> 200 : 2000","Sofia -> Raspberry -> 200000 : 1500","Sofia -> Audi Q7 -> 200 : 100000","Montana -> Portokals -> 200000 : 1","Montana -> Qgodas -> 20000 : 0.2","Montana -> Chereshas -> 1000 : 0.3"])