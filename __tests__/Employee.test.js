//import the Employee constructor 
const Employee = require('../lib/Employee');

//making the new employee object 
describe("Employee", ()=>{
    describe("Initialization", ()=>{
        it("should create an object with name, id, email", ()=>{
            const employee = new Employee('Sara', 10, 'Sara.pro@yahoo.com');
            //use jest to expect the output to be any string
            expect(employee.name).toEqual(String);
            expect(employee.id).toEqual(Number);
            expect(employee.email).toEqual(String);
        });
        it("should create an object to get employee's name", ()=>{
            const employee = new Employee('Sara', 10, 'Sara.pro@yahoo.com');

            //using the getName method in the employee constructor
            expect(employee.getName()).toEqual(String);
        })
        it("should create an object to get employee's ID", ()=>{
            const employee = new Employee('Sara', 10, 'Sara.pro@yahoo.com');

            //using the getID method in the employee constructor
            expect(employee.getId()).toEqual(Number);
        })
        it("should create an object to get employee's email", ()=>{
            const employee = new Employee('Sara', 10, 'Sara.pro@yahoo.com');

            //using the getEmail method in the employee constructor
            expect(employee.getEmail()).toEqual(String);
        })
    })
})