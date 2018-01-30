const Promise = require('bluebird');
const moment = require('moment');

module.exports = function command(scope) {

    var toCall;
    var response = {};

    switch(scope.label) {
        case 'go-Away':
            var endTime = null
            scope.times.forEach(function(time) {
                if(time && time.start && time.start.date()) {
                    endTime = time.start.date().getTime()
                }
            })

            response.label = 'tell-see-yoo';
            toCall = gladys.modules.netatmo.commands.away({ 'endTime' : endTime/1000})

            return response
        break;
        
        default:
            toCall = Promise.reject(`no-command-detected`);
        break;
    }

    return toCall;
};