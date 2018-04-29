const commands = require('./commands/index')

module.exports = function checkMode(mode){
	if(mode === 'holidays') {
		commands.hg({ 'endTime' : null/1000})
	} else if(mode === 'out') {
		commands.away({ 'endTime' : null/1000})
	}
}