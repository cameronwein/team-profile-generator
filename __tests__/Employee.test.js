const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Bob', 1, 'Bob.the.manager@gmail.com');
    expect(employee.name).toBe('Bob');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('Bob.the.manager@gmail.com');
});

test("gets employee name", ()=> {
    const employee = new Employee('Bob', 1, 'Bob.the.manager@gmail.com');
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test("gets employee id", ()=> {
    const employee = new Employee('Bob', 1, 'Bob.the.manager@gmail.com');
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test("gets employee name", ()=> {
    const employee = new Employee('Bob', 1, 'Bob.the.manager@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
test("gets employee role", ()=> {
    const employee = new Employee('Bob', 1, 'Bob.the.manager@gmail.com');
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});