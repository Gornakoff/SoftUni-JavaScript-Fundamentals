function filterAge(input) {
    let minAge = Number(input[0]);

    for (let i = 2; i<input.length; i+=2) {
        let age = Number(input[i]);

        if(age >= minAge) {
            let name = input[i-1];
            console.log('{ name: ' + "'" + name + "', age: " + age + ' }')
        }
    }
}

filterAge(['12', 'Ivan', '15', 'Asen', '9'])