//TODO: Update licenseList with all 9 lisences, 
//update the array with their information, 
//update the switch statement to match, 



// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const licenseList = ["MIT", "Boost Software", "The Unlicense", "No license", "GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public 2.0", "Apache 2.0", ];
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'desc',
        message: 'What is your project doing?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the project?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can you contribute?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can you help test this project?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email for future contact',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What License would you like to use?',
        choices: licenseList,
    }
];

// run your inquirer session now

// TODO: Create a function to write README file; look at Node.js's native fs module
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answersObject) => {
        // with your answersObject, pass it in to your function generateMarkdown
        const returnedData = generateMarkdown(answersObject);
        // pass returnedData to your writeToFile method now
        writeToFile('README.md', returnedData);
    })
 }

// Function call to initialize app
init();
