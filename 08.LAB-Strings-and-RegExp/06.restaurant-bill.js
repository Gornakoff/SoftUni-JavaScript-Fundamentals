function restaurant(input) {
    let result = 'You purchased ';
    let goods = [];
    let sum = 0;



    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            goods.push(input[i]);
        } else {
            sum += Number(input[i]);
        }
    }
    result += `${goods.join(', ')} for a total sum of ${sum}`;
    console.log(result);
}

restaurant(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])
restaurant(['Cola', '1.35', 'Pancakes', '2.88'])