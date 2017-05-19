/// <reference path="angular.js" />
var myApp = angular
                    .module("myModule", [])
                    .controller("myController", function ($scope) {
                        var employee = {
                            firstName: "David",
                            lastName: "Hastings",
                            gender: "Male",
                            picture: "/Image/1436278541_7872.jpg"
                        };
                        $scope.employee = employee;
                        $scope.message = "Hello Angular!";
                    });
