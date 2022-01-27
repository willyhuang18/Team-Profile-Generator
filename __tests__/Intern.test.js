//import the Intern constructor 
const Intern = require('../lib/Intern');

//making the new employee object 
describe("Intern", ()=>{
    describe("Initialization", ()=>{
        //since the employee had Id, and name
        it("should create an object with School", ()=>{
            const intern = new Intern('Sara', 10, 'Sara.pro@yahoo.com','Mission University');
            //use jest to expect the output to be any string, 
            //using the jest expect.any(constructor) to allow any input
            expect(intern.github).toEqual(expect.any(String));
        });
    });
});