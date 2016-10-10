function chessboard(num) {
    let html = '<div class="chessboard">\n';
    for (let row = 0; row < num; row++) {
        html += '  <div>\n';
        let color = (row % 2 == 0) ? 'black' : 'white';
        for (let col = 0; col < num; col++) {
            html += `    <span class="${color}"></span>\n`;
            color = (color == 'white') ? 'black' : 'white';
        }
        html += '  </div>\n';
    }
    console.log(html + '</div>');

}