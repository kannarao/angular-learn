app.service('CalcService', function(MathService){
   this.square = function(a) {
      return MathService.multiply(a,a);
   }
});

app.service('Session', function(MathService){
  var that = this;
  this.login = false;
  this.userData = {
    name: ''
  }

  this.setData = function(data) {

    that.userData['name'] = data.name;
    that.login = true;
  }

  this.clearData = function(data) {

    that.userData['name'] = '';
    that.login = false;
  }
  this.square = function(a) {
    return MathService.multiply(a,a);
  }
});
