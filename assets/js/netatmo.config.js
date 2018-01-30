var translationsEN = {
  NETATMO_MEASURED: 'Temperature',
  NETATMO_UNITE: '°F',
  NETATMO_SETPOINT: 'Set point',
  NETATMO_ACTUAL_MODE: 'Actual mode',
  NETATMO_CHANGE_MOD: 'Price per month',
  NETATMO_UPDATE: 'Update'
};
var translationsFR = {
  NETATMO_MEASURED: 'Température',
  NETATMO_UNITE: '°C',
  NETATMO_SETPOINT: 'Consigne',
  NETATMO_ACTUAL_MODE: 'Mode actuel',
  NETATMO_CHANGE_MOD: 'Changement de mode',
  NETATMO_UPDATE: 'Modifier'
};

angular
.module('gladys')
.config(['$translateProvider', function ($translateProvider) {
  // add translation table
  $translateProvider.translations('en', translationsFR);
  $translateProvider.translations('en', translationsEN);
}]);