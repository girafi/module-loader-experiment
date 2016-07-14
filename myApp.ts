(function () {

    var module = angular.module('myModule', []);

    module.controller('myController', ['$scope',
        function ($scope) {
            $scope.myVar = A.myConst;
        }
    ])

})();