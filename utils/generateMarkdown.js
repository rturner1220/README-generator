// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.license; 
  let yourLicense = ''
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'Apache 2.0') {
    yourLicense = `![Apache 2.0 license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else if (licenseType === 'BSD 3-Clause') {
    yourLicense = `![BSD 3-Clause license](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
  } else if (licenseType === 'ISC') {
    yourLicense = `![ISC license](https://img.shields.io/badge/License-ISC-blue.svg)`
  } else if (licenseType === 'MPL 2.0') {
    yourLicense = `![MPL 2.0 license](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    getLink: (license) => {
      switch (license) {
        case 'mit':
          return '[MIT] (https://opensource.org/licenses/MIT)';
          break;
        case 'Apache 2.0':
          return '[Apache 2.0] (https://opensource.org/licenses/Apache-2.0)';
          break;
        case 'BSD 3-Clause':
          return '[BSD 3-Clause] (https://opensource.org/licenses/BSD-3-Clause)';
          break;
        case 'ISC':
          return '[ISC] (https://opensource.org/licenses/ISC)';
          break;
        case 'MPL 2.0':
          return '[MPL 2.0] (https://opensource.org/licenses/MPL-2.0)';
          break;
        case 'GPLv3':
          return '[GPLv3] (https://opensource.org/licenses/Apache-2.0)';
          break;
        
        default:
          return "license not found";
      }
    }
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `# ${data.title}
  ## license
  ${renderLicenseBadge(license)}`
  };
  const questions = {
    type: 'input',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT','Apache 2.0',
    'BSD 3-Clause','ISC','MPL 2.0','GPLv3','None'], 
    validate: licenseInput => {
        if(licenseInput) {
            return true;
        }else {
            console.log('Please enter your Lincense!');
            return false;
        }
     },
  }

    
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 return` ${data.title}
${data.badge}
${data.description}
## Table of contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions) 
### Installation:
In order to install the necessary dependencies, open the console and run the following:
\`\`\`${data.installations}\`\`\`
### Usage:
${data.usage}
### License:
This project is licensed under:
${data.license}
### Contributing:
${data.contribute}
### Tests:
In order to test open the console and run the following:
\`\`\`${data.tests}\`\`\`
### Questions:
If you have any questions reach me on [GitHub](https://github.com/${data.username}) or contact${data.name} at ${data.email}
`
}

module.exports = generateMarkdown;
