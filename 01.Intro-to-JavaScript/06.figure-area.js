function calculateArea([figureAW, figureAH, figureBW, figureBH]) {
    let figureAS = figureAW*figureAH;
    let figureBS = figureBW*figureBH;
    let diff = Math.min(figureAW, figureBW)* Math.min(figureAH, figureBH);
    let area = figureAS + figureBS - diff;

    console.log(area);
}

calculateArea(['2', '4', '5', '3'])
calculateArea(['13', '2', '5', '8'])

