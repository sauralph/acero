'use strict';

/* Controllers */


function DashboardCtrl($scope,Novedades) {
	

$scope.Novedades = Novedades.query();

}
// DashboardCtrl.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
