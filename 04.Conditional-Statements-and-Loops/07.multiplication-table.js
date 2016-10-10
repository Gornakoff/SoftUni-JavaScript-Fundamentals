function solve([num]) {
    num = Number([num]);

    console.log("<table border='1'>");
    let header = '<tr><th>x</th>';
    let html = header;

    for (let hRow = 1; hRow <= num; hRow++) {
        html += `<th>${hRow}</th>`;
    }
    console.log(html + '</tr>');

    for (let row = 1; row <= num; row++) {
        for (let col = 0; col <= num; col++) {
            if (col == 0) {
                html = `<tr><th>${row}</th>`;
            } else {
                html += `<td>${row * col}</td>`;
            }
        }
        console.log(html + '</tr>');
    }


    console.log("</table>");
}

solve(['6'])