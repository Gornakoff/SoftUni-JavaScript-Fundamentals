function convertToDecimal([binary]){
    let result = 0;
    let power = 7;

    for (let x of binary) {
        let num = Math.pow(2, power);
        result += x * num;
        power--;
    }

    console.log(result);
}

convertToDecimal(['00001001'])