'use strict';

/**
 * @ngdoc function
 * @name codeArcadeApp.controller:PlaytetrisCtrl
 * @description
 * # PlaytetrisCtrl
 * Controller of the codeArcadeApp
 */
angular.module('codeArcadeApp')
  .controller('PlaytetrisCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.allowDrop = function(ev) {
      ev.preventDefault();
    }

    this.drag = function(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    }

    this.drop = function(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
    }
  });
