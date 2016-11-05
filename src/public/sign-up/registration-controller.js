(function () {
"use strict";
    
angular.module('public')
.controller('RegistrationController', RegistrationController);
RegistrationController.$inject = ['SignService','MenuService','$scope'];   
function RegistrationController(SignService, MenuService, $scope) {
  var regCtrl = this;
  var res = {};
  $scope.completed = false;
  regCtrl.firstname = '';
  regCtrl.lastname = '';
  regCtrl.email = '';
  regCtrl.phone = '';
  regCtrl.sname = '';
  
   
  regCtrl.submit = function () {
               
        $scope.errorMessage = false;
        if (regCtrl.sname) {
            
    var promise = MenuService.getFavItem(regCtrl.sname);
    promise.then(function (response) {
            res = response;
            SignService.getData(regCtrl.firstname,regCtrl.lastname,regCtrl.email,regCtrl.phone,res)
            }, function() {
            $scope.errorMessage = "No such menu number exists";   
            SignService.getData(regCtrl.firstname,regCtrl.lastname,regCtrl.email,regCtrl.phone)
            
        })
        } else {
            
            $scope.errorMessage = "No such menu number exists";
            SignService.getData(regCtrl.firstname,regCtrl.lastname,regCtrl.email,regCtrl.phone)
        }

    $scope.SavedMessage = "Your information has been saved.";
    $scope.regForm.$setPristine();  
    SignService.completed( );
  };
 
}

})();