const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require('util')
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = () =>
inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your project name?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project',
  },
  {
    type: 'list',
    name: 'license',
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    message: 'What kind of license should your project have?',
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'What command should be run to install dependencies?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',
  },
 
]);


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}

// function to initialize program
function init() {

    questions()
        .then((answers) => writeFileAsync('ExampleREADME.md', generateMarkdown(answers)))
        .then(()=> console.log('You successfully wrote your README.md file!'))
        .catch((err)=> console.error(err));
}


// function call to initialize program
init();
