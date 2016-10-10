function employeeData(input) {
    let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;
    let result = [];

    for (let element of input) {
        let match = regex.exec(element);
        if (match) {
            let data = `Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`;
            result.push(data);
        }
    }
    console.log(result.join('\n'));
}

employeeData(['Isacc - 1000 - CEO', 'Ivan - 500 - Employee', 'Peter - 500 - Employee', 'Jonathan - 2000 - Manager'])


//======================================================================================================================
// Different solution

function parseEmployeeData(input) {
    let regex =
        /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;
    for (let element of input) {
        let match = regex.exec(element);
        if (match)
            console.log(`Name: ${match[1]}\n` +
                `Position: ${match[3]}\n` +
                `Salary: ${match[2]} `);
    }
}


//parseEmployeeData(['Jeff - 1500 - Staff', 'Ko - 150 - Ne', 'Peter - 500 - Employee'])


