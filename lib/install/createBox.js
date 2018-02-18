module.exports = function createBox(){
	sails.log.debug('Début installation de la box');
	var box = { 
		"uuid": "bb23ec22-f16d-43da-a6c4-bfe48d835af4",
		"title": "Netatmo Thermostat info",
		"path": "views/boxs/netatmo.ejs",
		"view": "dashboard"
	}

	gladys.boxType.create(box);
	sails.log.debug('Fin installation de la box');
}