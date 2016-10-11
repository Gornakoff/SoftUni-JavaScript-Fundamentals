function storeCatalogue(input) {
    let result = [];

    for (let line of input) {
        let inputData = line.split(' : ');
        let name = inputData[0];
        let price = Number(inputData[1]);
        let firstLetter = name[0];

        if (result[firstLetter] === undefined) {
            result[firstLetter] = {};
            result[firstLetter][name] = price;
        } else {
            result[firstLetter][name] = price;
        }
    }

    for (let obj in result) {

        let arr = Array.of(obj);
        arr.sort(arr);
        console.log(arr);
    }
    console.log(result);
}

//storeCatalogue(["Appricot : 20.4","Fridge : 1500","TV : 1499","Deodorant : 10","Boiler : 300","Apple : 1.25","Anti-Bug Spray : 15","T-Shirt : 10"])


function catalogue(input) {
    let items = new Map()
    for(let line of input){
        let product = line.split(' : ')[0]
        let price = Number(line.split(' : ')[1])
        let firstLetter = product[0]

        if(!items.has(firstLetter)){
            items.set(firstLetter, new Map())
        }
        if(!items.get(firstLetter).has(product)){
            items.get(firstLetter).set(product, 0)
        }
        items.get(firstLetter).set(product, price)
    }
    let sorted = [...items].sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()))
    for(let [key, value] of sorted){
        console.log(key)
        let sortedProducts = [...value].sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()))
        for(let [k, v] of sortedProducts){
            console.log(`  ${k}: ${v}`)
        }
    }
}

catalogue(["Appricot : 20.4","Fridge : 1500","TV : 1499","Deodorant : 10","Boiler : 300","Apple : 1.25","Anti-Bug Spray : 15","T-Shirt : 10"])