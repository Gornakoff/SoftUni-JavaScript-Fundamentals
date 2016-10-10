function calcCone(input) {
    let r = Number(input[0]);
    let h = Number(input[1]);

    let s = Math.sqrt(r * r + h * h);
    let volume = Math.PI * r * r * h / 3;
    let area = Math.PI * r * (r + s);

    console.log(volume);
    console.log(area);
}

calcCone(['3', '5'])
calcCone(['3.3', '7.8'])