'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
// angular.module('myApp.services', []).
//   value('version', '0.1');

//http://localhost/~eze/cakephp/app/acero/index.php/novedades.json
angular.module('acero.services', ['ngResource']).
    factory('Novedades', function($resource){
  		// return $resource('http://localhost/~eze/cakephp/app/acero/index.php/novedades.json');
  		return $resource('http://www.example.com/~eze/cakephp/app/acero/index.php/novedades.json');

});

