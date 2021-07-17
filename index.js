/** Requirements **/
const inquirer = require('inquirer');
const fs = require('fs');

/** Instantiate the skeleton of the README file **/
const skeleton = (answers) =>
`# ${answers.projname}

## By: ${answers.username}

<a name="back"></a>
### Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

&nbsp;

${answers.license}

&nbsp;

> ## **Description**<br/>
> ${answers.description}<br/>
> 
> &nbsp;
>
> ## **Tech used**<br/>
> ${answers.techused}  
> <br/>

&nbsp;

<a name="installation"></a>
## **Installation**  
${answers.installation}  


&nbsp;

<a name="usage"></a>
## **Usage**  
${answers.usage}  

&nbsp;

<a name="contributing"></a>
## **Contributing**
${answers.contribution}  


&nbsp;

<a name="tests"></a>
## **Tests**  
${answers.tests}  


&nbsp;

<a name="questions"></a>
## **Questions**  

Email: ${answers.email}

GitHub: [${answers.github}](http://github.com/${answers.github})  

LinkedIn: [${answers.linkedin}](https://www.linkedin.com/in/${answers.linkedin})`;

/** List of Licenses **/
const licenses = {
  'MIT'   : `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
  'ODbL'  : `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`,
  'BSD'   : `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
};

/** Questions **/
inquirer
  .prompt([
    {
      type: 'input',
      name: 'projname',
      message: 'What is the name of the project?'
    },
    {
      type: 'input',
      name: 'username',
      message: 'Who is the project owner?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Preferred License',
      choices: ['MIT', 'ODbL', 'BSD'],
      default: 'MIT'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give a brief description of the project:'
    },
    {
      type: 'input',
      name: 'techused',
      message: 'What languages and technologies were used?'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Are there any additional installation instuctions?',
      default: "N/A"
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Are there any additional rules for usage?',
      default: "N/A"
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Set a list of rules for contibuting to project:',
      default: 'Clone the repository separately, and contact david.a.lucio@gmail.com for other contribution requests.'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the test cases?',
      default: 'N/A'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:'
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn username:'
    }
  ])
  .then((answers) => {

    answers.license = licenses[answers.license];
    const readmeContent = skeleton(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('README.md created')
    );
  });