//import the parent class
const Employee = require('./Employee');

//Manager child constructor extends employee parent class
class Manager extends Employee{
    constructor(name, id, email,officeNumber){
        //getting the data from parent class
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //creating character getter method in order to define what character use input
    //And return to string input itself
    getPosition(){return 'Manager'}
    
}
//declare module exported to use in other files
module.exports= Manager;