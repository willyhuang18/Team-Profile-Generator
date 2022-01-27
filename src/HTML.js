//creating the card to indicate what role are creating card for
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
        
    }
}