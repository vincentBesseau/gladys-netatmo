const commands = require('./lib/commands/index')

module.exports = function checkMode(mode){
	if(mode === 'holidays') {
		commands.hg()
	} else if(mode === 'out') {
		commands.away()
	}
}