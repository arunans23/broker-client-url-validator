
var app = angular.module('urlApp', []);

app.controller('urlValidator', function($scope) {

    $scope.urlCheckvalid = true;
    $scope.urlCreateValid = true;

    var url = "amqp://"+$scope.username+":"+$scope.pwd+"@clientid/carbon?brokerlist='tcp://"+$scope.ip+":"+$scope.port+"'";

    $scope.validateURL = function(url, flag) {
        
        console.log("Check");
        var url = url;

        var regex = /^amqp:\/\/[\w.]+:[\w.]+@clientID\/carbon\?brokerlist='tcp:\/\/[\w.]+:[0-9]+'/;

        //The above regex is not perfect. There is a lot to edit

        if (!regex.test(url)) { 
            if (flag === "create"){
                $scope.urlCreateValid = false;
            } else if (flag === "check"){
                $scope.urlCheckValid = false;
            }
            $scope.valid = false;
            return false;
        }
    
        alert("URL is valid!!!");
    };
});
