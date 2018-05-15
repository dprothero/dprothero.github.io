/* global angular */
(function() {
  "use strict";

  var app = angular.module("resumeApp", ["ngRoute"]);

  app.config(function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "resume-root.html",
        controller: "ResumeController"
      })
      .when("/bio", {
        templateUrl: "bio.html",
        controller: "ResumeController"
      })
      .otherwise({
        redirectTo: "/"
      });
  });

  // Scrolling to the jobs from dropdown choices
  app.run(function($rootScope, $location, $anchorScroll, 
                   $route, $routeParams, $timeout) {
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
      $rootScope.$broadcast("currentViewChanged", $route.current.templateUrl);

      $location.hash($routeParams.scrollTo);
      $anchorScroll();
      
      // This is an ugly hack- let's not mince words
      // Without this, the $anchorScroll() leaves part of our content
      // hidden under the top navbar. Known angular issue.
      // See: https://www.bountysource.com/issues/110707-anchorscroll-offset
      $timeout(function() {
        window.scrollTo(window.pageXOffset, window.pageYOffset - 60);
      }, 100);
    });
  });

  app.factory("keywordData", function() {
    var data = {
      keywords: [
        "C#",
        ".Net",
        "JavaScript",
        "Visual Basic",
        "ASP.NET MVC",
        "SQL Server",
        "Node.js",
        "Visual Studio",
        "Azure",
        "Amazon",
        "Cloud",
        "Windows",
        "Linux",
        "Xen",
        "VMware",
        "AngularJS",
        "HTML",
        "Razor",
        "Bootstrap",
        "Web Services",
        "Lucene",
        "Web API",
        "Architecture",
        "SOA",
        "REST",
        "SOAP",
        "XML",
        "JSON",
        "Service Bus",
        "Team City",
        "Git",
        "TFS",
        "RabbitMQ",
        "RavenDB",
        "WS-*",
        "jQuery",
        "Umbraco",
        "CMS",
        "DevOps",
        "SMS",
        "Active Directory",
        "SPA",
        "Python",
        "Django",
        "Twilio",
        "Jenkins",
        "Docker",
        "Wagtail",
        "Vue.js"
      ]
    };
    data.keywords.sort(function(a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    return data;
  });

}());