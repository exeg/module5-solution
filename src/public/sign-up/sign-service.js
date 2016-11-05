(function () {
"use strict";

angular.module('common')
.service('SignService', SignService);


SignService.$inject = ['$http', 'ApiPath'];
function SignService($http, ApiPath) {
  var service = this;
  var signdata = {};
  var completed = false;    

service.getData = function (firstname,lastname,email,phone,res=null) {
      signdata.firstname = firstname;
      signdata.lastname = lastname;
      signdata.email = email;
      signdata.phone = phone;
      signdata.res = res;
    };
  

service.data = function (prop) {
    
    return signdata[prop];
};
    
service.completed = function() {
    completed = true;
}

service.iscompleted = function() {
    return completed;
}

}

})();