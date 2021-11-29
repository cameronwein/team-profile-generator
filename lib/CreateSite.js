const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const pageTemplate = require('../src/page-template');
const fs = require('fs');

class CreateSite {
    constructor() {
    this.employeeArray = [];
    this.takenIds = [];
    }
    
    addManager() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
                validate: answer => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: 'input',
                name: 'employeeId',
                message:  'What is your employee ID?',
                validate: answer => {
                    const pass = answer.match(
                      /^[1-9]\d*$/
                    );
                    if (pass) {
                      if (this.takenIds.includes(answer)) {
                        return "This ID is already taken. Please enter a different number.";
                      } else {
                        return true;
                      }
          
                    }
                    return "Please enter a positive number greater than zero.";
                }
            },
            {
                type: 'input',
                name:  'email',
                message: 'What is your email?',
                validate: answer => {
                    const pass = answer.match(
                      /\S+@\S+\.\S+/
                    );
                    if (pass) {
                      return true;
                    }
                    return "Please enter a valid email address.";
                }
            },
            {
                type: 'input',
                name: 'office',
                message: 'What is your office number?',
                validate: answer => {
                    const pass = answer.match(
                      /^[1-9]\d*$/
                    );
                    if (pass) {
                      return true;
                    }
                    return "Please enter a positive number greater than zero.";
                }
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
            this.takenIds.push(employeeId);
            if(confirmAddEmployee) {
                return this.addEmployee();
            }
            else {
                return this.createHTML(this.employeeArray);
            }
        })
    };
    addEngineer() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?",
                validate: answer => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: 'input',
                name: 'employeeId',
                message:  "What is the engineer's ID?",
                validate: answer => {
                    const pass = answer.match(
                      /^[1-9]\d*$/
                    );
                    if (pass) {
                      if (this.takenIds.includes(answer)) {
                        return "This ID is already taken. Please enter a different number.";
                      } else {
                        return true;
                      }
          
                    }
                    return "Please enter a positive number greater than zero.";
                }
            },
            {
                type: 'input',
                name:  'email',
                message: "What is the engineer's email?",
                validate: answer => {
                    const pass = answer.match(
                      /\S+@\S+\.\S+/
                    );
                    if (pass) {
                      return true;
                    }
                    return "Please enter a valid email address.";
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's github username?",
                validate: answer => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter at least one character.";
                }
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
            this.takenIds.push(employeeId);
            if(confirmAddEmployee) {
                return this.addEmployee();
            }
            else {
                return this.createHTML(this.employeeArray);
            }
        })
    }
    addIntern() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?",
                validate: answer => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: 'input',
                name: 'employeeId',
                message:  "What is the intern's ID?",
                validate: answer => {
                    const pass = answer.match(
                      /^[1-9]\d*$/
                    );
                    if (pass) {
                      if (this.takenIds.includes(answer)) {
                        return "This ID is already taken. Please enter a different number.";
                      } else {
                        return true;
                      }
          
                    }
                    return "Please enter a positive number greater than zero.";
                }
            },
            {
                type: 'input',
                name:  'email',
                message: "What is the intern's email?",
                validate: answer => {
                    const pass = answer.match(
                      /\S+@\S+\.\S+/
                    );
                    if (pass) {
                      return true;
                    }
                    return "Please enter a valid email address.";
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school name?",
                validate: answer => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter at least one character.";
                }
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
            this.takenIds.push(employeeId);
            if(confirmAddEmployee) {
                return this.addEmployee();
            }
            else {
                return this.createHTML(this.employeeArray);
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
                return this.createHTML(this.employeeArray);
            }
        })
    }
    createHTML(employeeData) {
        const html = pageTemplate.generatePage(employeeData);
        return this.writeFile(html);
    }
    writeFile(fileContent){
        return new Promise((resolve, reject) => {
            fs.writeFile('./dist/index.html', fileContent, err => {
              // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
              if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
              }
        
              // if everything went well, resolve the Promise and send the successful data to the `.then()` method
              resolve({
                ok: true,
                message: 'File created!'
              });
            });
        });
    }; 
}

module.exports = CreateSite;