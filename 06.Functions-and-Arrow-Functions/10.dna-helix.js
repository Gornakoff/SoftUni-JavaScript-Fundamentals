function dna(size) {
    size = Number(size);
    let s = 'ATCGTTAGGG';
    let sp = 0;

    // print first part
    for (let i = 0; i < size; i++) {
        if (i % 4 == 0) {
            console.log(`**${s[sp]}${s[sp + 1]}**`);
        } else if (i % 4 == 1) {
            console.log(`*${s[sp]}--${s[sp + 1]}*`);
        } else if (i % 4 == 2) {
            console.log(`${s[sp]}----${s[sp + 1]}`);
        } else if (i % 4 == 3) {
            console.log(`*${s[sp]}--${s[sp + 1]}*`);
        }
        sp += 2;
        if (sp % 10 == 0) {
            sp = 0;
        }
    }
}

dna(10)
