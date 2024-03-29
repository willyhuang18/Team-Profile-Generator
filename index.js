//import files 
const HTMLpage = require('./src/HTML.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

//install package for user input and write file
const fs = require('fs');
const inquirer = require('inquirer');

//make empty array to contain the employee info
const teamArr = [];

//create inquirer prompt for employee
const employeePrompt = ()=>{
    console.log('Welcome to the team!');
        return inquirer.prompt([
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
            //using inquirer validate method
            validate: (value) =>{
                if (isNaN(value)) {
                    console.log ('Please enter valid ID')
                    return false; 
                }else{
                  return true;
                }
              }
        },{
            type: "input",
            name: "email",
            message: "Enter employee's email: ",
            //using inquirer validate method
            validate: (email) => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter correct email format!')
                    return false; 
                }
            }
        },{
            //adding office number for manager
            type: "input",
            name: "officeNumber",
            message: "Enter employee's office Number: ",
            //use inquirer when method to indicate position
            when:(input)=> input.position === 'Manager',
            //using inquirer validate method
            validate: (value) =>{
                if (isNaN(value)) {
                    console.log ('Please enter valid ID')
                    return false; 
                }else{
                  return true;
                }
              }
        },{
            //adding github for engineer
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username: ",
            when: (input) => input.position === "Engineer",
        },{
            //adding School for Intern
            type: 'input',
            name: 'school',
            message: "Please enter the employee's school: ",
            when: (input) => input.position === "Intern",
        },{
            //add more member if user want to
            type: 'confirm',
            name: 'addEmployee',
            message: 'Do you want more team member?',
            default: false
        }
    ])
    .then(response =>{
        // This creates a constant with the name 'name, id, email, officeNumber'
        //create new object to contain the constructor 
        const {name, id, email, position, officeNumber, github, school, addEmployee} = response;
        let employee;
        //declare switch() as condition
        switch(position){
            case 'Manager':
                employee = new Manager(name, id, email, officeNumber);
                teamArr.push(employee);
                if(addEmployee){
                    employeePrompt()
                }else{
                    HTMLfile(HTMLpage(teamArr))
                }
                break;
            case 'Engineer':
                employee = new Engineer(name, id, email, github);
                teamArr.push(employee);
                if(addEmployee){
                    employeePrompt()
                }else{
                    HTMLfile(HTMLpage(teamArr))

                }
                break;
            case 'Intern':
                employee = new Intern(name, id, email, school);
                teamArr.push(employee);
                if(addEmployee){
                    employeePrompt()
                }else{
                    HTMLfile(HTMLpage(teamArr))

                }
                break;
            default:
                console.log('Please enter one position');
        }
        //push the user response into the array

    })
}

//use file package to create a Html file
const HTMLfile = (data)=>{
    fs.writeFile('./dist/index.html', data, err =>{
        if(err){
            console.log(err);
        }else{
            console.log('You had successfully create team profile!');
        }
    })
}
//putting everything together
employeePrompt()
