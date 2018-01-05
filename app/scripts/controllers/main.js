'use strict';

/**
 * @ngdoc function
 * @name angularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsApp
 */

var app = angular.module("angularjsApp", []);

app.controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


app.controller("exempleCtrl", function($scope) {
    $scope.name = "World"
});

app.controller("BillCtrl", function($scope){
    $scope.articles = [{"name": "T�l�phone sans-fil", "quantity": 1, "price": "29.99"}, {"name": "Chargeur iPhone5", "quantity": 1, "price": "29.99"}];

    $scope.total = function(){
        var total = 0;
        for(var i = 0; i < $scope.articles.length; i++){
            total += $scope.articles[i].price * $scope.articles[i].quantity;
        }
        return total;
    };

    function calculateDiscount(newValue, oldValue, scope){
        $scope.discount = (newValue > 100) ? newValue * 0.10 : 0;
    };

    $scope.finalTotal = function(){
        return $scope.total() - $scope.discount;
    };

    $scope.$watch($scope.total, calculateDiscount);
});