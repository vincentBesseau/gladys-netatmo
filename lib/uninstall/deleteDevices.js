const Promise = require('bluebird');

module.exports = function deleteDevices(){
	sails.log.debug('Début désinstallation du device');
	gladys.device.getByService({'service':'netatmo'})
	.then((devices) => {
		devices.forEach(function(device) {
			gladys.device.delete(device)
		})
	})
	sails.log.debug('Fin désinstallation du device');
}