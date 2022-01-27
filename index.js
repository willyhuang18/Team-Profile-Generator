//import files 
const HTMLpage = require('./src/HTML.js');
const manager = require('./lib/Manager.js');
const engineer = require('./lib/Engineer.js');
const intern = require('./lib/Intern.js');

//install package for user input and write file
const fs = require('fs');
const inquirer = require('inquirer');

const managerQA = ()=>{
        inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the name for the manager in this team"
        },{
            type: "input",
            name: "id",
            message: "Enter manager's ID Number: ",
        },{
            type: "input",
            name: "email",
            message: "Enter manager's email: ",
        },{
            type: "input",
            name: "officeNumber",
            message: "Enter manager's office Number: ",
        }
    ])
}