function getDay([day, month, year]) {
    [day, month, year] = [day, month, year].map(Number);

    let date = new Date(year, month - 1, day);
    date.setDate(0);

    console.log(date.getDate());
}

getDay(['17','4','2002'])