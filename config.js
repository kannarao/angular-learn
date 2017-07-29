app.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/contacts', {
    templateUrl: 'contacts.html',
    controller: 'contactsController',
    loginRequired: true
  })
  .when('/chatArea/:name', {
    templateUrl: 'chatArea.html',
    controller: 'chatAreaController',
    loginRequired: true
  })
  .when('/register', {
    templateUrl: 'register.html',
    controller: 'registerController',
    loginRequired: false
  })
  .when('/', {
    template: '<home></home>',
    loginRequired: false
  })
  .when('/login', {
    template: '<login></login>',
    loginRequired: false
  })
  .otherwise({
    redirectTo: '/'
  });
}])
