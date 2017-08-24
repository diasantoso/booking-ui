'use strict';

angular.module('bookingApp').factory('EmployeeService',
    ['$localStorage','$http','$q','urls',
        function ($localStorage,$http,$q,urls){

            var factory = {
                loadAllEmployees : loadAllEmployees,
                getAllEmployees : getAllEmployees,
                getEmployee : getEmployee,
                createEmployee : createEmployee,
                updateEmployee : updateEmployee,
                removeEmployee : removeEmployee
            };

            return factory;

            function loadAllEmployees(){
                console.log('Fetching all employees');
                var deferred = $q.defer();
                $http.get(urls.EMPLOYEE_SERVICE_API)
                    .then(
                        function (response){
                            console.log('Fetched successfully all employees');

                            $localStorage.employees = response.data.value;
                            deferred.resolve(response);
                        },
                        function (errResponse){
                            console.error('Error while Fetching employees');
                            console.error(errResponse);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getAllEmployees(){
                return $localStorage.employees;
            }

            function getEmployee(id){
                console.log('Fetching employees with id : ' +id);
                var deferred =  $q.defer();
                $http.get(urls.EMPLOYEE_SERVICE_API + id)
                    .then(
                        function (response){
                            console.log('Fetched successfully employees with id : ' + id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading employees with id : ' +id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function createEmployee(employee){
                console.log('Creating employee');
                var deferred = $q.defer();
                $http.post(urls.REGISTER_EMPLOYEE_SERVICE_API, employee)
                    .then(
                        function (response){
                            loadAllEmployees();
                            deferred.resolve(response.data);
                        },

                        function (errResponse) {
                            console.error('Error while creating employee : ' + errResponse.data.errorMessage);
                            deferred.reject(errResponse);
                        }
                    );

                return deferred.promise;
            }

            function updateEmployee(employee , id){
                console.log('Updating office with id ' + id);
                var deferred = $q.defer();
                $http.put(urls.EMPLOYEE_SERVICE_API + id, user) //USER INI APA YA?
                    .then(
                        function (response){
                            loadAllEmployees();
                            deferred.resolve(response.data);
                        },
                        function (errResponse){
                            console.error('Error while updating employee with id : ' + id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function removeEmployee(id){
                console.log('Removing employee with id : ' +id);
                var deferred = $q.defer();
                $http.delete(urls.EMPLOYEE_SERVICE_API+"?id="+id)
                    .then(
                        function (response){
                            loadAllEmployees();
                            deferred.resolve(response.data);
                        },

                        function (errResponse){
                            console.error('Error while removing employee with id : '+ id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

        }
    ]);