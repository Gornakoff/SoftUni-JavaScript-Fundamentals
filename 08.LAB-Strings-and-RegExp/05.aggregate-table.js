function aggregate(input) {
    let sum = 0;
    let result = [];

    for (let line of input) {
        let data = data.split('|');
        let town = data[1].trim();
        let income = Number(data[2].trim());

        result.push(town);
        sum += income;

    }

    console.log(result.join(', '));
    console.log(sum);
}

aggregate(['| Sofia           | 300', '| Veliko Tarnovo  | 500', '| Yambol          | 275'])