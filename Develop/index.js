// TODO: Include packages needed for this application
const inquirer = require('inquirer')

const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
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
        type: 'list',
        name: 'hasLicense',
        message: 'What License would you like to use?',
        choices: ['yes', 'no'],
        when: function (prevAnswers) {
            if (parseInt(prevAnswers.userAge) > 18) {
                return true;
            }
            return false;
        }
    }
];

// run your inquirere session now
inquirer.prompt(questions)
    .then((answersObject) => {
        // answers.hasLicense == 'yes' ? console.log('You do have a license') : console.log('You don\'t');
        // console.log('You do' + answers.hasLicense == 'yes' ? 'have a license' : 'not have a license');
        // with your answersObject, pass it in to your function generateMarkdown
        // const returnedData = generateMarkdown(answersObjet);
        // pass returnedData to your writeToFile method now
        // writeToFiel('README.md', returneData);
    })
// TODO: Create a function to write README file; look at Node.js's native fs module
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
