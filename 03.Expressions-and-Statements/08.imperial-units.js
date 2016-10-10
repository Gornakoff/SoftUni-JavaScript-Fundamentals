function convert(num) {
    num = Number(num);

    let feet = Math.floor(num / 12);
    let inch = num % 12;

    console.log(`${feet}'-${inch}"`);
}

convert(11)