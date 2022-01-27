//import files 
const HTMLpage = require('./src/HTML.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

//install package for user input and write file
const fs = require('fs');
const inquirer = require('inquirer');

//create inquirer prompt for manager
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
    .then(managerAnswer =>{
        // This creates a constant with the name 'name, id, email, officeNumber'
          const {name, id, email, officeNumber} = managerAnswer;
          //create new object to contain the constructor 
          const manager = new Manager(name, id, email, officeNumber);
          console.log(manager);
    })
}