// Parse JSON and HTML ESCAPE

function scoreToHTML(input) {
    let score = JSON.parse(input);
    let result = `<table>\n`;

    result += `\t<tr><th>name</th><th>score</th></tr>\n`;
    for (let obj of score) {
        result += `\t<tr>`;
        result += `<td>${htmlEscape(obj["name"])}</td>`;
        result += `<td>${obj["score"]}</td>`;
        result += `</tr>\n`;
    }
    result += `</table>`;

    // HTML ESCAPE ============================
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

scoreToHTML('[{"name": "Pesho", "score": 479},{"name": "Gosho", "score": 205}]');

//=========================================================================================
//