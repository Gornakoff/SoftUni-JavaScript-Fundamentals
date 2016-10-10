function square([size]) {
    size = Number([size]);

    for (let i = 0; i < size; i++) {
        console.log('*' + ' *'.repeat(size - 1));
    }
}

square(['5'])