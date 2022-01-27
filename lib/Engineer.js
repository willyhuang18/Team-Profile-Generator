//import the parent class
const Employee = require('./Employee');

//Engineer child constructor extends employee parent class
class Engineer extends Employee{
    constructor(name, id, email, github){
        //getting the data from parent class
        super(name, id, email);
        this.github = github;
    }
    //declare getter method for github
    getGithub(){return this.github;}
     //creating character getter method in order to define what character use input
    //And return to string input itself
    getPosition(){return 'Engineer'}

}
//declare module exported to use in other files
module.exports = Engineer;