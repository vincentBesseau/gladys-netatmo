const setThermpoint = require('./setThermpoint');

module.exports = function manual(params){

	gladys.device.getByService({'service':'netatmo'})
	.then((devices) => {
	    var identifier = devices[0].identifier
	    gladys.deviceType.getByDevice(devices[0])
	    .then((devicetypes) => {
	       var deviceTypeIdentifier = devicetypes[0].identifier
	       setThermpoint(
	       		{
					'deviceType': {
						'identifier' : identifier,
						'deviceTypeIdentifier' : deviceTypeIdentifier
					},
					'state' : {
						'value' : params.state
					}
				},
				'manual',
				params.endTime
			)
	    })
	})
}