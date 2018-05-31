'use strict';
/************************/
/******** MODULE ********/
/************************/
var app = angular.module('philipRurka', ['ui.router', 'ngResource']);


/************************/
/******** CONFIG ********/
/************************/
app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider) {
  $compileProvider.debugInfoEnabled(false); // Remove the debugger information in the HTML
  $locationProvider.html5Mode(true); // Normalizes URL

  // Routes
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/partials/home.html',
      controller: 'homeController',
    })
    .state('projects', {
      url: '/projects',
      templateUrl: '/partials/projects.html',
      controller: 'projectsController',
    })

    $urlRouterProvider.otherwise('/'); // Default URL
});


/*************************/
/********** RUN **********/
/*************************/
app.run(function($rootScope, $timeout) {

  // $rootScope.$on('$stateChangeSuccess', function(event, toState) {});

});
