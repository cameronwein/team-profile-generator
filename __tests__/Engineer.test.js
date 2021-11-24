const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Ryan', 2, 'Ryan.the.engineer@gmail.com', 'RyanIpsum');
    expect(engineer.name).toBe('Ryan');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('Ryan.the.engineer@gmail.com');
    expect(engineer.github).toEqual('RyanIpsum');
});
test('assigns role to engineer', () => {
    const engineer = new Engineer('Ryan', 2, 'Ryan.the.engineer@gmail.com', 'RyanIpsum');
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});
test('gets github name', () => {
    const engineer = new Engineer('Ryan', 2, 'Ryan.the.engineer@gmail.com', 'RyanIpsum');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});