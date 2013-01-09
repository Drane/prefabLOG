require('./lib/prefabLOG.js')('filtered');
// require('./lib/prefabLOG.js')({filterName: 'filtered', filter});
// require('./lib/prefabLOG.js')({logger: null});

// console.log(console);

console.log('log test %s %d %j', 'string', 123, {foo:'bar'});
console.info('info test %s %d %j', 'string', 123, {foo:'bar'});
console.warn('warn test %s %d %j', 'string', 123, {foo:'bar'});
console.error('error test %s %d %j', 'string', 123, {foo:'bar'});
// console.trace('trace label');

var a = require('./lib/prefabLOG.js')('logger:a');
var b = require('./lib/prefabLOG.js')('logger:b');

a.info('logger:a  info test %s %d %j', 'string', 123, {foo:'bar'});
b.info('logger:b  info test %s %d %j', 'string', 123, {foo:'bar'});
