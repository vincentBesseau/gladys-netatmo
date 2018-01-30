/** 
  * Gladys Project
  * http://gladysproject.com
  * Software under licence Creative Commons 3.0 France 
  * http://creativecommons.org/licenses/by-nc-sa/3.0/fr/
  * You may not use this software for commercial purposes.
  * @author :: Vincent Besseau
  */

const commands = require('../lib/commands/index')
  
module.exports = {

  /**
  * Execute commande
  */
  away: function(req, res){
    sails.log.debug('json from box')
    sails.log.debug(req.body)
    return commands.away(req.body);
  },
  manual: function(req, res){
    sails.log.debug('json from box')
    sails.log.debug(req.body)
    return commands.manual(req.body);
  },
  off: function(req, res){
    sails.log.debug('json from box')
    sails.log.debug(req.body)
    return commands.off(req.body);
  },
  max: function(req, res){
    sails.log.debug('json from box')
    sails.log.debug(req.body)
    return commands.max(req.body);
  },
  program: function(req, res){
    sails.log.debug('json from box')
    sails.log.debug(req.body)
    return commands.program(req.body);
  },
  hg: function(req, res){
    sails.log.debug('json from box')
    sails.log.debug(req.body)
    return commands.hg(req.body);
  }
}