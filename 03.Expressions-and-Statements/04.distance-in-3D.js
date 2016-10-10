function calc3dDistance([p1x, p1y, p1z, p2x, p2y, p2z]) {
    p1x = Number(p1x);
    p1y = Number(p1y);
    p1z = Number(p1z);
    p2x = Number(p2x);
    p2y = Number(p2y);
    p2z = Number(p2z);

    let x = Math.abs(p1x - p2x);
    let y = Math.abs(p1y - p2y);
    let z = Math.abs(p1z - p2z);
    let sqD = x * x + y * y + z * z;

    let d = Math.sqrt(sqD);

    console.log(d);
}

calc3dDistance([1, 1, 0, 5, 4, 0])
calc3dDistance([3.5, 0, 1, 0, 2, -1])