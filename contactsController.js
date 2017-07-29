app.controller('contactsController', function($scope, $location){

  $scope.contacts = [{name: "kanna", phone: 8332900801, email: "kannaraokarnam123@gmail.com"},
                     {name: "prasad", phone: 8332900803, email: "kannarao@mieone.com"}];

  $scope.startChat = function(url) {
    console.log(url);
    $location.path(url)
  }
})
