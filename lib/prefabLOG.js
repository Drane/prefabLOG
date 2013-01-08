// The main log class that requires a prefabLOGGER

// by [Jochen Szostek](http://prefabsoft.com/)

/**
 * NEEDS DEBUG LIKE FUNCTIONALITY TO FILTE OUTPUT
 * NEEDS TO COUCHDB LOGGING
 */

console.log('in prefabLOG');
var prefabLOG;
var _ = require('underscore');

module.exports = exports = prefabLOG = function prefabLOG_module(opts) {
	var cfg = _.extend({
		overrideConsole : true,
		logger : require('./prefabDEFAULTLOGGER.js')(),
		exp : {
			//we export the orginal console so it can also be made available
			originalConsole : {
				log : console.log,
				info : console.info,
				warn : console.warn,
				error : console.error,
				dir : console.dir,
				time : console.time,
				timeEnd : console.timeEnd,
				trace : console.trace,
				assert : console.assert
			}
		}
	}, opts);

	function overrideConsole() {
		console.log('in overrideConsole');

		if (!cfg.logger) {
			console.log('cfg.logger null...leaving console logging to default');
		} else {
			var name = cfg.logger.name||'no name';
			console.log('cfg.logger found (' + name + ')... and using it');
			//console.log('cfg.logger',cfg.logger);

			_.map(cfg.logger, function(value, key) {
				//console.log('key', key, 'value', value);
				if (key != 'name')
					console[key] = value;
			});

		}
	}


	cfg.overrideConsole && overrideConsole();

	return cfg.exp;
};
