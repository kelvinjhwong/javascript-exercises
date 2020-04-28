function cancelSchedule(scheduleId) {
  var cancelScheduleRequest = new XMLHttpRequest();
  cancelScheduleRequest.open('DELETE', `/api/schedules/${String(scheduleId)}`);

  cancelScheduleRequest.addEventListener('load', function () {
    var status = this.status;

    switch (status) {
      case 204:
        alert('The schedule has been deleted.');
        break;
      default:
        alert(this.response);
        break;
    }
  });

  cancelScheduleRequest.send();
}

function cancelBooking(bookingId) {
  var cancelBookingRequest = new XMLHttpRequest();
  cancelBookingRequest.open('PUT', `/api/bookings/${String(bookingId)}`);

  cancelBookingRequest.addEventListener('load', function () {
    var status = this.status;

    switch (status) {
      case 204:
        alert('The booking has been cancelled');
        break;
      case 404:
        alert(this.response);
        break;
    }
  });

  cancelBookingRequest.send();
}