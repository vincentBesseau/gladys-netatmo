
module.exports = function(sails) {
	
	const install = require('./lib/install');
	const initialize = require('./lib/initialize.js');
	const uninstall = require('./lib/uninstall')
	const commands = require('./lib/commands/index')
	const command = require('./lib/commands/command')
	const checkMode = require('./lib/checkMode')

	gladys.on('ready', function() {
		gladys.param.getValue('NETATMO_INTERVAL_UPDATE')
	    .then((intervalUser) => {
	        return intervalUser;
	    })
	    .catch(() => {
	        return 30;
	    })
	    .then((interval) => {
			setInterval(function () {
				gladys.house.get().then((houses) => {
					gladys.mode.getByHouse({id:houses[0].id}).then((mode) => {
						sails.log.info('Check home mode !')
						checkMode(mode.value)
					})
				})
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