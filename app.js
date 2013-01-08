require('./lib/prefabLOG.js')();
// require('./lib/prefabLOG.js')({logger: null});

// console.log(console);

console.log('log test %s %d %j', 'string', 123, {foo:'bar'});
console.info('info test %s %d %j', 'string', 123, {foo:'bar'});
console.warn('warn test %s %d %j', 'string', 123, {foo:'bar'});
console.error('error test %s %d %j', 'string', 123, {foo:'bar'});
// console.trace('trace label');

