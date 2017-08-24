'use strict';

angular.module('bookingApp').controller('CountController',
    ['$state', 'CountService', 'LoginService', '$scope', '$sessionStorage', function( $state, CountService , LoginService, $scope, $sessionStorage) {

        var self = this;
        self.getCountOffice = getCountOffice;
        self.getCountRoom = getCountRoom;
        self.getCountEmployee = getCountEmployee;
        self.getCountBooking = getCountBooking;
        self.logout = logout;

        function getCountOffice(){
            return CountService.getCountOffice();
        }

        function getCountRoom(){
            return CountService.getCountRoom();
        }

        function getCountEmployee(){
            return CountService.getCountEmployee();
        }

        function getCountBooking(){
            return CountService.getCountBooking();
        }

        function logout (){
            if (confirm("Are you sure to logout?")) {
                LoginService.user = null;

                // setting session token & user become null (logout)
                $sessionStorage.token = undefined;
                $sessionStorage.user = undefined;

                console.log("Logout Successfully");
                $state.go('home');
            }
        };
    }
    ]);