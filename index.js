const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

class CreateSite {
    constructor() {
    this.employeeArray = [];
    }
    addManager() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?'
            },
            {
                type: 'input',
                name: 'employeeId',
                message:  'What is your employee ID?'
            },
            {
                type: 'input',
                name:  'email',
                message: 'What is your email?'
            },
            {
                type: 'input',
                name: 'office',
                message: 'What is your office number?'
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to enter another employee?',
                default: false
            }
        ])
        .then(({ name, employeeId, email, office, confirmAddEmployee}) => {
            this.employeeArray.push(new Manager(name, employeeId, email, office));
            if(confirmAddEmployee) {
                return this.addEmployee();
            }
            else {
                console.log(this.employeeArray);
            }
        })
    };
    addEngineer() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?"
            },
            {
                type: 'input',
                name: 'employeeId',
                message:  "What is the engineer's ID?"
            },
            {
                type: 'input',
                name:  'email',
                message: "What is the engineer's email?"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's github username?"
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to enter another employee?',
                default: false
            }
        ])
        .then(({ name, employeeId, email, github, confirmAddEmployee}) => {
            this.employeeArray.push(new Engineer(name, employeeId, email, github));
            if(confirmAddEmployee) {
                return this.addEmployee();
            }
            else {
                console.log(this.employeeArray);
            }
        })
    }
    addIntern() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?"
            },
            {
                type: 'input',
                name: 'employeeId',
                message:  "What is the intern's ID?"
            },
            {
                type: 'input',
                name:  'email',
                message: "What is the intern's email?"
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school name?"
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to enter another employee?',
                default: false
            }
        ])
        .then(({ name, employeeId, email, school, confirmAddEmployee}) => {
            this.employeeArray.push(new Intern(name, employeeId, email, school));
            if(confirmAddEmployee) {
                return this.addEmployee();
            }
            else {
                console.log(this.employeeArray);
            }
        })
    }
    addEmployee() {
        inquirer
        .prompt(
            {
            type: 'list',
            message: 'What type of employee would you like to add?',
            name: 'employeeType',
            choices: ['Engineer', 'Intern', 'None']
            }
        )
        .then(({ employeeType }) => {
            if(employeeType === 'Engineer') {
                this.addEngineer();
            }
            else if (employeeType === 'Intern') {
                this.addIntern();
            }
            else {
                console.log('you have completed employee entry');
                console.log(this.employeeArray);
            }
        })
    }
}

new CreateSite().addManager();