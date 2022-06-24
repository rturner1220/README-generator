// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.license; 
  let yourLicense = ''
  if(licenseType === 'MIT') {
    yourLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (licenseType === 'Apache 2.0') {
    yourLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (licenseType === 'BSD 3-Clause') {
    yourLicense = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (licenseType === 'ISC') {
    yourLicense = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else if (licenseType === 'MPL 2.0') {
    yourLicense = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
}
module.exports = renderLicenseBadge;


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
  module.exports = renderLicenseLink;


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return`
### <Your-Project-Title>
${data.title}
### Description
${data.description}
## Table of contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions) 
### Installation:
In order to install the necessary dependencies, open the console and run the following:
${data.installation}
### Usage:
${data.usage}
### License:
This project is licensed under the ${data.license} license 
### Contributing:
${data.contribute}
### Tests:
In order to test open the console and run the following:
${data.tests}
### Questions:
If you have any questions reach me on [GitHub](https://github.com/${data.github}/${data.title}) or contact me at ${data.email}
`
}

module.exports = generateMarkdown;
