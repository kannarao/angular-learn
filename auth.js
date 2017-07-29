app.run(function($rootScope, $location, $route, Session) {
  var that = this;
  that.session = Session;
  $rootScope.$on('$locationChangeStart', function(event, next, current) {
    var path = ($route.routes[$location.path()])
    if(path.loginRequired) {
      if(!(Session.login)) {
        event.preventDefault();
        $rootScope.$broadcast('logout', 'success');
      }
    } else {
      if(Session.login && (path.originalPath != "/")) {
        event.preventDefault();
        $location.path("/");
      }
    }
  });

  $rootScope.$on('logout', function(data){
    console.log(data);
    $location.path("/login");
  })

  $rootScope.$on('login', function(data){
    console.log(data);
    $location.path("/");
  })
});
