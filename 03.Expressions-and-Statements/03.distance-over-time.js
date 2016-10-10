function calcDistance([v1, v2, t]) {
    v1 = Number(v1);
    v2 = Number(v2);
    t = Number(t);

    let distanceV1 = v1 * t;
    let distanceV2 = v2 * t;

    let delta = Math.abs(distanceV1 - distanceV2);
    let distance = delta * 1000 / 3600;

    console.log(distance);
}

calcDistance(['0', '60', '3600'])
calcDistance(['11', '10', '120'])
calcDistance(['5', '-5', '40'])
