(function() {

  var app = angular.module("resumeApp");

  var ResumeController = function($rootScope, $scope, $route, keywordData) {
    // Split the keywords array up into 
    // rows of 7 columns each
    $scope.keywordRows = [];
    var a = keywordData.keywords.slice(0);
    while(a.length) {
      $scope.keywordRows.push(a.splice(0,7));
    }    

    // Split the keywords array up into 
    // rows of 3 columns each
    $scope.keywordRowsXs = [];
    a = keywordData.keywords.slice(0);
    while(a.length) {
      $scope.keywordRowsXs.push(a.splice(0,3));
    }    
  };

  app.controller("ResumeController", ResumeController);

}());