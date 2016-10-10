function nextDate([year, month, day]) {
    let daysInMonth = [30, 28, 31, 30, 31, 30, 30, 31, 30, 31, 30, 31];

    if (year % 4 == 0) {
        daysInMonth[1] = 29;
    }


    let newYear = Number(year);
    let newMonth = Number(month);
    let nextDay = Number(day) + 1;

    if (newYear < 1900) {
        newYear += 1900;
    }

    if (nextDay > daysInMonth[month-1]){
        nextDay %= daysInMonth[month-1];
        newMonth++;

        if (newMonth > 12) {
            newMonth %= 12;
            newYear++;
        }
    }

    console.log(newYear + '-' + newMonth + '-' + nextDay);
}

nextDate(['1', '1', '1'])
nextDate(['1951', '12', '24'])