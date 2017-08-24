'use strict';

angular.module('bookingApp').factory('RoomService',
    ['$localStorage','$http','$q','urls',
        function ($localStorage,$http,$q,urls){

            var factory = {
                loadAllRooms : loadAllRooms,
                getAllRooms : getAllRooms,
                getRoom : getRoom,
                createRoom : createRoom,
                updateRoom : updateRoom,
                removeRoom : removeRoom,
                loadOffices : loadOffices,
                getAllOffices : getAllOffices,
                uploadImage : uploadImage,
                createRoomImage : createRoomImage
            };

            return factory;

            function loadAllRooms(){
                console.log('Fetching all rooms');
                var deferred = $q.defer();
                $http.get(urls.ROOM_SERVICE_API)
                    .then(
                        function (response){
                            console.log('Fetched successfully all rooms');

                            $localStorage.rooms = response.data.value;
                            deferred.resolve(response);
                        },
                        function (errResponse){
                            console.error('Error while Fetching rooms');
                            console.error(errResponse);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getAllRooms(){
                return $localStorage.rooms;
            }

            function getRoom(id){
                console.log('Fetching room with id : ' +id);
                var deferred =  $q.defer();
                $http.get(urls.ROOM_SERVICE_API + id)
                    .then(
                        function (response){
                            console.log('Fetched successfully room with id : ' + id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading room with id : ' +id);
                            deferred.reject(errResponse);
                        }
                    );
                 return deferred.promise;
            }

            function createRoom(room){
                console.log('Creating room');
                var deferred = $q.defer();
                $http.post(urls.ROOM_SERVICE_API, room)
                    .then(
                        function (response){
                            loadAllRooms();
                            deferred.resolve(response.data);
                        },

                        function (errResponse) {
                            console.error('Error while creating room: ' + errResponse.data.errorMessage);
                            deferred.reject(errResponse);
                        }
                    );

                 return deferred.promise;
            }

            function updateRoom(room, id){
                console.log('Updating room with id ' + id);
                var deferred = $q.defer();
                $http.put(urls.ROOM_SERVICE_API + id, user)
                    .then(
                        function (response){
                            loadAllRooms();
                            deferred.resolve(response.data);
                        },
                        function (errResponse){
                            console.error('Error while updating room with id : ' + id);
                            deferred.reject(errResponse);
                        }
                    );
                 return deferred.promise;
            }

            function removeRoom(id){
                console.log('Removing room with id : ' +id);
                var deferred = $q.defer();
                $http.delete(urls.ROOM_SERVICE_API+"?id="+id)
                    .then(
                        function (response){
                            loadAllRooms();
                            deferred.resolve(response.data);
                        },

                        function (errResponse){
                            console.error('Error while removing room with id : '+ id);
                            deferred.reject(errResponse);
                        }
                    );
                 return deferred.promise;
            }

            function loadOffices(){
                console.log('Fetching all offices');
                var deferred = $q.defer();
                $http.get(urls.OFFICE_SERVICE_API+'/active')
                    .then(
                        function (response){
                            console.log('Fetched successfully all offices');

                            $localStorage.offices = response.data.value;
                            deferred.resolve(response);
                        },
                        function (errResponse){
                            console.error('Error while Fetching offices');
                            console.error(errResponse);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getAllOffices(){
                return $localStorage.offices;
            }

            //-----------------------------------Upload Image Room---------------------------------------
            function uploadImage(file){
                console.log('Service : Upload Image');
                var deferred = $q.defer();
                var fd = new FormData();
                fd.append('file', file);
                $http.post(urls.IMAGES_UPLOAD_API, fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                })
                    .then(
                        function (response){
                            console.log('Succes add image');
                            deferred.resolve(response.data);
                        },

                        function (errResponse) {
                            console.error('Error while upload image: ' + errResponse.data.errorMessage);
                            deferred.reject(errResponse);
                        }
                    );

                return deferred.promise;
            }

            function createRoomImage(image){
                console.log('Service : Creating Room image');
                var deferred = $q.defer();
                $http.post(urls.IMAGES_SERVICE_API, image)
                    .then(
                        function (response){
                            console.log('Service : Success Saving Image')
                            deferred.resolve(response.data);
                        },

                        function (errResponse) {
                            console.error('Error while saving image: ' + errResponse.data.errorMessage);
                            deferred.reject(errResponse);
                        }
                    );

                return deferred.promise;
            }
        }
     ]);