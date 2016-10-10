function population(input) {
    let towns = {};

    for (let row of input) {
        let delimiter = ' <-> ';
        let data = row.split(delimiter);

        if (towns[data[0]] === undefined) {
            towns[data[0]] = Number(data[1]);
        } else {
            towns[data[0]] += Number(data[1]);
        }
    }

    for (let key of Object.keys(towns)) {
        let result = `${key} : ${towns[key]}`;
        console.log(result);
    }
}

//population(["Sofia <-> 1200000","Montana <-> 20000","New York <-> 10000000","Washington <-> 2345000","Las Vegas <-> 1000000"])
population(["Istanbul <-> 100000","Honk Kong <-> 2100004","Jerusalem <-> 2352344","Mexico City <-> 23401925","Istanbul <-> 1000"])