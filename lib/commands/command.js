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

        case 'program':
            var endTime = null
            scope.times.forEach(function(time) {
                if(time && time.start && time.start.date()) {
                    endTime = time.start.date().getTime()
                }
            })

            response.label = 'tell-see-yoo';
            toCall = gladys.modules.netatmo.commands.program({ 'endTime' : endTime/1000})

            return response
        break;

        case 'hg':
            var endTime = null
            scope.times.forEach(function(time) {
                if(time && time.start && time.start.date()) {
                    endTime = time.start.date().getTime()
                }
            })

            response.label = 'tell-see-yoo';
            toCall = gladys.modules.netatmo.commands.hg({ 'endTime' : endTime/1000})

            return response
        break;

        case 'off':
            var endTime = null
            scope.times.forEach(function(time) {
                if(time && time.start && time.start.date()) {
                    endTime = time.start.date().getTime()
                }
            })

            response.label = 'tell-see-yoo';
            toCall = gladys.modules.netatmo.commands.off({ 'endTime' : endTime/1000})

            return response
        break;

        case 'max':
            var endTime = null
            scope.times.forEach(function(time) {
                if(time && time.start && time.start.date()) {
                    endTime = time.start.date().getTime()
                }
            })

            response.label = 'tell-see-yoo';
            toCall = gladys.modules.netatmo.commands.max({ 'endTime' : endTime/1000})

            return response
        break;
        
        default:
            toCall = Promise.reject(`no-command-detected`);
        break;
    }

    return toCall;
};