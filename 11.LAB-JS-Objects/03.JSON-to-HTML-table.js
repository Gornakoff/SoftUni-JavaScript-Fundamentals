function jsonHTMLTable(input) {
    let data = JSON.parse(input);
    let result = `<table>\n`;
    let keys = [];

    result += `\t<tr>`;
    for (let key of Object.keys(data[0])) {
        result += `<th>${htmlEscape(key)}</th>`;
        keys.push(key);
    }
    result += `</tr>\n`;

    for (let obj of data) {
        result += `\t<tr>`;

        for (let key of keys) {
            let value = htmlEscape(obj[key].toString()); // get the value of specific key

            result += `<td>${value}</td>`;
        }
        result += `</tr>\n`;
    }
    result += `</table>`;

    function htmlEscape(text) {
        let map =  {
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
jsonHTMLTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]')
jsonHTMLTable('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"}, {"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]')