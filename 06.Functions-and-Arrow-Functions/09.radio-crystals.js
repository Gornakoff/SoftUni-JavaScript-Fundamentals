function crystalFinish(input) {
    input = input.map(Number);

    let desiredFinish = input[0];

    for (let i = 1; i < input.length; i++) {
        let cut = 0, lap = 0, grind = 0, etch = 0;
        let current = input[i];
        let result = `Processing chunk ${input[i]} microns\n`;
        let wash = 'Transporting and washing';

        while (current != desiredFinish) {
            if (current / 4 >= desiredFinish) {
                while (current / 4 >= desiredFinish) {
                    current = process(current, 'cut');
                    cut++;
                }
                current = Math.floor(current);
                result += `Cut x${cut}\n`;
            } else if (current * 0.8 >= desiredFinish) {
                while (current * 0.8 >= desiredFinish) {
                    current = process(current, 'lap');
                    lap++;
                }
                current = Math.floor(current);
                result += `Lap x${lap}\n`;
            } else if (current - 20 >= desiredFinish) {
                while (current - 20 >= desiredFinish) {
                    current = process(current, 'grind');
                    grind++;
                }
                result += `Grind x${grind}\n`;
            } else if (current - 2 >= desiredFinish - 1) {
                while (current - 2 >= desiredFinish - 1) {
                    current = process(current, 'etch');
                    etch++;
                }
                result += `Etch x${etch}\n`;
            }
            result += `${wash}\n`;

            if (current == desiredFinish) {
                result += `Finished crystal ${desiredFinish} microns`;
            }
            else if (current + 1 == desiredFinish) {
                current++;
                result += 'X-ray x1\n';
            }
        }

        console.log(result);

    }

    function process(value, action) {
        switch (action) {
            case 'cut': return value /= 4;
            case 'lap': return value *= 0.8;
            case 'grind': return value -= 20;
            case 'etch': return value -= 2;
            default: return value;
        }
    }
}
0//crystalFinish([1375, 50000])
crystalFinish([1000, 4000, 8100])
//crystalFinish([1000, 8100])