
module.exports = function(sails) {
	
	const install = require('./lib/install');
	const initialize = require('./lib/initialize.js');
	const uninstall = require('./lib/uninstall')
	const commands = require('./lib/commands/index')
	const command = require('./lib/commands/command')
 
    return {
		install: install,
		initialize: initialize,
		uninstall: uninstall,
		commands: commands,
		command: command
    };
};