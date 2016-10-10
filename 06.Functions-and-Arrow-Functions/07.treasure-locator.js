function treasure(input) {
    input = input.map(Number);

    for (let i = 0; i < input.length; i+=2) {
        let x = input[i];
        let y = input[i+1];

        console.log(island(x, y));
    }

    function island(px, py) {
        let tokelau = (px >= 8 && px <= 9 && py >= 0 && py <= 1);
        let tuvalu = (px >= 1 && px <= 3 && py >= 1 && py <= 3);
        let samoa = (px >= 5 && px <= 7 && py >= 3 && py <= 6);
        let tonga = (px >= 0 && px <= 2 && py >= 6 && py <= 8);
        let cook = (px >= 4 && px <= 9 && py >= 7 && py <= 8);

        switch (true) {
            case tokelau: return 'Tokelau';
            case tuvalu: return 'Tuvalu';
            case samoa: return 'Samoa';
            case tonga: return 'Tonga';
            case cook: return 'Cook';
            default: return 'On the bottom of the ocean';
        }
    }
}

treasure(['4', '2', '1.5', '6.5', '1', '3'])
treasure(['6', '4'])