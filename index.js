// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown');
const renderLicenseBadge = require('./utils/generateMarkdown');
const renderLicenseLink = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
     type: 'input',
     name: 'name',
     message: 'What is your name?(Required)',
     validate: nameInput => {
        if(nameInput) {
           return true;
        }else {
          console.log('please enter your name!');
            return false;
        }
      }
    },
    {
     type: 'input',
     name: 'title',
     message: 'What is your project title?(Required)',
     validate: titleInput => {
        if(titleInput) {
            return true;            
        }else {
            console.log('You need to enter a project title!');
            return false;
        }
      }
   },
   {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project(Required)',
    validate: descriptionInput => {
        if(descriptionInput) {
            return true;            
        }else {
            console.log('You need to enter a project description!');
            return false;
        }
      }
   },

   // table of contents(installation, usage. license, contribution, test)
   {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?'
   },       
   {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use:'
   }, 
   {
    type: 'checkbox',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT','Apache 2.0','BSD 3-Clause','ISC','MPL 2.0','GPLv3','None']
   }, 
   {
    type: 'input',
    name: 'contribute',
    message: 'What does the user need to know about contrubuting to the repo?'
   },
   {
    type: 'input',
    name: 'tests',
    message: 'What command should be run to run tests?' 
   },
   
  // End of table of contents

   {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username (Required)',
    validate: githubInput => {
        if (githubInput) {
            return true;
        }else {
            console.log('Please enter your GitHub username!');
            return false;
        }
      }
    },
    {
     type: 'input',
     name: 'link',
     message: 'Enter the GitHub link to your project (Required)',
     validate: linkInput => {
        if (linkInput) {
            return true;
        } else {
            console.log('You need to enter a project GitHub link!');
            return false;
        }
      }
    },
    {
     type: 'input',
     name: 'email',
     message: 'What is your email address? (Required)', 
     validate: linkInput => {
        if (linkInput) {
            return true;
        } else {
            console.log('You need to enter your email address!');
            return false;
        }
      }
    }
 ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        }else {
            console.log('Successfully created/wrote to generateReadMe.md')
        }
    })
}  

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
