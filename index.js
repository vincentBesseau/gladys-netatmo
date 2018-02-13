
module.exports = function(sails) {
	
	const install = require('./lib/install');
	const initialize = require('./lib/initialize.js');
	const uninstall = require('./lib/uninstall')
	const commands = require('./lib/commands/index')
	const command = require('./lib/commands/command')

	gladys.on('ready', function() {
		var defaultInterval = 30
		var interval = defaultInterval
		gladys.param.getValue('NETATMO_INTERVAL_UPDATE')
	    .then((intervalUser) => {
	        return intervalUser;
	    })
	    .catch(() => {
	        return 30;
	    })
	    .then((interval) => {
			setInterval(function () {
				sails.log.info('Update Netatmo data !')
				commands.updateData()
			}, interval*60000)
	    })
	})
 
    return {
		install: install,
		initialize: initialize,
		uninstall: uninstall,
		commands: commands,
		command: command
    };
};