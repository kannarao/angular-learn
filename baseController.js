app.controller("baseController", function($scope, $http, $route, CalcService, Session){

  $scope.session = Session;
  $scope.name="prasad";

      $scope.student = {
               firstName: "Mahesh",
               lastName: "Parashar",
               fees:500,
               subjects:[
                  {name:'Physics',marks:70},
                  {name:'Chemistry',marks:80},
                  {name:'Math',marks:65}
               ],
               fullName: function() {
                  var studentObject;
                  studentObject = $scope.student;
                  return studentObject.firstName + " " + studentObject.lastName;
               }
            }

  $scope.reset = function(){
               $scope.firstName = "Mahesh";
               $scope.lastName = "Parashar";
               $scope.email = "MaheshParashar@tutorialspoint.com";
            }
            $scope.reset();

  $http.get("data.txt").then(function(data){
    console.log(data)
  })

  $scope.result = CalcService.square(2);
})
