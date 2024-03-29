//Employee class constructor
/*making employee because others roles are start as employee or 
because employee is parent class
*/ 

class Employee {
    //give a constructor with argument name, id, email as basic
    constructor(name, id, email){
        this.name= name;
        this.id = id;
        this.email= email;
    }
    //declare a getter method for name 
    getName(){return this.name};
    
    //declare getter method for Id
    getId(){return this.id};

    //declare getter method for email
    getEmail(){return this.email};

    //creating character getter method in order to define what character use input
    //And return to string because it's character
    getPosition(){return 'Employee'}
}

//declare module exported to use in other files
module.exports = Employee;