
module.exports = function deleteBox(){

	sails.log.debug('Début désinstallation de la box');
	gladys.boxType.getAll()
	.then((boxes) => {
	    boxes.forEach(function(box) {
	        if(box.uuid == 'bb23ec22-f16d-43da-a6c4-bfe48d835af4' )
	        {
	            gladys.boxType.delete({'id' : box.id})
	        }
	    })
	})
	sails.log.debug('Fin désinstallation de la box');
}