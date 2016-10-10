function find(input) {
    let match = input[0];
    let text = input[1];
    let count = 0;
    let position = -1;

    for (let i = 0; i < text.length; i++) {
        position = text.indexOf(match, position + 1);
        if (position == -1) {
            break;
        }
        count++;
    }
    console.log(count);
}

find(['ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.'])