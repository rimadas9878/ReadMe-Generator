const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

inquirer.prompt([{
    type: 'input',
    name: 'project_title',
    message: 'Enter the title of the project.'
},
{
    type: 'input',
    name: 'Description',
    message: 'Enter the project description.'
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
    //https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
    type: 'list',
    name: 'License_details',
    message: 'Select the required License',
    choices: ['Apache', 'Boost', 'BSD-3', 'BSD 2-Clause License']
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
    fs.writeFile('README.md', generateMarkdown(answers) , (err) =>
    err ? console.log(err) : console.log('Successfully created ReadMe File')
        );
    })