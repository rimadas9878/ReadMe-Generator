// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input

inquirer.prompt([{
    type: 'input',
    name: 'project_title',
    message: 'Enter the title of the project'
},
{
    type: 'input',
    name: 'Description',
    message: 'Enter the project description'
},
{
    type: 'input',
    name: 'Installation_Instruction',
    message: 'Enter the instructions for Installating the software'
},
{
    type: 'input',
    name: 'Usage_Information',
    message: 'Enter the instructions for Usage of the software'
},
{
    type: 'list',
    name: 'License_details',
    message: 'Select the required License',
    choices: ['Public Domain License', 'Permissive License', 'Restrictive Licenses', 'LGPL']
},
{
    type: 'rawlist',
    name: 'Usage_Information',
    message: 'Enter the instructions for Usage of the software'
},
{
    type: 'input',
    name: 'Test_Information',
    message: 'Enter the test instructions'
},
{
    type: 'input',
    name: 'Github_Url',
    message: 'Enter the GitHub URL'
},
{
    type: 'input',
    name: 'Email_address',
    message: 'Enter the Email address'
},
{
    type: 'input',
    name: 'Phone_Number',
    message: 'Enter the phone number'
}
])
.then((answers) => {
    fs.writeFile('README.md', 
    `# ${answers.project_title}
    
    
    ## Description
    ${answers.Description}
    
    
    ## Table of Contents
    
    - [Installation Instructions](#Installation-Instructions)
    - [Usage Information](#Usage-Information)
    - [License](#License)
    - [Contribution Guidelines](#Contribution-Guidelines)
    - [Test Instructions](#Test-Instructions)
    
    ## Installation Instructions
    ${answers.Installation_Instruction}
    
    ## Usage Information
    ${answers.Usage_Information}
    
    ## License
    ${answers.License_details}
    
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
    `
    , (err) => 
    err ? console.log(err) : console.log('Successfully created ReadMe File')
    );
})




// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
