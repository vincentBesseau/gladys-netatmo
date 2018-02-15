# gladys-netatmo

## Installation

* Create an account on [netatmo](https://dev.netatmo.com/myaccount/)
* Log in on your [account](https://dev.netatmo.com/myaccount/) and create an app
* Add this module in Gladis
* Create this fours parameters on Gladys :
  * NETATMO_CLIENT_ID => value on Netatmo app
  * NETATMO_CLIENT_SECRET => value on Netatmo app
  * NETATMO_USERNAME => value used when you have create your account
  * NETATMO_PASSWORD => value used when you have create your account
* This step is optionnal :
  * Create this parameter on Gladys to change the default value (30 min) of Netatmo data update :
    * NETATMO_INTERVAL_UPDATE => value must be on minute format
* Restart Gladys

## Usage 

### With a script
Change this ```{slugName}``` by the slug name set before the installation

Change to away mode your thermostat :
```
gladys.modules.{slugName}.commands.away();
```

Change to manual mode your thermostat :
```
gladys.modules.{slugName}.commands.manual(19);
```

Change to program mode your thermostat :
```
gladys.modules.{slugName}.commands.program();
```

Change to frost-gard mode your thermostat :
```
gladys.modules.{slugName}.commands.hg();
```

Change to OFF mode your thermostat :
```
gladys.modules.{slugName}.commands.off();
```

Change to MAX mode your thermostat :
```
gladys.modules.{slugName}.commands.max();
```

**All of these six modes can be set with a end time by add a parameter like this** :

Change to away mode your thermostat for defined time :
```
gladys.modules.{slugName}.commands.away(TIMESTAMP);
```

### With your voice or telegram

* Launch brain training

Change to away mode your thermostat with this new label :
```
netatmo.go-Away
```

You can add an information of time as :
```
Je rentre dans 20 min
```
the thermostat will pas to away mode for 20 minutes

### With the box
![alt Box](https://github.com/vincentBesseau/gladys-netatmo/blob/master/medias/Capture%20d’écran%202018-01-30%20à%2016.27.47.png?raw=true)