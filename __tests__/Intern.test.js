const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Alex', 3, 'Alex.the.intern@gmail.com', 'UW Madison');
    expect(intern.name).toBe('Alex');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('Alex.the.intern@gmail.com');
    expect(intern.school).toEqual('UW Madison');
});
test('assigns role to intern', () => {
    const intern = new Intern('Alex', 3, 'Alex.the.intern@gmail.com', 'UW Madison');
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});
test('gets school name', () => {
    const intern = new Intern('Alex', 3, 'Alex.the.intern@gmail.com', 'UW Madison');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});