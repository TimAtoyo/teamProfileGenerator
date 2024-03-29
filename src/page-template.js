// creates the team
const generateTeam = team => {

    // creates the manager html
    const generateManager = manager => {
        return `
        <div class="mb-3 col-12 col-md-3 col-lg-4 d-flex align-items-stretch justify-content-stretch ">
            <div class="card employee-card  align-items-stretch justify-content-stretch ">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item border-0 bg-transparent">ID: ${manager.getId()}</li>
                    <li class="list-group-item border-0 bg-transparent">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item border-0 bg-transparent">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
                </div>
        </div>
        `;
    };

    // creates the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="mb-3 col-12 col-md-3 col-lg-4 d-flex align-items-stretch justify-content-stretch ">
            <div class="card employee-card align-items-stretch justify-content-stretch ">
                <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
                </div>
                <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item border-0 bg-transparent">ID: ${engineer.getId()}</li>
                <li class="list-group-item border-0 bg-transparent">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item border-0 bg-transparent">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
                </div>
            </div>
        </div>
        `;
    };

    // creates the html for interns
    const generateIntern = intern => {
        return `
        <div class="mb-3 col-12 col-md-3 col-lg-4  d-flex align-items-stretch justify-content-stretch ">
            <div class="card employee-card align-items-stretch justify-content-stretch ">
                <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
                </div>
                <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item border-0 bg-transparent">ID: ${intern.getId()}</li>
                <li class="list-group-item border-0 bg-transparent">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item border-0 bg-transparent">School: ${intern.getSchool()}</li>
            </ul>
                </div>
            </div>
        </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// exports function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./styles.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            
                ${generateTeam(team)}
            
        </div>
    </div>
</body>
</html>
    `;
};