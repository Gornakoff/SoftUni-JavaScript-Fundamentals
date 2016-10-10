function stringOfNumbers(input) {
    let lastNum = Number(input[0]);
    let str = '';

    for (let i = 1; i <= lastNum; i++){
        str+= i;
    }
    console.log(str);
}

stringOfNumbers(['11'])