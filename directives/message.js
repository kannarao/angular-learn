app.directive('message', function(){

  var directive = {};
  directive.restrict = "E";
  directive.templateUrl = "directives/message.html";
  directive.scope = {
    msg : '=message'
  }
  directive.compile = function(element, attributes) {

    element.css("border", "1px solid #cccccc");
    var linkFunction = function($scope, element, attributes) {
      //element.html("From: <b>"+$scope.msg.name +"</b> , Message: <b>"+$scope.msg.msg+"</b><br/>");
      element.css("background-color", "#ff00ff");
    }
    return linkFunction;
  }
  return directive;
})
