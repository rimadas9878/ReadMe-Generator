
function renderLicenseBadge(license) {
 if(license == 'Apache' ) 
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
 else if(license == 'Boost') 
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
else if(license == 'BSD-3')
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
else if(license == 'BSD 2-Clause License')
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

return `
# ${answers.project_title}
        
## Description
  ${answers.Description}
  
## Table of Contents
      
- [Installation Instructions](#installation-instructions)
- [Usage Information](#usage-information)
- [License](#license)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
      
## Installation Instructions 
${answers.Installation_Instruction}

## Usage Information
${answers.Usage_Information}

## License
${renderLicenseBadge(answers.License_details)}

## Contribution Guidelines
${answers.Usage_Information}

## Test Instructions
${answers.Test_Information}
  
## Questions
## Github URL
${answers.Github_Url}

## For additional questions reach me at
${answers.Email_address}    
${answers.Phone_Number} 
`;
}

module.exports = generateMarkdown;
