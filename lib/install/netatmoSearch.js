const netatmo = require('netatmo');
const auth = require('../auth');
const createDevices = require('./createDevices');
const commands = require('../commands/index');


module.exports = function netatmoSearch(){
	var api = new netatmo(auth);

	// Get thermostats Data 
	// See docs: https://dev.netatmo.com/resources/technical/reference/thermostat/getthermostatsdata
	var options = {
	  device_id: '',
	};

	api.getThermostatsData(function(err, devices) {
		sails.log.debug('Début de la création du device Netatmo');
		devices.forEach(function(device) {
			createDevices(device)
		})
		sails.log.debug('Mise à jour des données')
		commands.updateData()
		sails.log.debug('Fin de la création du device Netatmo');
	});
}