'use strict';

/**
 * @ngdoc overview
 * @name codeArcadeApp
 * @description
 * # codeArcadeApp
 *
 * Main module of the application.
 */
angular
  .module('codeArcadeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/tetris', {
        templateUrl: 'views/tetris.html',
        controller: 'TetrisCtrl',
        controllerAs: 'tetris'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
