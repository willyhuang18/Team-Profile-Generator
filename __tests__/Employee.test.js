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

        })
    })
})