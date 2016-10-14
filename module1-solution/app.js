(function () {
'use strict';

angular.module('LunchItemCounter', [])

.controller('LunchItemCounterController', LunchItemCounterController);

LunchItemCounterController.$inject= ['$scope'];

function LunchItemCounterController($scope){
  $scope.lunchItems = "";
  $scope.message = "";

  $scope.countItems = function () {
    var str = $scope.lunchItems;
    var arrayOfStrings = str.split(",");
    var len = getCount(arrayOfStrings);

    if(len==0){
      $scope.message = "Please enter data first";
    }else if (len > 3){
      $scope.message = "Too Much!!";
    }else{
      $scope.message = "Enjoy!!";
    }
  };

  // Checking if the lunch box countains any empty item
  function getCount(array) {
    var count = 0;
    for(var i = 0;i<array.length;++i){
      if(array[i].trim().length>0)
        count+=1;
    }
    return count;
  }
}

})();
