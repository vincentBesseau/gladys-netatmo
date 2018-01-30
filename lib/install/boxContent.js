var html = `
  `;
var footer = `
      <div style="
        background-color: white; color: black">
        <div class="row" style="
           font-size: 1.7em">
           <div class="col-xs-1"></div>
           <div class="col-xs-4 text-center" style="
              border: 1px solid white;">
              <div class="col-xs-12">
                 <p>{{ 'NETATMO_MEASURED' | translate }}</p>
              </div>
              <div class="col-xs-12 ng-binding">
                 {{vm.thermostat.temperature}}{{ 'NETATMO_UNITE' | translate }}
              </div>
           </div>
           <div class="col-xs-2"></div>
           <div class="col-xs-4 text-center" style="
              border: 1px solid white;">
              <div class="col-xs-12">
                 <p>{{ 'NETATMO_SETPOINT' | translate }}</p>
              </div>
              <div class="col-xs-12 ng-binding">
                 {{vm.thermostat.consigne}}{{ 'NETATMO_UNITE' | translate }}
              </div>
           </div>
        </div>
        <div class="row">
           <div class="col-xs-12 text-center">
              {{ 'NETATMO_ACTUAL_MODE' | translate }} : {{vm.thermostat.mode}}
           </div>
           <div class="col-xs-12 text-center">
              {{ 'NETATMO_CHANGE_MOD' | translate }} :
           </div>
           <form ng-submit="submit()">
              <div class="col-xs-12 text-center">
                 <select id="monselect" ng-options="mode.name for mode in vm.modes" ng-change="changedMod()" ng-model="modeselected"></select>
              </div>
              <div class="col-xd-12 text-center" ng-show="vm.showManual">
                 <input type="number" style="margin-top:10px;" ng-model="manualTemp" name="manualTemp" step="0.1" value="{{vm.thermostat.temperature}}" min="0" max="30" style="color:black;" />
              </div>
              <div class="col-xd-12 text-center" ng-show="vm.showButton" />
                 <button type="submit" style="margin-top:10px;" class="btn btn-primary">{{ 'NETATMO_UPDATE' | translate }}</button>
              </div>
           </form>
        </div>
      </div>
    `;
module.exports = {
  html: html,
  footer: footer
};