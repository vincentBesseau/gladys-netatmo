module.exports = {
	getDeviceTypeId:`
		SELECT id 
		FROM devicetype 
		WHERE identifier = ?
		And type = ?;
	`,
	deleteSentence:`
	DELETE FROM sentence WHERE service = ? ;
	`,
	deleteAnswer:`
	DELETE FROM answer WHERE uuid = ? ;
	`
}