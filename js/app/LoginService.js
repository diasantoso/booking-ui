angular.module('bookingApp')
// Creating the Angular Service for storing logged user details
    .service('LoginService', function() {
        return {
            user : null
        }
    });