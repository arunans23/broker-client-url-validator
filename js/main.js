
var app = angular.module('urlApp', []);

app.controller('urlValidator', function($scope) {

    $scope.urlCheckValid = true;
    $scope.urlCreateValid = true;

    

    $scope.validateURL = function(url, flag) {
        var url = url;

        var regex = /^amqp:\/\/[\w.]+:[\w.]+@clientID\/carbon\?brokerlist='tcp:\/\/[\w.]+:[0-9]+'/;

        //The above regex is not perfect. There is a lot to edit

        if (!regex.test(url)) { 
            if (flag === "create"){
                $scope.urlCreateValid = false;
            } else if (flag === "check"){
                $scope.urlCheckValid = false;
            }
            return false;
        } else {
            $scope.urlCheckValid = true;
            $scope.urlCreateValid = true;
            return true;
        }
    };

    $scope.createUrl = function(username, pwd, ip, port) {
        var url = "amqp://"+username+":"+pwd+"@clientID/carbon?brokerlist='tcp://"+ip+":"+port+"'";

        if($scope.validateURL(url, "create")){
            $scope.createdUrl = url;
        }
    }
});
