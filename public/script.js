var app = angular.module('myModule', []);

app.controller('myCtrl', function ($scope, $http){

$http({
  method: "GET",
  url: "/rupiKaur"
}).then(function(response) {
  console.log(response);
  $scope.poems = response
});
});
