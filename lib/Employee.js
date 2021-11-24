class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }
    getName() {
        return `${this.name}'s name is ${this.name}`;
    }
    getId() {
        return `${this.name}'s ID is ${this.id}`;
    }
    getEmail() {
        return `${this.name}'s email is ${this.email}`;
    }
    getRole() {
        return `${this.name}'s role is ${this.role}`;
    }
};

module.exports = Employee;