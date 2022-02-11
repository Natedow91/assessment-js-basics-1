const { console } = require('console');
const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})



reader.question('Welcome user! Please enter your password.', (password) => {
    console.log(password + "is accepted");
    reader.close();
})