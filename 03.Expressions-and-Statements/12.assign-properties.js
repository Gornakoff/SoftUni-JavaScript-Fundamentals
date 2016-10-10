function assign(input) {
    let obj = {};
    for (let i = 0; i < input.length; i+=2) {
        obj[input[i]] = input[i + 1];
    }

    console.log(obj);
}

assign(['name', 'Pesho', 'age', '23', 'gender', 'male'])