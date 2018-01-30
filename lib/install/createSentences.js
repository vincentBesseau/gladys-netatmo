module.exports = function createSentences(){
	sails.log.debug('Début installation des sentences');
	var arraySentence = [{
	    'uuid': '3d9c3652-3111-43c8-be8d-6a8efa2ddceb',
		'text': 'Je ne rentre pas ce soir', 
		'label': 'go-Away',
		'status': 'approved',
		'service': 'netatmo',
		'language': 'fr'
	},
	{
	    'uuid': '840f38ea-8929-443a-9946-041acca08d9f',
		'text': 'Je rentre dans %TIME%', 
		'label': 'go-Away',
		'status': 'approved',
		'service': 'netatmo',
		'language': 'fr'
	},
	{
	    'uuid': '50480358-d5b1-4276-b542-d2bd875edc34',
		'text': 'Je serais absent aujourd\'hui', 
		'label': 'go-Away',
		'status': 'approved',
		'service': 'netatmo',
		'language': 'fr'
	},]

	var arrayAnswer = [{
	    'uuid': '82bf2440-c5e2-4c13-9c26-e5475d87038c',
		'text': 'Je viens de changer l\'info sur le thermostat',
		'label': 'tell-see-yoo',
		'needAnswer': 0,
		'language' : 'fr'
	}]

	arraySentence.forEach(function(Sentence) {
		gladys.sentence.create(Sentence)
	})

	arrayAnswer.forEach(function(Answer) {
		gladys.answer.create(Answer)
	})

	gladys.brain.trainNew()

	sails.log.debug('Fin installation des sentences');
}