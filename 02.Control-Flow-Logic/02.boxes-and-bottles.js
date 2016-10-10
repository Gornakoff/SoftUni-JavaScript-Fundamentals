function calcBoxes([bottles, capacity]) {
    let bottleCount = Number(bottles);
    let boxCapacity = Number(capacity);
    let boxesNeeded = Math.ceil(bottleCount / boxCapacity);

    console.log(boxesNeeded);
}

calcBoxes(['15', '7'])