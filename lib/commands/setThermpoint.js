const netatmo = require('netatmo');
const auth = require('../auth');

module.exports = function setThermpoint(params, mode, endTime){

	var promises = [
		gladys.param.getValue('NETATMO_CLIENT_ID'),
		gladys.param.getValue('NETATMO_CLIENT_SECRET'),
		gladys.param.getValue('NETATMO_USERNAME'),
		gladys.param.getValue('NETATMO_PASSWORD')
	];

	return Promise.all(promises)
	.then ((array) => {
		auth.client_id = array[0];
		auth.client_secret = array[1];
		auth.username = array[2];
		auth.password = array[3];
		
		var api = new netatmo(auth);

		// Set Thermpoint 
		// See docs: https://dev.netatmo.com/dev/resources/technical/reference/thermostat/setthermpoint 
		// setpoint_mode : program, away, hg, manual, off, max https://dev.netatmo.com/resources/technical/reference/thermostat#mode
		var options = {
		  device_id: params.deviceType.identifier,
		  module_id: params.deviceType.deviceTypeIdentifier,
		  setpoint_mode: mode,
		  setpoint_endtime: endTime
		};

		if(typeof params.state !== 'undefined') {
			options.setpoint_temp = params.state.value
		}
		sails.log.debug('setThermpoint to netatmo') 
		sails.log.debug(options)

		api.setThermpoint(options, function(err, status) {
		  console.log(status);
		});
	});
}