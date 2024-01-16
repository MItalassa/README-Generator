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
    message: 'Please write a short description of your project:',
  },
  {
    type: 'input',
    name: 'installationn',
    message: 'Please write the installation for this project:',
  },
  {
    type: 'list',
    name: 'license',
    choices: ['Apache', 'Boost','BSD',  'MIT', 'GPL', 'None'],
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


// function to initialize program
async function init() {

    try {
        const answers = await questions()
        writeFileAsync('ExampleREADME.md', generateMarkdown(answers))
        console.log('You successfully wrote your README.md file!')
    } catch (err) {
        console.error(err);
    }

}


// function call to initialize program
init();
