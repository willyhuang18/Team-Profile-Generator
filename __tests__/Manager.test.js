//import the Manager constructor 
const Manager = require('../lib/Manager');

//making the new Manager object 
describe("Manager", ()=>{
    describe("Initialization", ()=>{
        //since the employee had Id, and name
        it("should create an object with OfficeNumber", ()=>{
            const manager = new Manager('Sara', 10, 'Sara.pro@yahoo.com',101);
            //use jest to expect the output to be any string, 
            //using the jest expect.any(constructor) to allow any input
            expect(manager.officeNumber).toEqual(expect.any(Number));
        });
        it("should create an object to get employee's position", ()=>{
            const employee = new Manager('Sara', 10, 'Sara.pro@yahoo.com',101);

            expect(employee.getPosition()).toEqual("Manager");
        })
    });
});