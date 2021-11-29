const generateEmployee = employeeArray => {
    return `
    ${employeeArray
        .filter(employee => employee.role === 'Manager')
        .map(({ name, id, email, role, office }) => {
            return `
                <div class="card m-3">
                    <div class="card-header bg-primary">
                        <h2 class="employee-name">${name}</h2>
                        <h3 class="employee-role"><i class="fas fa-mug-hot"></i>${role}</h3>
                    </div>
                    <div p-3>
                        <ul class="employee-info list-group list-group-flush">
                            <li class="list-group-item">Employee ID: ${id}</li>
                            <li class="list-group-item">Email:
                                <a href="mailto:${email}">${email}</a>
                            </li>
                            <li class="list-group-item">Office: ${office}</li>
                        </ul>
                    </div>
                </div>
            `
        })
        .join('')}
    ${employeeArray
        .filter(employee => employee.role === 'Engineer')
        .map(({ name, id, email, role, github }) => {
            return `
                <div class="card m-3">
                    <div class="card-header bg-primary">
                        <h2 class="employee-name">${name}</h2>
                        <h3 class="employee-role"><i class="fas fa-glasses"></i>${role}</h3>
                    </div>
                    <div p-3>
                        <ul class="employee-info list-group list-group-flush">
                            <li class="list-group-item">Employee ID: ${id}</li>
                            <li class="list-group-item">Email:
                                <a href="mailto:${email}">${email}</a>
                            </li>
                            <li class="list-group-item">Github:
                                <a href="https://github.com/${github}">${github}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                `
        })
        .join('')}
    ${employeeArray
        .filter(employee => employee.role === 'Intern')
        .map(({ name, id, email, role, school }) => {
            return `
                <div class="card m-3">
                <div class="card-header bg-primary">
                    <h2 class="employee-name">${name}</h2>
                    <h3 class="employee-role"><i class="fas fa-user-graduate"></i>${role}</h3>
                </div>
                <div p-3>
                    <ul class="employee-info list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${id}</li>
                        <li class="list-group-item">Email:
                            <a href="mailto:${email}">${email}</a>
                        </li>
                        <li class="list-group-item">School: ${school}</li>
                    </ul>
                </div>
            </div>
            `
        })
        .join('')}
    `
};

const generatePage = employeeData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Employee Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" >
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../src/style.css">
    </head>
  
    <body>
        <header>
            My Team
        </header>
        <main class="row">
            <div class="container d-flex justify-content-around m-auto flex-wrap">
                ${generateEmployee(employeeData)}
            </div>    
        </main>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script> 
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </body>
    </html>
    `;
};

module.exports = {generatePage}