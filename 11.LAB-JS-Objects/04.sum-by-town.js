function sumByTown(input) {
    let count = input.length;
    let obj = {};

    for (let i = 0; i < count; i+= 2) {
        let [town, income] = [input[i], Number(input[i + 1])];
        if (obj[town] === undefined) {
            obj[town] = income;
        } else {
            obj[town] += income;
        }

    }

    let result = JSON.stringify(obj);
    console.log(result);
}

sumByTown(["Sofia","20","Varna","3","Sofia","5","Varna","4"])
sumByTown(["Sofia","20","Varna","3","sofia","5","varna","4"])