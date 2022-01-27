//import the Intern constructor 
const Intern = require('../lib/Intern');

//making the new Intern object 
describe("Intern", ()=>{
    describe("Initialization", ()=>{
        //since the employee had Id, and name
        it("should create an object with School", ()=>{
            const intern = new Intern('Sara', 10, 'Sara.pro@yahoo.com','Mission University');
            //use jest to expect the output to be any string, 
            //using the jest expect.any(constructor) to allow any input
            expect(intern.school).toEqual(expect.any(String));
        });
        it("should create an object to get Intern's School", ()=>{
            const intern = new Intern('Sara', 10, 'Sara.pro@yahoo.com','Mission University');
            //using the getSchool method in the Intern constructor
            expect(intern.getSchool()).toEqual(expect.any(String));
        });
    });
});