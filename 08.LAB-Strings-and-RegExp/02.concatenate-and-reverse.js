function concatenate(string) {
    let result = '';

    for (let i = 0; i < string.length; i++) {
        result += string[i];
    }
    result = result.split('').reverse().join('');
    console.log(result);
}

concatenate(['I', 'am', 'student'])
concatenate(['race', 'car'])