'use strict';

angular.module('bookingApp').factory('CountService',
    ['$localStorage','$http','$q','urls',
        function ($localStorage,$http,$q,urls){

            var factory = {
                loadCount : loadCount,
                getCountOffice : getCountOffice,
                getCountRoom : getCountRoom,
                getCountEmployee : getCountEmployee,
                getCountBooking : getCountBooking,
            };

            return factory;

            function loadCount(){
                console.log('Fetching all bookings');
                var deferred = $q.defer();
                $http.get(urls.COUNT_SERVICE_API)
                    .then(
                        function (response){
                            console.log('Fetched successfully all bookings');

                            $localStorage.office = response.data.office;
                            $localStorage.room = response.data.room;
                            $localStorage.employee = response.data.employee;
                            $localStorage.booking = response.data.booking;

                            deferred.resolve(response);
                        },
                        function (errResponse){
                            console.error('Error while Fetching bookings');
                            console.error(errResponse);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getCountOffice(){
                return $localStorage.office;
            }

            function getCountRoom(){
                return $localStorage.room;
            }

            function getCountEmployee(){
                return $localStorage.employee;
            }

            function getCountBooking(){
                return $localStorage.booking;
            }
        }


    ]);