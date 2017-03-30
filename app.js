var app=angular.module('app', ['ngMaterial','ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'home/home.html',
         controller: 'HomeCtrl'
    }).
    when('/DetailInfo', {
        templateUrl: 'detail/detailInfo.html',
        controller: 'DetailCtrl'
    }).
    otherwise({
        redirectTo: '/home'
    });
    
    if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('/seviceWorker.js', { scope: '/' })
          .then(function(registration) {
                console.log('Service Worker Registered');
          });

        navigator.serviceWorker.ready.then(function(registration) {
           console.log('Service Worker Ready');
        });
  }
    
});