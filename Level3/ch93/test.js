jest.mock('fs');
const fs = require('fs');
fs.readFileSync.mockReturnValue('hello');

test('fs mock', ()=>{
  expect(fs.readFileSync('a.txt')).toBe('hello');
});
