//import the parent class
const Employee = require('./Employee');

//Engineer child constructor extends employee parent class
class Engineer extends Employee{
    constructor(github){
        //getting the data from parent class
        super(name, id, email);
        this.github = github;
    }
}