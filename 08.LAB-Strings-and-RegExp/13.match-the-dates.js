function printDates(input) {
    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
    let result = [];

    for (let date of input) {
        if (date.match(regex)) {
            let foundDate = date.match(regex);
            let dateSplit = foundDate[0].split('-');
            let print = `${foundDate} (Day: ${dateSplit[0]}, Month: ${dateSplit[1]}, Year: ${dateSplit[2]})`;
            result.push(print);
        }
    }
    console.log(result.join('\n'));
}

//printDates(['I am born on 30-Dec-1994.', 'This is not date: 512-Jan-1996.', 'My father is born on the 29-Jul-1955.'])
printDates(['1-Jan-1999 is a valid date.', 'So is 01-July-2000.', 'I am an awful liar, by the way – Ivo, 28-Sep-2016.'])



function extractDates(inputSentences) {
    let pattern =
        /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
    let dates = [], match;
    for (let sentence of inputSentences)
        while (match = pattern.exec(sentence))
            dates.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
    console.log(dates.join("\n"));
}
