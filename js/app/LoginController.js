'use strict';

angular.module('bookingApp')
// Creating the Angular Controller
    .controller('LoginController', function($http, $scope, $state, LoginService, $rootScope, $localStorage, urls, $sessionStorage) {
        // method for login
        $scope.login = function() {
            console.log("Debug : Login");
            // requesting the token by usename and password
            $http({
                url : urls.LOGIN_API,
                method : "POST",
                params : {
                    email : $scope.email,
                    password : $scope.password
                }
            }).success(function(res) {
                $scope.password = null;
                // checking if the token is available in the response
                if (res.token) {
                    $scope.message = '';
                    // setting the Authorization Bearer token with JWT token
                    $http.defaults.headers.common['Authorization'] = 'Bearer ' + res.token;

                    // setting the user in AuthService
                    LoginService.user = res.user;
                    $localStorage.user = res.user;
                    $rootScope.$broadcast('LoginSuccessful');

                    // setting session token & user
                    $sessionStorage.token = 'Bearer ' + res.token;
                    $sessionStorage.user = res.user;
                    console.log("SESSION : " + $sessionStorage.token + " - " + $sessionStorage.user);

                    // going to the home page
                    console.log("Debug : Login Success -> Going Dashboard");
                    console.log("Debug : Login Token -> "+res.token);
                    if(res.user.role=='Admin'){
                        alert("Welcome Admin!");
                        $state.go('dashboard');
                    }
                    else if(res.user.role=='Employee'){
                        alert("Welcome Employee!");
                        $state.go('EmpDashboard');
                    }
                    else {
                        $state.go('home');
                    }
                } else {
                    // if the token is not present in the response then the
                    // authentication was not successful. Setting the error message.
                    alert("Wrong Username/Password! Please try again");
                    console.log("Debug : Login Failed");
                    $scope.message = 'Authetication Failed !';
                }
            }).error(function(error) {
                // if authentication was not successful. Setting the error message.
                alert("Wrong Username/Password! Please try again");
                console.log("Debug : Login Failed");
                $scope.message = 'Authetication Failed !';
            });
        };
        $scope.logout = function(){
            if (confirm("Are you sure to logout?")) {
                LoginService.user = null;

                // setting session token & user become null (logout)
                $sessionStorage.token = undefined;
                $sessionStorage.user = undefined;

                console.log("Logout Successfully");
                $state.go('home');
            }
        };
    });
