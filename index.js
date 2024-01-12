const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');

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
    type: 'input',
    name: 'license',
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
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
