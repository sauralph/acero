'use strict';


// Declare app level module which depends on filters, and services
angular.module('acero', ['acero.services']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/general', {templateUrl: 'partials/general.html', controller: DashboardCtrl});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/general'});
  }]);
