'use strict';

angular.module('bookingApp').controller('BookingController',
    ['BookingService', 'LoginService', 'RoomService', '$scope', '$state', '$sessionStorage', '$http', '$filter', function( BookingService ,LoginService, RoomService, $scope, $state, $sessionStorage, $http, $filter) {

        var self = this;
        self.booking = {};
        self.bookings = [];
        //For loading Offices
        self.office = {};
        self.offices = [];
        //for loading available Rooms
        self.searchVar = {};
        self.roomTemp={}
        //rooms
        self.room={};
        self.rooms=[];
        //user
        self.user = {};
        self.userBooking = {};
        self.userBookings = [];
        //for booking ticket
        self.ticket = {};
        self.bookingTicket = [];

        //get date
        $scope.date = new Date();

        self.submit = submit;
        self.getAllBookings = getAllBookings;
        self.getUpcomingBookings = getUpcomingBookings;
        self.createBooking = createBooking;
        self.updateBooking = updateBooking;
        self.removeBooking = removeBooking;
        self.editBooking = editBooking;
        self.reset = reset;
        self.getRoombyId = getRoombyId;
        self.getOffices=getOffices;

        //to show and check the available room
        self.check = check;
        self.checkForEmployeeSite = checkForEmployeeSite;
        self.getAvailableRoom = getAvailableRoom;
        self.getSearchVar = getSearchVar;

        //to show booking per User (by employeeId)
        self.getBookingPerUser = getBookingPerUser;
        self.getAllBookingPerUser = getAllBookingPerUser;

        self.logout = logout;

        self.checkTicket = checkTicket;
        self.getBookingTicket = getBookingTicket;
        self.getTicketID = getTicketID;

        //booking Page for employee
        self.cancelBooking = cancelBooking;
        self.getBookingHistory = getBookingHistory;
        self.extendBooking = extendBooking;
        self.extend = extend;

        $scope.loaded={};

        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;

        self.onlyIntegers = /^\d+$/;
        self.onlyNumbers = /^\d+([,.]\d+)?$/;

        function extend(roomId) {
            RoomService.getRoom(roomId).then(
                function (room) {
                    console.log(room);
                    self.room = room;
                    self.booking = BookingService.getBookingFailedExtend();
                    console.log(self.booking);

                    self.booking.employee = LoginService.user;
                    self.searchVar = getSearchVar();
                    self.booking.room = self.room;

                    self.booking.startTime = self.searchVar.startTime;
                    self.booking.endTime = self.searchVar.endTime;

                    createBooking(self.booking);
                },
                function (errResponse){
                    console.error('Error while getting room '+roomId +', Error :'+errResponse.data);
                }
            );


        }

        function submit(){
            $('.modal-backdrop').hide();
            $('.modal').hide();
            $('#myModalAdd').hide();

            console.log('Submitting');
            if(self.booking.id === undefined || self.booking.id === null) {
                console.log('Saving new booking');
                self.searchVar = getSearchVar();
                self.booking.employee = LoginService.user;
                console.log('Logged user : ' + LoginService.user);
                self.booking.dateMeeting = self.searchVar.date;
                self.booking.startTime = self.searchVar.startTime;
                self.booking.endTime = self.searchVar.endTime;
                //console.log('Room Id'+self.roomTemp.idRoom);
                self.booking.room = self.room;

                createBooking(self.booking);
            }

        }

        function createBooking (booking){
            console.log('About to create booking');
            //Taking data from previous form

            BookingService.createBooking(booking)
                .then(
                    function (response){
                        console.log('Booking created successfully');
                        self.successMessage = 'Booking created successfully';
                        self.errorMessage = '';
                        self.done = true;
                        self.booking={};
                        //$scope.myForm.$setPristine();
                        alert("Successfully Booked!");
                        $state.go('EmpUpcomingBooking');
                    },

                    function (errResponse){
                        console.log('Error while creating booking');
                        self.errorMessage = 'Error while creating booking';
                        self.successMessage = '';
                        alert("Failed Booked");
                    }
                );
        }

        function updateBooking (booking , id){
            console.log('About to update booking');
            BookingService.updateBooking(booking , id)
                .then(
                    function (response){
                        console.log('Booking updated successfully');
                        self.successMessage='Booking updated successfully';
                        self.errorMessage='';
                        self.done = true;
                        $scope.myForm.$setPristine();

                        alert("Booking success cancelled!");
                        $state.reload();
                    },

                    function (errResponse){
                        console.log('Error while updating booking');
                        self.errorMessage = 'Error while updating booking';
                        self.successMessage = '';

                        alert("Booking failed cancelled!");
                        $state.go('EmpDashboard');
                    }
                );
        }

        function removeBooking (id){
            if (confirm("Please confirm?")) {
                console.log('About to remove booking with id ' + id);
                BookingService.removeBooking(id)
                    .then(
                        function () {
                            console.log('Booking with ' + id + ' removed successfully');
                            self.successMessage = 'Booking removed successfully';
                            self.errorMessage = '';
                        },
                        function (errResponse) {
                            console.error('Error while removing booking ' + id + ', Error :' + errResponse.data);
                        }
                    );
            }
        }

        function getAllBookings(){
            return BookingService.getAllBookings();
        }

        function getUpcomingBookings(){
            return BookingService.getUpcomingBookings();
        }

        function editBooking(id) {
            self.successMessage='';
            self.errorMessage='';
            BookingService.getBooking(id).then(
                function (booking) {
                    self.booking = booking;
                },
                function (errResponse){
                    console.error('Error while editing booking '+id +', Error :'+errResponse.data);
                }
            );
        }

        function getOffices(){
            return BookingService.getAllOffices();
        }

        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.booking={};
            $scope.myForm.$setPristine(); //reset Form
        }

        function check(){
            if(self.searchVar.startTime<self.searchVar.endTime) {
                self.searchVar.date = $filter('date')(self.searchVar.date, "yyyy-MM-dd");

                console.log('Fetched successfully All available rooms in office with id : ' + self.searchVar.officeId +
                    ' on date : ' + self.searchVar.date +
                    ' with start Time : ' + self.searchVar.startTime +
                    ' And end Time : ' + self.searchVar.endTime);

                self.rooms = BookingService.getAvailableRooms(self.searchVar);
                console.log('rooms' + self.rooms);
                if (self.rooms != null) {
                    console.log('Go to AvailRooms');
                    $state.go('AvailRooms');
                } else {
                    console.log('Gagal redirect');
                }
            }
            else
                alert("Start time & End Time can't be applied");
        }

        function checkForEmployeeSite(){
            if(self.searchVar.startTime<self.searchVar.endTime) {
                self.searchVar.date = $filter('date')(self.searchVar.date, "yyyy-MM-dd");

                console.log('Fetched successfully All available rooms in office with id : '+self.searchVar.officeId+
                    ' on date : ' +self.searchVar.date +
                    ' with start Time : '+self.searchVar.startTime+
                    ' And end Time : '+self.searchVar.endTime);

                self.rooms= BookingService.getAvailableRooms(self.searchVar);
                console.log('rooms'+self.rooms);
                if(self.rooms!=null){
                    console.log('Go to EmpAvailRooms');
                    $state.go('EmpAvailRooms');
                }else{
                    console.log('Gagal redirect');
                }
            }
            else
                alert("Start time & End Time can't be applied");
        }

        function checkTicket(){
            if(confirm("Checking Booking with Ticket ID="+self.ticket.id+" ?")) {
                self.bookingTicket = BookingService.getBookingByTicket(self.ticket.id);
                console.log('BookingTicket' + self.bookingTicket);
                if (self.bookingTicket != null) {
                    console.log('Go to Show Ticket');
                    $state.go('showticket');
                } else {
                    console.log('Gagal redirect');
                }
            }
        }

        function getTicketID(){
            return BookingService.getTicketId();
        }

        function getBookingTicket(){
            return BookingService.getAllBookingByTicket();
        }

        function getAvailableRoom(){
            return BookingService.getAllAvailableRooms();
        }

        function getSearchVar(){
            return BookingService.getSearchVar();
        }

        function getRoombyId(roomId) {

            //console.log('masuk ng click');
            RoomService.getRoom(roomId).then(
                function (room) {
                    console.log(room);
                    self.room = room;
                    //$scope.loaded["showModal"]=true;
                },
                function (errResponse){
                    console.error('Error while getting room '+roomId +', Error :'+errResponse.data);
                }
            );
        }

        function getBookingPerUser() {
            self.user = LoginService.user;
            self.userBookings = BookingService.getBookingPerUser(self.user.idEmployee);
            console.log("Booking from user "+self.user.idEmployee+" are " + self.userBookings);
            if(self.userBookings!=null){
                console.log("Booking from user "+self.user.idEmployee+" are " + self.userBookings);
            }else{
                console.log('');
            }
        }

        function getAllBookingPerUser() {
            return BookingService.getAllBookingPerUser();
        }

        function cancelBooking(id) {
            if (confirm("Please confirm?")) {
                self.successMessage = '';
                self.errorMessage = '';
                BookingService.getBooking(id).then(
                    function (booking) {
                        self.booking = booking;
                        self.booking.employee_id = LoginService.user.id_employee;
                        booking.value[0].statusBooking = "0";
                        updateBooking(booking.value[0], id);
                    },
                    function (errResponse) {
                        console.error('Error while editing booking ' + id + ', Error :' + errResponse.data);
                    }
                );
            }
        }
        
        function getBookingHistory(bookingDate,bookingEndTime) {
            //console.log("Compare Date");
            var parts = bookingEndTime.split(":");

            var bookDate = new Date(bookingDate);
            bookDate.setHours(parts[0],parts[1],parts[2],0);

            //ini hasilnya timestamp , baik valuOf dan getTime. Juga nilainya sama
            //console.log("D : "+bookDate.valueOf());
           //console.log("T : "+bookDate.getTime());

            if ( (bookDate.valueOf() < new Date().valueOf()) ||
                (bookDate.valueOf() == new Date().valueOf() && bookDate.getTime() <  new Date().getTime() )){

                return true;
            }
            else
                return false;
        }

        function extendBooking(bookingId, newEndTime){
            $('.modal-backdrop').hide();
            $('.modal').hide();
            $('#myModalExtend').hide();

            BookingService.extendBooking(bookingId,newEndTime).then(
                function(result){
                    //console.log('cek result promise : '+result.value.data.response);
                    console.log('hasil response dari result');
                    console.log(result.data.response);
                    if (result.data.response == "success extending") {
                        console.log('Jam selesai baru : ' + newEndTime);
                        console.log('extend success');

                        $state.go('EmpExtendSuccess');

                    } else {
                        console.log('extend failed.');
                        self.booking = {}

                        BookingService.getBooking(bookingId).then(
                            function (booking) {
                                self.booking = booking;
                                console.log('cek booking :' + self.booking);
                                BookingService.saveBooking(self.booking.value[0]);
                                self.searchVar.date = self.booking.value[0].dateMeeting;
                                self.searchVar.startTime = self.booking.value[0].endTime;
                                self.searchVar.endTime = newEndTime;

                                RoomService.getRoom(self.booking.value[0].room.idRoom).then(
                                    function (room) {
                                        console.log(room);
                                        self.room = room;
                                        self.searchVar.officeId = self.room.office.idOffice;

                                        BookingService.getAvailableRooms(self.searchVar);

                                        if (self.rooms != null) {
                                            $state.go('EmpExtendUnsuccess');
                                        } else {
                                            console.log('Gagal redirect');
                                        }
                                    },
                                    function (errResponse) {
                                        console.error('Error while getting room ' + roomId + ', Error :' + errResponse.data);
                                    }
                                );

                            },
                            function (errResponse) {
                                console.error('Error while editing booking ' + id + ', Error :' + errResponse.data);
                            }
                        );
                    }
                });
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