app.controller("maincontroller", [
  "$scope",
  function ($scope) {
    $scope.humanArray = [];
    $scope.count = 0;

    $scope.add = function (name, age, gender) {
      $scope.humanArray.push({
        id: $scope.count,
        name,
        age,
        gender,
        isUpdateShow: false,
      });
      $scope.count += 1;
      $scope.name = "";
      $scope.age = "";
      $scope.gender = "";
    };

    $scope.delete = function (id) {
      for (let i = 0; i < $scope.humanArray.length; i++) {
        if ($scope.humanArray[i].id == id) {
          $scope.index = i;
        }
      }
      $scope.humanArray.splice($scope.index, 1);
    };

    $scope.edit = function (id) {
      for (let i = 0; i < $scope.humanArray.length; i++) {
        if ($scope.humanArray[i].id == id) {
          $scope.humanArray[i].isUpdateShow = true;
        }
      }
    };

    $scope.update = function (id, n, a, g) {
      for (let i = 0; i < $scope.humanArray.length; i++) {
        if ($scope.humanArray[i].id == id) {
          $scope.humanArray[i].isUpdateShow = false;
          $scope.humanArray[i].name = n;
          $scope.humanArray[i].age = a;
          $scope.humanArray[i].gender = g;
        }
      }
    };
  },
]);
