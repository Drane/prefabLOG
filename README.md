prefabLOG: a *filterable* and *transparent* NodeJS logging facade
=================================================================

What's this library all about?
------------------------------
**prefabLOG** is a *filterable* and *transparent* logging library acting as a facade to other logging implementations


Features:
---------
- *transparent:* uncommenting a single line will just fallback to the default logging.

By default the standard *console.log*, *console.info*, *console.warn*, *console.error* will be overwritten, and removing the *require* will resolve in a clean fallback:
	
	//require('prefabLOG')('com:prefabsoft:controller:a');
	console.log('log test %s %d %j', 'string', 123, {foo:'bar'});
	console.info('info test %s %d %j', 'string', 123, {foo:'bar'});
	console.warn('warn test %s %d %j', 'string', 123, {foo:'bar'});
	console.error('error test %s %d %j', 'string', 123, {foo:'bar'});

- *filterable:* by default you only see the logging you want to see. 

Let's say our app.js is:	
	
	var a = require('prefabLOG')('logger:a');
	var b = require('prefabLOG')('logger:b');
	
	a.info('logger:a  info test %s %d %j', 'string', 123, {foo:'bar'});
	b.info('logger:b  info test %s %d %j', 'string', 123, {foo:'bar'});
	
Running "LOG=logger:* node app.js" will output both loggers:

	<info> logger:a  info test string 123 {"foo":"bar"}
	<info> logger:b  info test string 123 {"foo":"bar"}
	
While running "LOG=logger:a node app.js" will output only logger a:

	<info> logger:a  info test string 123 {"foo":"bar"}