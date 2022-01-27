//import the Employee constructor 
const Employee = require('../lib/Employee');

//making the new employee object 
describe("Employee", ()=>{
    describe("Initialization", ()=>{
        it("should create an object with name, id, email", ()=>{
            const employee = new Employee('Sara', 10, 'Sara.pro@yahoo.com');
            //use jest to expect the output to be any string, 
            //using the jest expect.any(constructor) to allow any input
            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
        });
        it("should create an object to get employee's name", ()=>{
            const employee = new Employee('Sara', 10, 'Sara.pro@yahoo.com');

            //using the getName method in the employee constructor
            expect(employee.getName()).toEqual(expect.any(String));
        })
        it("should create an object to get employee's ID", ()=>{
            const employee = new Employee('Sara', 10, 'Sara.pro@yahoo.com');

            //using the getID method in the employee constructor
            expect(employee.getId()).toEqual(expect.any(Number));
        })
        it("should create an object to get employee's email", ()=>{
            const employee = new Employee('Sara', 10, 'Sara.pro@yahoo.com');

            //using the getEmail method in the employee constructor
            expect(employee.getEmail()).toEqual(expect.any(String));
        })
        it("should create an object to get employee's position", ()=>{
            const employee = new Employee('Sara', 10, 'Sara.pro@yahoo.com');

            expect(employee.getPosition()).toEqual("Employee");
        })
    })
})