'use strict';

angular.module('bookingApp').controller('RoomController',
    ['$state', 'RoomService', 'LoginService', '$scope', '$sessionStorage', function( $state, RoomService, LoginService, $scope, $sessionStorage) {

        var self = this;
        self.room = {};
        self.rooms = [];
        //New for Image Upload
        self.imageTemp = []; //Ini menampung nama gambar2 yg sudah diupload (gambar belum masuk database, tp sudah terupload)
        self.roomImage = []; //Ini untuk menampung object gambar yang akan disimpan ke database


        self.submit = submit;
        self.getAllRooms = getAllRooms;
        self.createRoom = createRoom;
        self.updateRoom = updateRoom;
        self.removeRoom = removeRoom;
        self.editRoom = editRoom;
        self.reset = reset;
        self.getOffices = getOffices;
        self.uploadImage = uploadImage;
        self.submitImage = submitImage;
        self.createRoomImage = createRoomImage;
        self.logout = logout;

        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;

        self.onlyIntegers = /^\d+$/;
        self.onlyNumbers = /^\d+([,.]\d+)?$/;

        function submit(){
            console.log('Submitting');
            if(self.room.id === undefined || self.room.id === null) {
                console.log('Saving new room');
                createRoom(self.room);
            } else {
                updateRoom(self.room, self.room.id);
                console.log('rooms updated with id ', self.room.id);
            }
        }

        function createRoom (room){
            if (confirm("Please confirm?")) {
                console.log('About to create rooms');
                RoomService.createRoom(room)
                    .then(
                        function (response) {
                            alert("Adding Room Success!");
                            console.log('Room created successfully');
                            //Save Room Image With Room Id
                            submitImage(response.response);
                            self.successMessage = 'Room created successfully';
                            self.errorMessage = '';
                            self.done = true;
                            reset();
                        },

                        function (errResponse) {
                            alert("Adding Room Failed!");
                            console.log('Error while creating room');
                            self.errorMessage = 'Error while creating room';
                            self.successMessage = '';
                        }
                    );
            }
        }

        function updateRoom (room , id){
            if (confirm("Please confirm?")) {
                console.log('About to update room');
                RoomService.updateRoom(room, id)
                    .then(
                        function (response) {
                            alert("Updating Room Success!");
                            console.log('Room updated successfully');
                            self.successMessage = 'Room updated successfully';
                            self.errorMessage = '';
                            self.done = true;
                            reset();
                        },

                        function (errResponse) {
                            alert("Updating Room Failed!");
                            console.log('Error while updating room');
                            self.errorMessage = 'Error while updating room';
                            self.successMessage = '';
                        }
                    );
            }
        }

        function removeRoom (id){
            if (confirm("Please confirm?")) {
                console.log('About to remove Room with id ' + id);
                RoomService.removeRoom(id)
                    .then(
                        function () {
                            console.log('Room with ' + id + ' removed successfully');
                            self.successMessage = 'Room removed successfully';
                            self.errorMessage = '';
                        },
                        function (errResponse) {
                            console.error('Error while removing room ' + id + ', Error :' + errResponse.data);
                        }
                    );
            }
        }

        function getAllRooms(){
            return RoomService.getAllRooms();
        }

        function editRoom(id) {
            self.successMessage='';
            self.errorMessage='';
            RoomService.getRoom(id).then(
                function (room) {
                    self.room = room;
                },
                function (errResponse){
                    console.error('Error while editing room'+id +', Error :'+errResponse.data);
                }
            );
        }

        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.room={};
            $scope.myForm.$setPristine(); //reset Form
            self.room={};
            self.room.idRoom='';
            self.room.status=1;
            self.room.isConference=1;
            self.room.isProjector=1;
            self.imageTemp=[];
            self.roomImage = [];
        }

        function getOffices(){
            return RoomService.getAllOffices();
        }

        //-----------------------------------Upload Image Room---------------------------------------

        //Ini untuk melakukan upload gambar (Gambar terupload, tp belum masuk database RoomImage)
        function uploadImage($event){
            var files = $event.target.files[0];
            console.log('About to upload image');
            RoomService.uploadImage(files)
                .then(
                    function (response){
                        console.log('Image Uploaded Succesfully');
                        console.log('File Gambar : '+response.response);
                        self.imageTemp.push(response.response);
                        self.successMessage = 'Image Uploaded successfully';
                        self.errorMessage = '';

                    },

                    function (errResponse){
                        console.log('Error while uploading Image');
                        self.errorMessage = 'Error while uploading image';
                        self.successMessage = '';
                    }
                );
        }

        //Ini untuk menyimpan gambar-gambar (lebih dr 1) yang sudah terupload ke database
        function submitImage(roomid){
            console.log('Submitting Image');
            var i,arrL;
            arrL=self.imageTemp.length;
            //Perulangan *karna gambar bisa lebih dari satu
            if(arrL!=0) {
                for (i = 0; i < arrL; i++) {
                    self.roomImage[i] = {};
                    self.roomImage[i].room = {};
                    self.roomImage[i].imageDescription = 'Room Image';
                    self.roomImage[i].imageAddress = self.imageTemp[i];
                    console.log('sGambar '+i+' : '+self.imageTemp[i]);
                    self.roomImage[i].room.idRoom = roomid;

                    createRoomImage(self.roomImage[i]);
                }
            } else {
                console.log('No Image Submitted');
            }
        }

        //Ini untuk menyimpan gambar 1 per 1 ke database
        function createRoomImage(roomimage){
            console.log('About to create room image');
            RoomService.createRoomImage(roomimage)
                .then(
                    function (response){
                        console.log('Room Image Saved Succesfully');
                        self.successMessage = 'Room Image Saved  successfully';
                        self.errorMessage = '';

                    },

                    function (errResponse){
                        console.log('Error while saving Room Image');
                        self.errorMessage = 'Error while saving Room image';
                        self.successMessage = '';
                    }
                );
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