

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return`
  ### <Your-Project-Title>
  ${data.title}

  ### Licensing:
  [![license: ${data.badge}](https://img.shields.io/badge/license-${data.badge}-blue.svg)](https://www.gnu.org/licenses/${data.license}.html)

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

  ### License
  This project is licensed under the ${data.license} license.

  ### Contributing:
  ${data.contribute}

  ### Tests:
  In order to test open the console and run the following:
  ${data.tests}

  ### Questions:
  - If you have any additional questions You can reach me at ${data.email}
  - Github: [${data.github}](https://github.com/${data.github})
  `  
}
  module.exports = generateMarkdown;
