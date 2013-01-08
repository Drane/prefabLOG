console.log('in prefabDEFAULTLOGGER');
var prefabLOGGER;
var _ = require('underscore');
var util = require('util');

module.exports = exports = prefabDEFAULTLOGGER = function prefabDEFAULTLOGGER_module(opts) {
	var cfg = _.extend({
		exp : {
			name: 'prefabDEFAULTLOGGER'
		}
	}, opts);

	function log(){
		process.stdout.write('<log> ' + util.format.apply(util.format, arguments) + '\n');
	}

	function info(){
		process.stdout.write('<info> ' + util.format.apply(util.format, arguments) + '\n');
	}

	function warn(){
		process.stdout.write('<warn> ' + util.format.apply(util.format, arguments) + '\n');
	}

	function error(){
		process.stdout.write('<error> ' + util.format.apply(util.format, arguments) + '\n');
	}
	
	cfg.exp.log = log;
	cfg.exp.info = info;
	cfg.exp.warn = warn;
	cfg.exp.error = error;

	return cfg.exp;
};