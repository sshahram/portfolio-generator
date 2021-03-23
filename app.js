const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js'); 

// const pageHTML = generatePage(name, github);


// fs.writeFile('./index.html', pageHTML, err => {
//     if(err) throw new Error(err);

//     console.log('Portfolio complete! check out index.html to see the output!');
// });

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));