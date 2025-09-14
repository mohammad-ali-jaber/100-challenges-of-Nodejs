const { URL } = require('url');
const u = new URL('https://example.com/api?x=10&y=test');
console.log(u.searchParams.get('x')); 
console.log(u.searchParams.get('y')); 