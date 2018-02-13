const netatmo = require('netatmo');
const auth = require('../auth');
const mode = require('../config/mode');
const queries = require('../queries');

module.exports = function updateData(){

	sails.log.info('Update Netatmo data !')

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
		
		// Get thermostats Data 
		// See docs: https://dev.netatmo.com/resources/technical/reference/thermostat/getthermostatsdata
		var options = {
		  device_id: '',
		};

		api.getThermostatsData()
	
		api.getThermostatsData(function(err, devices) {
			
			devices.forEach(function(device) {
				modules = device.modules
				modules.forEach(function(module) {

					gladys.utils.sql( 
						queries.getDeviceTypeId, 
						[ module._id, 'Batterie' ]
					)
					.then((row) => {
						gladys.deviceState.create( { 'value' : module.battery_percent , 'devicetype' : row[0].id })
					})

					gladys.utils.sql( 
						queries.getDeviceTypeId, 
						[ module._id, 'Température' ]
					)
					.then((row) => {
						gladys.deviceState.create( { 'value' : module.measured.temperature , 'devicetype' : row[0].id })
					})

					gladys.utils.sql( 
						queries.getDeviceTypeId, 
						[ module._id, 'Consigne' ]
					)
					.then((row) => {
						gladys.deviceState.create( { 'value' : module.measured.setpoint_temp , 'devicetype' : row[0].id })
					})

					gladys.utils.sql( 
						queries.getDeviceTypeId, 
						[ module._id, 'Mode' ]
					)
					.then((row) => {
						gladys.deviceState.create( { 'value' : mode[module.setpoint.setpoint_mode] , 'devicetype' : row[0].id })
					})
				})
			})		
		});
	});

}