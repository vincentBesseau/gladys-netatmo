const auth = require('./auth')
const netatmoSearch = require('./install/netatmoSearch')
const createBox = require('./install/createBox');
const createSentences = require('./install/createSentences');

module.exports = function install(){

	var promises = [
		gladys.param.getValue('NETATMO_CLIENT_ID'),
		gladys.param.getValue('NETATMO_CLIENT_SECRET'),
		gladys.param.getValue('NETATMO_USERNAME'),
		gladys.param.getValue('NETATMO_PASSWORD')
	];
	
	return Promise.all(promises)
	.then ((array) => {
		auth.client_id = array[0]
		auth.client_secret = array[1]
		auth.username = array[2]
		auth.password = array[3]

		createBox()

		netatmoSearch()

		createSentences()

	});

}