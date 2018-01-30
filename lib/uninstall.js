const deleteDevices = require('./uninstall/deleteDevices')
const deleteBox = require('./uninstall/deleteBox')
const deleteSentences = require('./uninstall/deleteSentences')

module.exports = function install(){

	deleteDevices()

	deleteBox()
	
	deleteSentences()
	
}