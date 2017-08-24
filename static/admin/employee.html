<div class="wrapper">
    <div class="sidebar" data-color="blue" data-image="../assets/img/sidebar-4.jpg">
        <div class="sidebar-wrapper">
            <div class="logo">
                <a href="#" class="simple-text">
                    <strong>ADMIN | BOOKING ROOM</strong>
                </a>
            </div>
            <!--NAVIGATION-->
            <ul class="nav">
                <li>
                    <a href="dashboard">
                        <i class="pe-7s-graph"></i>
                        <p>Dashboard</p>
                    </a>
                </li>
                <li>
                    <a href="rooms">
                        <i class="pe-7s-note2"></i>
                        <p>Room Manage</p>
                    </a>
                </li>
                <li>
                    <a href="offices">
                        <i class="pe-7s-note2"></i>
                        <p>Office Manage</p>
                    </a>
                </li>
                <li class="active">
                    <a href="employees">
                        <i class="pe-7s-note2"></i>
                        <p>Employee Manage</p>
                    </a>
                </li>
                <li>
                    <a href="bookings">
                        <i class="pe-7s-note2"></i>
                        <p>Booking Manage</p>
                    </a>
                </li>
                <li class="active-pro">
                    <a href="#" ng-click="ctrlEmployee.logout()">
                        <i class="pe-7s-user"></i>
                        <p>LOG OUT</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <div class="main-panel">
        <div class="content">
            <div class="container-fluid">
                <div class="row">

                    <div class="col-md-12">
                        <div class="card card-plain">
                            <div class="header">
                                <h3 class="title"><strong>EMPLOYEE DATA</strong></h3><br/>
                                <p class="category"><h5>This is employee data from Blibli.com. You can manage to add, delete and restore data employee.</h5></p>
                            </div>
                            <br/><br/>
                            <div class="content table-responsive table-full-width">
                                <table class="table table-hover table-striped data">
                                    <thead>
                                    <tr>
                                        <th width="100">No.</th>
                                        <th width="200">NAME</th>
                                        <th width="250">EMAIL</th>
                                        <th width="180">ROLE</th>
                                        <th width="180">STATUS</th>
                                        <th width="100"></th>
                                        <th width="100"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr ng-repeat="u in ctrlEmployee.getAllEmployees()">
                                        <!--<td>{{u.idEmployee}}</td>-->
                                        <td>{{$index +1}}</td>
                                        <td>{{u.name}}</td>
                                        <td>{{u.email}}</td>
                                        <td>{{u.role}}</td>
                                        <td>
                                            <div ng-switch on="{{u.status}}">
                                                <div ng-switch-when="1">Active</div>
                                                <div ng-switch-when="0">Deactive</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div ng-switch on="{{u.status}}">
                                                <div ng-switch-when="1">
                                                    <button type="button" ng-click="ctrlEmployee.editEmployee(u.idEmployee)" data-toggle="modal" data-target="#myModalAdd" class="btn btn-primary custom-width">Edit</button>
                                                </div>
                                                <div ng-switch-when="0">

                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div ng-switch on="{{u.status}}">
                                                <div ng-switch-when="1">
                                                    <button type="button" ng-click="ctrlEmployee.removeEmployee(u.idEmployee)" class="btn btn-danger custom-width">Delete</button>
                                                </div>
                                                <div ng-switch-when="0">
                                                    <button type="button" ng-click="ctrlEmployee.removeEmployee(u.idEmployee)" class="btn btn-primary custom-width">Restore</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModalAdd">Add New Data</button><br/><br/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="myModalAdd" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Add / Update Data</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" ng-submit="ctrlEmployee.submit()" name="myForm">
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Name :</label>
                        <div class="col-sm-8">
                            <input type="text" ng-model="ctrlEmployee.employee.name" id="uname" class="username form-control input-sm" placeholder="Enter new employee name" style="width:200px;"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Email :</label>
                        <div class="col-sm-8">
                            <input type="text" ng-model="ctrlEmployee.employee.email" id="email" class="username form-control input-sm" placeholder="Enter new employee email" style="width:300px;"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Password :</label>
                        <div class="col-sm-8">
                            <input type="password" ng-model="ctrlEmployee.employee.password" id="password" class="username form-control input-sm" placeholder="Enter new employee password" style="width:200px;"/>
                        </div>
                    </div>

                    <input type="hidden" ng-model="ctrlEmployee.employee.status" ng-init="ctrlEmployee.employee.status=1" id="status" class="username form-control input-sm" style="width:200px;"/>

                    <div class="form-group">
                        <label class="col-sm-3 control-label">Role :</label>
                        <div class="col-sm-8">
                            <!--<input type="text" ng-model="ctrlEmployee.employee.role" id="role" class="username form-control input-sm" placeholder="Enter new employee role" style="width:200px;"/>-->
                           <select class="username form-control input-sm" ng-model="ctrlEmployee.employee.role" required>
                                <option value="Admin">Admin</option>
                                <option value="Employee">Employee</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group modal-footer">
                        <input type="submit"  value="{{!ctrlEmployee.employee.id ? 'Add' : 'Update'}}" class="btn btn-primary btn-sm" ng-disabled="myForm.$invalid || myForm.$pristine">
                    </div>
                </form>
            </div>
        </div>

    </div>
</div>

<script type="text/javascript">
    var app = angular.module('bookingApp', [])
    app.controller('RoleController', function ($scope, $window) {
        $scope.Roles = [{
            Id: 1,
            Name: 'Admin'
        }, {
            Id: 2,
            Name: 'Employee'
        }];

        $scope.GetValue = function (role) {
            var roleId = $scope.ddlRoles;
            var roleName = $.grep($scope.Roles, function (role) {
                return role.Id == roleId;
            })[0].Name;
            $window.alert("Selected Value: " + roleId + "\nSelected Text: " + roleName);
        }
    });
</script>
