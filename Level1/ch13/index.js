const EventEmitter = require('events');
const emitters = new EventEmitter();

function log1() { console.log('log1'); }
function log2() { console.log('log2'); }

emitters.on('event', log1);
emitters.on('event', log2);

emitters.removeListener('event', log2);
emitters.emit('event'); 