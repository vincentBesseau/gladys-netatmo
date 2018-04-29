const netatmo = require('netatmo');
const auth = require('../auth');
const createThermostatDevices = require('./createThermostatDevices');
const createWeatherDevices = require('./createWeatherDevices');
const commands = require('../commands/index');


module.exports = function netatmoSearch(){
	var api = new netatmo(auth);

	// Get thermostats Data 
	// See docs: https://dev.netatmo.com/resources/technical/reference/thermostat/getthermostatsdata
	var options = {
	  device_id: '',
	};

	api.getThermostatsData(function(err, devices) {
		sails.log.debug('Début de la création du device Netatmo thermostat');
		devices.forEach(function(device) {
			createThermostatDevices(device)
		})
		sails.log.debug('Mise à jour des données')
		commands.updateData()
		sails.log.debug('Fin de la création du device Netatmo thermostat');
	});

	api.getStationsData(function(err, devices) {
		sails.log.debug('Début de la création du device Netatmo weather');
		devices.forEach(function(device) {
			createWeatherDevices(device)
		})
		sails.log.debug('Fin de la création du device Netatmo weather');	
	});
}