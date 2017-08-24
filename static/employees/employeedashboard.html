<div class="wrapper">
    <div class="sidebar" data-color="blue" data-image="../assets/img/sidebar-4.jpg">
        <div class="sidebar-wrapper">
            <div class="logo">
                <a href="#" class="simple-text">
                    <strong>EMP | BOOKING ROOM</strong>
                </a>
            </div>
            <!--NAVIGATION-->
            <ul class="nav">
                <li>
                    <a href="/employees/upcoming">
                        <i class="pe-7s-note2"></i>
                        <p>Upcoming Bookings</p>
                    </a>
                </li>
                <li class="active">
                    <a href="/employees/dashboard">
                        <i class="pe-7s-graph"></i>
                        <p>Your Bookings</p>
                    </a>
                </li>
                <li>
                    <a href="/employees/addbooking">
                        <i class="pe-7s-note2"></i>
                        <p>Add Booking</p>
                    </a>
                </li>
                <li class="active-pro">
                    <a href="#" ng-click="ctrlBooking.logout()">
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
                                <h3 class="title"><strong>YOUR BOOKING</strong></h3><br/>
                                <p class="category"><h5>This is Your Past and future Booking Data</h5></p>
                            </div>
                            <br/><br/>

                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="#upcoming">Upcoming</a></li>
                                <li><a data-toggle="tab" href="#past">Past</a></li>
                                <li><a data-toggle="tab" href="#cancel">Cancelled</a></li>
                            </ul>

                            <div class="tab-content">
                                <div id="upcoming" class="tab-pane fade in active">
                                    <div class="content table-responsive table-full-width">
                                        <table class="table table-hover table-striped data">
                                            <thead>
                                            <tr>
                                                <th width="180">MEETING DATE</th>
                                                <th width="200">START</th>
                                                <th width="200">END</th>
                                                <th width="200">ROOM</th>
                                                <th width="200">SUBJECT</th>
                                                <th width="200">DESCRIPTION</th>
                                                <th width="100"></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr ng-repeat="u in ctrlBooking.getAllBookingPerUser()">
                                                <!--<td>{{u.idEmployee}}</td>-->
                                                    <td ng-if-start="!ctrlBooking.getBookingHistory(u.dateMeeting,u.endTime) && u.status==1">{{u.dateMeeting}}</td>
                                                    <td>{{u.startTime}}</td>
                                                    <td>{{u.endTime}}</td>
                                                    <td>{{u.room.name}}</td>
                                                    <td>{{u.subject}}</td>
                                                    <td>{{u.description}}</td>
                                                <td><button type="button" ng-click="ctrlBooking.cancelBooking(u.idBooking)" class="btn btn-danger custom-width">Cancel</button></td>
                                                <td ng-if-end="!ctrlBooking.getBookingHistory(u.dateMeeting,u.endTime)">
                                                    <button type="button" ng-click="ctrlBooking.extendId = u.idBooking" data-toggle="modal" data-target="#myModalExtend" class="btn btn-primary custom-width">Extend</button></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div id="past" class="tab-pane fade">
                                    <div class="content table-responsive table-full-width">
                                        <table class="table table-hover table-striped data">
                                            <thead>
                                            <tr>
                                                <th width="180">MEETING DATE</th>
                                                <th width="200">START</th>
                                                <th width="200">END</th>
                                                <th width="200">ROOM</th>
                                                <th width="200">SUBJECT</th>
                                                <th width="200">DESCRIPTION</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr ng-repeat="u in ctrlBooking.getAllBookingPerUser()">
                                                <!--<td>{{u.idEmployee}}</td>-->

                                                <td  ng-if-start="ctrlBooking.getBookingHistory(u.dateMeeting,u.endTime)">{{u.dateMeeting}}</td>
                                                <td>{{u.startTime}}</td>
                                                <td>{{u.endTime}}</td>
                                                <td>{{u.room.name}}</td>
                                                <td>{{u.subject}}</td>
                                                <td ng-if-end="ctrlBooking.getBookingHistory(u.dateMeeting,u.endTime)">{{u.description}}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div id="cancel" class="tab-pane fade">
                                        <div class="content table-responsive table-full-width">
                                            <table class="table table-hover table-striped data">
                                                <thead>
                                                <tr>
                                                    <th width="180">MEETING DATE</th>
                                                    <th width="200">START</th>
                                                    <th width="200">END</th>
                                                    <th width="200">ROOM</th>
                                                    <th width="200">SUBJECT</th>
                                                    <th width="200">DESCRIPTION</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr ng-repeat="u in ctrlBooking.getAllBookingPerUser()">
                                                    <!--<td>{{u.idEmployee}}</td>-->
                                                    <div>
                                                    <td ng-if-start="u.status == 0">{{u.dateMeeting}}</td>
                                                    <td>{{u.startTime}}</td>
                                                    <td>{{u.endTime}}</td>
                                                    <td>{{u.room.name}}</td>
                                                    <td>{{u.subject}}</td>
                                                    <td ng-if-end="u.status == 0">{{u.description}}</td>
                                                    </div>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> <!-- row -->
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="myModalExtend" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Extending Booking Time</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" ng-submit="ctrlBooking.extendBooking(ctrlBooking.extendId,ctrlBooking.booking.endTime)" name="myForm">
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Insert New Time for Extend</label>
                        <div class="col-sm-8">
                            <!--<input type="text" class="username form-control input-sm" required />-->
                            <select class="username form-control input-sm" ng-model="ctrlBooking.booking.endTime"  id="endTime" ng-model="ctrlBooking.searchVar.startTime" placeholder="Enter New Time To extend Your Booking"  required>
                                <option value="08:00:00">08.00</option>
                                <option value="09:00:00">09.00</option>
                                <option value="10:00:00">10.00</option>
                                <option value="11:00:00">11.00</option>
                                <option value="12:00:00">12.00</option>
                                <option value="13:00:00">13.00</option>
                                <option value="14:00:00">14.00</option>
                                <option value="15:00:00">15.00</option>
                                <option value="16:00:00">16.00</option>
                                <option value="17:00:00">17.00</option>
                                <option value="18:00:00">18.00</option>
                                <option value="19:00:00">19.00</option>
                                <option value="20:00:00">20.00</option>
                                <option value="21:00:00">21.00</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group modal-footer">
                        <input type="submit" ng-model="ctrlBooking.booking.endTime" value="Extend" class="btn btn-primary btn-sm" ng-disabled="myForm.$invalid || myForm.$pristine">
                    </div>
                </form>

            </div>
        </div>

    </div>
</div>