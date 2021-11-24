const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager('Bob', 1, 'Bob.the.manager@gmail.com',12);
    expect(manager.name).toBe('Bob');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('Bob.the.manager@gmail.com');
    expect(manager.office).toEqual(expect.any(Number));
});
test('assigns role to manager', () => {
    const manager = new Manager('Bob', 1, 'Bob.the.manager@gmail.com',12);
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});