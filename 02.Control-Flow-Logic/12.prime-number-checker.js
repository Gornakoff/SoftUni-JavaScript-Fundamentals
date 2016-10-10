function checker(num) {
    let prime = true;
    for (let d = 2; d <= Math.sqrt(num); d++) {
        if (num % d == 0) {
            prime = false;
            break;
        }
    }
    console.log(prime && (num > 1));
}



checker('2.5')