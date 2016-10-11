function jsonTable(input) {

    let result = `<table>\n`;
    for (let line of input) {
        let inputData = JSON.parse(line);
        result += '\t<tr>\n';
        for (let obj in inputData) {
            let rawText = htmlEscape(inputData[obj].toString());

            if (inputData[obj] === 'salary') {
                result += `\t\t<td>${Number(inputData[obj])}</td>\n`;
            } else {
                result += `\t\t<td>${rawText}</td>\n`;
            }
        }
        result += '\t<tr>\n';
    }
    result += '</table>';

    function htmlEscape(text) {
        let map = {
            '"': '&quot;',
            '&': '&amp;',
            "'": '&#39;',
            '<': '&lt;',
            '>': '&gt;'
        }

        return text.replace(/["&'<>]/g, ch => map[ch]);
    }

    console.log(result);
}

jsonTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'])