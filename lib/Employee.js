//Employee class constructor
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

}