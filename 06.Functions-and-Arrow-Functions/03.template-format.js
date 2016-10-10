function transform(info) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<quiz>\n';
    for (let i = 0; i < info.length; i+=2) {
        let q = info[i];
        let a = info[i+1];

        xml += `\t<question>\n\t\t${q}\n\t</question>\n`;
        xml += `\t<answer>\n\t\t${a}\n\t</answer>\n`;
    }
    xml += '</quiz>';

    console.log(xml);
}

transform(["Dry ice is a frozen form of which gas?", "Carbon Dioxide", "What is the brightest star in the night sky?", "Sirius"]);