function calculate([a, b, sign]) {
    [a, b] = [a, b].map(Number);
    let result = '';

    switch (sign) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = a / b; break;
        default: console.log('error'); break;
    }
    console.log(result);
}

calculate(['2', '4', '*'])