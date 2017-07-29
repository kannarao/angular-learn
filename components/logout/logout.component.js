angular.module("logout", [])
  .component("logout", {
    template: "<a ng-click='$ctrl.logout()'>Logout</a>",
    controller: function($rootScope, $scope, Session) {
      var that = this;
      that.logout = function() {
        Session.clearData();
        $rootScope.$broadcast('logout', 'success');
      }
    }
  })
