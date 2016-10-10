
// /^[a-zA-Z0-9._]+@[a-z]+(\.[a-z]+)$/g;
// /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)$/;

function validateEmail([email]) {
    let emailPattern = /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)$/;
    let result = emailPattern.test(email);

    if (result) {
        console.log('Valid');
    } else {
        console.log('Invalid');
    }
}

validateEmail(['valid@email.bg'])
validateEmail(['invalid@emai1.bg'])