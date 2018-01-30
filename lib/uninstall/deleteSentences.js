const queries = require('../queries');

module.exports = function deleteSentece(){
	
	sails.log.debug('Début désinstallation des sentences');
	gladys.utils.sql( 
		queries.deleteSentence, 
		[ 'netatmo' ]
	)

	gladys.utils.sql( 
		queries.deleteAnswer, 
		[ '82bf2440-c5e2-4c13-9c26-e5475d87038c' ]
	)

	gladys.brain.trainNew()

	sails.log.debug('Fin désinstallation des sentences');
}