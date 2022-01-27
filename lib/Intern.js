//import the parent class
const Employee = require('./Employee');

//Intern child constructor extends employee parent class
class Intern extends Employee  {
    constructor (name, id, email,school) {
        //getting the data from parent class
        super (name, id, email); 
        this.school = school; 
    }
    //declare getter method for school
    getSchool(){return this.school;}
    //creating character getter method in order to define what character use input
    //And return to string input itself
    getCharacter(){return 'Intern'}
}

//declare module exported to use in other files
module.exports = Intern; 