/**
 * Routes rules
 * @doc http://sailsjs.org/documentation/concepts/routes
 */

module.exports.routes = {
  'post /module/netatmo/away': 'NetatmoController.away',
  'post /module/netatmo/off': 'NetatmoController.off',
  'post /module/netatmo/max': 'NetatmoController.max',
  'post /module/netatmo/program': 'NetatmoController.program',
  'post /module/netatmo/manual': 'NetatmoController.manual',
  'post /module/netatmo/hg': 'NetatmoController.hg'
}