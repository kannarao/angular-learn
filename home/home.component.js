angular.module('home', [])
  .component('home', {

    templateUrl: 'home/home.html',
    controller: function (Session){
      var ctrl = this;
      ctrl.session = Session;
    }
  })
