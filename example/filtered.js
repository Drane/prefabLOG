/**
Running "LOG=logger:* node app.js" will output both loggers:

	<info> logger:a  info test string 123 {"foo":"bar"}
	<info> logger:b  info test string 123 {"foo":"bar"}
	
While running "LOG=logger:a node app.js" will output only logger a:

	<info> logger:a  info test string 123 {"foo":"bar"}
*/
var a = require('../')('logger:a');
var b = require('../')('logger:b');

a.info('logger:a  info test %s %d %j', 'string', 123, {foo:'bar'});
b.info('logger:b  info test %s %d %j', 'string', 123, {foo:'bar'});
