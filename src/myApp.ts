import {Person} from './person';

(function () {

    console.log('executing myApp');

    angular.element(document).ready(function () {
        console.log('bootstrapping angular');
        angular.bootstrap(document.body, ['myModule'], {
            strictDi: true
        });
    });

    var module = angular.module('myModule', []);

    module.controller('myController', ['$scope',
        function ($scope) {
            console.log('creating controller');
            let person = new Person();
            $scope.myVar = person.name;
        }
    ]);

})();

