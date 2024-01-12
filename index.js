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
    name: 'location',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'hobby',
    message: 'What is your project name?',
  },
  {
    type: 'input',
    name: 'food',
    message: 'Please write a short description of your project',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What kind of license should your project have?',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'What command should be run to install dependencies?',
  },
  {
    type: 'input',
    name: 'name',
    message: 'What command should be run to run tests?',
  },
  {
    type: 'input',
    name: 'location',
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
