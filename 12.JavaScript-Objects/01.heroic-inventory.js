function inventory(input) {
    let resultData = [];

    for (let line of input) {
        let data = line.split(' / ');
        let [name, level] = [data[0], data[1]];
        let items = [];

        if (data.length > 2) {
            items = data[2].split(', ');
        }

        let hero = {
            name: name,
            level: Number(level),
            items: items
        };

        resultData.push(hero);
    }
    console.log(JSON.stringify(resultData));
}

inventory(["Isacc / 25 / Apple, GravityGun","Derek / 12 / BarrelVest, DestructionSword","Hes / 1 / Desolator, Sentinel, Antara"])