const boxContent = require('./boxContent');

module.exports = function createBox(){
	sails.log.debug('Début installation de la box');
	var box = { 
		"uuid": "bb23ec22-f16d-43da-a6c4-bfe48d835af4",
		"title": "Netatmo Thermostat info",
		"ngcontroller": "netatmoCtrl as vm",
		"html": boxContent.html,
		"footer": boxContent.footer,
		"icon": "glyphicon glyphicon-fire",
		"type": "box box-solid bg-blue-gradient",
		"view": "dashboard"
	}

	gladys.boxType.create(box);
	sails.log.debug('Fin installation de la box');
}