function username(input) {
    let result = [];

    for (let x of input) {
        let[alias, domain] = x.split('@');
        let username = alias + '.';
        let domainParts = domain.split('.');

        for (let d of domainParts) {
            username += d[0];
        }
        result.push(username);
    }
    console.log(result.join(', '));
}

username(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])