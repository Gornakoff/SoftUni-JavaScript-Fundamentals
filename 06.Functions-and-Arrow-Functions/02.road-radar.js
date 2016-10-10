function drive([speed, zone]) {
    let overspeed = Number(speed) - zoneLimit(zone);

    if (overspeed <= 0) {
        return '';
    } else if (overspeed <= 20) {
        return 'speeding';
    } else if (overspeed <= 40) {
        return 'excessive speeding';
    } else {
        return 'reckless driving';
    }

    function zoneLimit(zone) {
        switch (zone) {
            case 'motorway':
                return 130;
            case 'interstate':
                return 90;
            case 'city':
                return 50;
            case 'residential':
                return 20;
            default:
                return 0;
        }
    }
}

console.log(drive([130, "motorway"]));