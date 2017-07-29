angular.module('login', [])
  .component('login', {

    templateUrl: 'login/login.html',
    controller: function (Session, $window, $location, $rootScope){
      var ctrl = this;

      ctrl.login = function(name, pwd) {
        Session.setData({name: name});
        $rootScope.$broadcast('login', 'success');
      }
    }
  })
