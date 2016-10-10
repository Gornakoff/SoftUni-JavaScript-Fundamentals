function townsToJSON(input) {
    let result = [];

    for (let townInput of input.slice(1)) {
        let [empty, town, lat, lng] = townInput.split(/\s*\|\s*/);
        let obj = {Town: town, Latitude: Number(lat), Longitude: Number(lng)};
        result.push(obj);
    }

    console.log(JSON.stringify(result));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])