function cappyJuice(input) {
    let fruitJuice = {};
    let result = {};

    for (let line of input) {
        let inputData = line.split(' => ');
        let name = inputData[0];
        let quantity = Number(inputData[1]);

        if (fruitJuice[name] === undefined) {
            fruitJuice[name] = quantity;

        } else {
            fruitJuice[name] += quantity;
        }

        if (fruitJuice[name] / 1000 >= 1) {
            result[name] = Math.floor(fruitJuice[name] / 1000);
        }
    }

    for (let fruit in result) {
        let bottles = result[fruit];
        if (result[fruit] > 0) {
            console.log(`${fruit} => ${bottles}`);
        }
    }
}

//cappyJuice(["Orange => 2000","Peach => 1432","Banana => 450","Peach => 600","Strawberry => 549"])
cappyJuice(["Kiwi => 234","Pear => 2345","Watermelon => 3456","Kiwi => 4567","Pear => 5678","Watermelon => 6789"])