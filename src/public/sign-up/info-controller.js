(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignService','ApiPath','$scope'];
function MyInfoController(SignService, ApiPath, $scope) {
  var infoCtrl = this;
  infoCtrl.compl = SignService.iscompleted();
  infoCtrl.basePath = ApiPath;
  infoCtrl.firstname = SignService.data('firstname');
  infoCtrl.lastname = SignService.data('lastname');
  infoCtrl.email = SignService.data('email');
  infoCtrl.phone = SignService.data('phone');
  if  (!!SignService.data('res')) {
      var dish = SignService.data('res');
      dish = dish['data'];
      infoCtrl.title = dish['name'];
      infoCtrl.description = dish['description'];
      infoCtrl.shortname = dish['short_name'];

  }

}


})();
