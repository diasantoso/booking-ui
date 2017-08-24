var app = angular.module('bookingApp',['ui.router','ngStorage']);

app.constant('urls',{
    BASE : 'http://localhost:8080/',
    OFFICE_SERVICE_API : 'http://localhost:8080/api/offices/',
    OFFICE_NOAUTH_SERVICE_API : 'http://localhost:8080/api/offices/nonauth',
    ROOM_SERVICE_API : 'http://localhost:8080/api/rooms/',
    EMPLOYEE_SERVICE_API : 'http://localhost:8080/api/employees',
    REGISTER_EMPLOYEE_SERVICE_API : 'http://localhost:8080/api/register',
    BOOKING_SERVICE_API : 'http://localhost:8080/api/bookings',
    COUNT_SERVICE_API : 'http://localhost:8080/api/count',
    IMAGES_SERVICE_API : 'http://localhost:8080/api/rooms/images',
    IMAGES_UPLOAD_API : 'http://localhost:8080/api/upload',
    LOGIN_API : 'http://localhost:8080/api/login'
});

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
       function($stateProvider, $urlRouterProvider, $locationProvider){

            $stateProvider
                .state('home',{
                    url: '/',
                    templateUrl: 'static/home.html'
                })

                .state('showbooking',{
                    url: '/upcoming',
                    templateUrl: 'static/upcoming.html',
                    controller: 'BookingController',
                    controllerAs: 'ctrlBooking',
                    resolve: {
                        offices: function ($q, BookingService) {
                            console.log('Load all bookings');
                            var deferred = $q.defer();
                            BookingService.loadUpcomingBookings()
                                .then(deferred.resolve,deferred.resolve);
                            return deferred.promise;
                        }
                    }
                })

                .state('checkroom',{
                    url: '/checkroom',
                    templateUrl: 'static/checkroom.html',
                    controller: 'BookingController',
                    controllerAs: 'ctrlBooking',
                    resolve: {
                        offices: function ($q, BookingService) {
                            var deferred = $q.defer();
                            BookingService.loadOffices()
                                .then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        }
                    }
                })

                .state('AvailRooms',{
                    url: '/rooms/available',
                    templateUrl: 'static/availroom.html',
                    controller: 'BookingController',
                    controllerAs: 'ctrlBooking'
                })

                .state('checkticket',{
                    url: '/checkticket',
                    templateUrl: 'static/checkticket.html',
                    controller: 'BookingController',
                    controllerAs: 'ctrlBooking'
                })

                .state('showticket',{
                    url: '/showticket',
                    templateUrl: 'static/showticket.html',
                    controller: 'BookingController',
                    controllerAs: 'ctrlBooking'
                })

                .state('login',{
                    url: '/login',
                    templateUrl: 'static/login.html',
                    controller: 'LoginController',
                    controllerAs: 'ctrlLogin'
                })

                .state('register',{
                    url: '/register',
                    templateUrl: 'static/register.html',
                    controller: 'EmployeeController',
                    controllerAs: 'ctrlEmployee'
                })

                //SAMPAI SINI
                
                .state('dashboard',{
                    url: '/dashboard',
                    //data : {role:'Admin'},
                    templateUrl: '/partials/admin/home',
                    controller: 'CountController',
                    controllerAs: 'ctrlCount',
                    resolve: {
                        count: function ($q, CountService) {
                            console.log('Load all count');
                            var deferred = $q.defer();
                            CountService.loadCount()
                                .then(deferred.resolve,deferred.resolve);
                            return deferred.promise;
                        }
                    }
                })

                .state('Office',{
                    url: '/offices',
                    data : {role:'Admin'},
                    templateUrl: '/partials/admin/office',
                    controller: 'OfficeController',
                    controllerAs: 'ctrlOffice',
                    resolve: {
                        offices: function ($q, OfficeService) {
                            console.log('Load all offices');
                            var deferred = $q.defer();
                            OfficeService.loadAllOffices()
                                .then(deferred.resolve,deferred.resolve);
                            return deferred.promise;
                        }
                    }
                })

                .state('Room',{
                    url: '/rooms',
                    data : {role:'Admin'},
                    templateUrl: 'partials/admin/room',
                    controller: 'RoomController',
                    controllerAs: 'ctrlRoom',
                    resolve: {
                        rooms: function ($q, RoomService) {
                            console.log('Load all rooms');
                            var deferred = $q.defer();
                            RoomService.loadAllRooms()
                                .then(deferred.resolve, deferred.resolve);
                            RoomService.loadOffices()
                                .then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        }
                    }
                })

                .state('Employee',{
                    url: '/employees',
                    data : {role:'Admin'},
                    templateUrl: '/partials/admin/employee',
                    controller: 'EmployeeController',
                    controllerAs: 'ctrlEmployee',
                    resolve: {
                        employees: function ($q, EmployeeService) {
                            console.log('Load all employees');
                            var deferred = $q.defer();
                            EmployeeService.loadAllEmployees()
                                .then(deferred.resolve,deferred.resolve);
                            return deferred.promise;
                        }
                    }
                })

                .state('Booking',{
                    url: '/bookings',
                    templateUrl: '/partials/admin/booking',
                    controller: 'BookingController',
                    controllerAs: 'ctrlBooking',
                    resolve: {
                        offices: function ($q, BookingService) {
                            console.log('Load all bookings');
                            var deferred = $q.defer();
                            BookingService.loadAllBookings()
                                .then(deferred.resolve,deferred.resolve);
                            return deferred.promise;
                        }
                    }
                })

                .state('EmpDashboard',{
                    url: '/employees/dashboard',
                    templateUrl: '/partials/employees/employeedashboard',
                    controller: 'BookingController',
                    controllerAs: 'ctrlBooking',
                    resolve: {
                        userBookings: function (BookingService) {
                            console.log('Load all user bookings');
                            var empId = BookingService.getLoggedUser().idEmployee;
                            BookingService.getBookingPerUser(empId);
                        }
                    }
                })

                .state('EmpUpcomingBooking',{
                    url: '/employees/upcoming',
                    templateUrl: '/partials/employees/empupcomingbooking',
                    controller: 'BookingController',
                    controllerAs: 'ctrlBooking',
                    resolve: {
                        offices: function ($q, BookingService) {
                            console.log('Load all bookings');
                            var deferred = $q.defer();
                            BookingService.loadUpcomingBookings()
                                .then(deferred.resolve,deferred.resolve);
                            return deferred.promise;
                        }
                    }
                })

                .state('EmpAddBooking',{
                    url: '/employees/addbooking',
                    templateUrl: '/partials/employees/empaddbooking',
                    controller: 'BookingController',
                    controllerAs: 'ctrlBooking',
                    resolve: {
                        offices: function ($q, BookingService) {
                            var deferred = $q.defer();
                            BookingService.loadOffices()
                                .then(deferred.resolve, deferred.resolve);
                            return deferred.promise;
                        }
                    }
                })

                .state('EmpAvailRooms',{
                    url: '/employees/availableroom',
                    templateUrl: '/partials/employees/empshowavailableroom',
                    controller: 'BookingController',
                    controllerAs: 'ctrlBooking'
                })

                .state('EmpExtendSuccess',{
                    url: '/employees/extendsuccess',
                    templateUrl: '/partials/employees/empextendsuccess',
                    controller: 'BookingController',
                    controllerAs: 'ctrlBooking'
                })

                .state('EmpExtendUnsuccess',{
                    url: '/employees/extendunsuccesfull',
                    templateUrl: '/partials/employees/empextenddiverted',
                    controller: 'BookingController',
                    controllerAs: 'ctrlBooking'
                })

                ;

       $urlRouterProvider.otherwise('/');}]);

app.directive("ngUploadChange",function(){
    return{
        scope:{
            ngUploadChange:"&"
        },
        link:function($scope, $element, $attrs){
            $element.on("change",function(event){
                $scope.ngUploadChange({$event: event})
            })
            $scope.$on("$destroy",function(){
                $element.off();
            });
        }
    }
});

// the following method will run at the time of initializing the module. That
// means it will run only one time.
app.run(function(LoginService, $rootScope, $state, $sessionStorage,$http) {
    // For implementing the authentication with ui-router we need to listen the
    // state change. For every state change the ui-router module will broadcast
    // the '$stateChangeStart'.
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        // checking the user is logged in or not
        console.log('To State ='+toState.name);

        // getting data session token & user
        console.log("SESSION : " + $sessionStorage.token + " - " + $sessionStorage.user);

        if($sessionStorage.user!=undefined && $sessionStorage.token!=null) {
            $http.defaults.headers.common['Authorization'] = $sessionStorage.token;
            LoginService.user = $sessionStorage.user;
        }

        if(toState.data!=null)
            console.log('To State Data Role ='+toState.data.role);
        else
            console.log('ToState Data Role null.');

        if (!LoginService.user) {
            //Ini buat ngecek user login belum, kalau belum dia bakal masuk ke dalam blok if nya
            if (toState.name != 'login' && toState.name != 'checkroom' && toState.name != 'AvailRooms' && toState.name != 'checkticket' && toState.name != 'showticket' && toState.name != 'register' && toState.name != 'home' && toState.name != 'showbooking') {
                //selain akses halaman login atau register dia bakal masuk ke blok ini
                event.preventDefault(); //ini buat ngestop paksa (contoh mau kehalamaan office, trus di stop paksa
                $state.go('login'); // dipaksa ke halaman login dulu
            }
        } else {
            // checking the user is authorized to view the states
            if (toState.data && toState.data.role) {
                var hasAccess = false;
                    var role = LoginService.user.role;
                    if (toState.data.role == role) {
                        hasAccess = true;
                    }
                if (!hasAccess) {
                    event.preventDefault();
                    $state.go('access-denied');
                }
            }
        }
    });
});
