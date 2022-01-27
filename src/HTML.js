//creating the card container for html inside JS
const generateManager = function (manager) {
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