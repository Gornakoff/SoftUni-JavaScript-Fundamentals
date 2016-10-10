function htmlEscaping(input) {
    let result = '<ul>\n';

    for (let i = 0; i < input.length; i++) {
        result += '\t<li>';
        for (let ch of input[i]) {
            if (ch == '<') {
                result += '&lt;';
            } else if (ch == '>') {
                result += '&gt;';
            } else if (ch == '&') {
                result += '&amp;';
            } else if (ch == '"') {
                result += '&quot;';
            } else if (ch == '\'') {
                result += '&#39;';
            } else {
                result += ch;
            }
        }
        result += '</li>\n';
    }
    result += '</ul>';
    console.log(result);
}

htmlEscaping(['<b>unescaped text</b>', 'normal text'])