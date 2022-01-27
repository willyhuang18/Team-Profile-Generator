//import the Employee constructor 
const Engineer = require('../lib/Engineer');

//making the new employee object 
describe("Engineer", ()=>{
    describe("Initialization", ()=>{
        //since the employee had Id, and name
        it("should create an object with Github", ()=>{
            const engineer = new Engineer('Sara', 10, 'Sara.pro@yahoo.com','sarapro123');
            //use jest to expect the output to be any string, 
            //using the jest expect.any(constructor) to allow any input
            expect(engineer.github).toEqual(expect.any(String));
        });
    });
});