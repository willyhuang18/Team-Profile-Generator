//import files 
const HTMLpage = require('./src/HTML.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

//install package for user input and write file
const fs = require('fs');
const inquirer = require('inquirer');

//create inquirer prompt for employee
const employee = ()=>{
        inquirer.prompt([
        {
            type: 'list',
            name: 'position',
            message: "Please choose your employee's position",
            choices: ['Manager','Engineer', 'Intern']
        },
        {
            type: "input",
            name: "name",
            message: "What is the name for the employee in this team"
        },{
            type: "input",
            name: "id",
            message: "Enter employee's ID Number: ",
        },{
            type: "input",
            name: "email",
            message: "Enter employee's email: ",
        },{
            type: "input",
            name: "officeNumber",
            message: "Enter employee's office Number: ",
            //use inquirer when method to indicate position
            when:(input)=> input.position === 'Manager',
        }
    ])
    .then(managerAnswer =>{
        // This creates a constant with the name 'name, id, email, officeNumber'
          //create new object to contain the constructor 

    })
}