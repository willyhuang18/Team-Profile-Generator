//creating the card to indicate what role are creating card for

const { generate } = require("escodegen");

//creating the card container for html inside JS
const gManager = function (manager) {
    return `
    <div class="col">
        <div class="card">
            <div class="card-header">
                <h1>${manager.name}</h1> 
                <h2>Manager</h2>
            </div>
            <div class="card-body">
                <p>ID:${manager.id}</p>
                <p>Email:${manager.email}<a href="mailto:${manager.email}"></a></p>
                <p>Office Number:${manager.officeNumber}</p>
            </div>
    </div>
    `;
}

//create the Engineer card
const gEngineer = function (engineer) {
    return `
    <div class="col">
        <div class="card">
            <div class="card-header">
                <h1>${engineer.name}</h1> 
                <h2>Manager</h2>
            </div>
            <div class="card-body">
                <p>ID:${engineer.id}</p>
                <p>Email:${engineer.email}<a href="mailto:${engineer.email}"></a></p>
                <p>Github:${engineer.github}<a href="http://github.com/${engineer.email}"></a></p>
            </div>
    </div>
    `;
}

//create the Intern card
const gIntern = function (intern) {
    return `
    <div class="col">
        <div class="card">
            <div class="card-header">
                <h1>${intern.name}</h1> 
                <h2>Manager</h2>
            </div>
            <div class="card-body">
                <p>ID:${intern.id}</p>
                <p>Email:${intern.email}<a href="mailto:${intern.email}"></a></p>
                <p>School :${intern.school}</p>
            </div>
    </div>
    `;
}

//putting everything together
const generateHTML = function (info){
    //create a empty array for the checking what character the user input
    const card = [];

    //give for loop to loop for the input to check what character
    for (let i = 0; i < info.length; i++) {
        const cardInfo = info[i];
        const character = cardInfo.getCharacter();

        //declare condition to check what character entering 
        switch(character){
            case 'Manager':
                const manager = gManager(cardInfo);
                //push the card info into array
                card.push(manager);
                console.log(card);
                break;
            case 'Engineer':
                const engineer = gEngineer(cardInfo);
                card.push(engineer);
                console.log(card)
                break;
            case 'Intern':
                const intern = gIntern(cardInfo);
                card.push(intern);
                console.log(card);
                
        }
    }
    //give a variable to contain the new Array
    const employeeInfo = card.join('');
    
}

//create the starting HTML line
const HTMLpage = (employeeData)=>{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team-Profile-Generator</title>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital@1&family=Luxurious+Roman&family=Roboto:ital,wght@1,300&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./styles.css"/>
    </head>
    <body>
        <div class="jumbotron text-center p-4 container-fluid" style="background-color:#389bd4 ;color: #fff;">
            <h1> <i class="fas fa-laptop-code"></i><strong>My Team</strong></h1>
        </div>
        <div class="container">
            <div class="row ">
            ${employeeData}
            </div>
        </div>
    </body>
    </html>
        `
}
//declare module exported to use in other files
module.exports = generateHTML;