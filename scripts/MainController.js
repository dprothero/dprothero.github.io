(function() {

  var app = angular.module("resumeApp");

  var MainController = function($scope) {
    $scope.$on("currentViewChanged", function (event, newCurrentView) {
      $scope.currentView = newCurrentView;
    });
  };

  app.controller("MainController", MainController);

}());