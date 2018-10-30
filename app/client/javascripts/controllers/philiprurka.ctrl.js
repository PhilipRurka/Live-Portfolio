'use strict';
app.controller('philipRurkaController',
function($rootScope, $state) {
  /*****************************************/
  /********** ROOTSCOPE VARIABLES **********/
  /*****************************************/
  $rootScope.navOptions = ['home', 'projects'];

  /************************************/
  /*********** INIT FUNCTION **********/
  /************************************/


  /*******************************/
  /*********** WATCHERS **********/
  /*******************************/


  /*************************************/
  /********** SCOPE FUNCTIONS **********/
  /*************************************/
  $rootScope.$goToState = function(option) {
    $rootScope.currentState = option;
    $state.go(option);
  }

});
