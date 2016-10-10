function leapYear(year) {
    let leap = 'no';

    if(year % 4 == 0 && year % 100 != 0 || year % 400 ==0) {
        leap = 'yes';
    }

    console.log(leap);
}

leapYear(1901)