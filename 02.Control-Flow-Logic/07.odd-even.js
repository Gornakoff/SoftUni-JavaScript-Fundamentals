function oddEven(number) {
    let result = 'invalid';

    if (number % 2 == 0) {
        result = 'even';
    } else if (number % 2 == Math.round(number%2)){
        result = 'odd';
    }

    console.log(result);
}

oddEven('5')