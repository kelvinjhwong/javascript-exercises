function retrieveSchedules() {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:3000/api/schedules');
  request.timeout = 5000;
	request.responseType = 'json';
    
  request.addEventListener('load', function () {
    var schedules = request.response;
	  var availableSchedules = schedules.filter(function (schedule) {
		  return schedule.student_email === null;
    });
	  var tally;
	
    if (availableSchedules.length === 0) {
      alert('There are currently no schedules available for booking.');
    } else {
      tally = {};

      availableSchedules.forEach(function (schedule) {
        tally[`staff ${schedule.staff_id}`] =
          tally[`staff ${schedule.staff_id}`] || 0;

        tally[`staff ${schedule.staff_id}`] += 1;
      });
      
      alert(Object.keys(tally).map(function (staffKey) {
        return `${staffKey}: ${tally[staffKey]}`;
      }).join('\n'));
    }
  });
  
  request.addEventListener('timeout', function () {
    alert('Request timed out. Please try again.');
  });

  request.addEventListener('loadend', function () {
    alert('The request has been completed.');
  });

  request.send();
}

retrieveSchedules();

// ------------------------------------------------------------------

function retrieveSchedules() {
  var staffIds = [];
  var staffMembersRequest = new XMLHttpRequest();
  var schedulesRequest = new XMLHttpRequest();
  var tally = {};

  staffMembersRequest.responseType = 'json';
  staffMembersRequest.timeout = 5000;
  staffMembersRequest.open('GET', 'http://localhost:3000/api/staff_members');

  schedulesRequest.timeout = 5000;

  staffMembersRequest.addEventListener('load', function () {
    var index = 0;

    staffIds = this.response.map(function (staffMember) {
      return staffMember.id;
    });

    schedulesRequest.addEventListener('load', function () {
      var schedules = this.response;
      var availableSchedules = schedules.filter(function (schedule) {
        return schedule.student_email === null;
      });
  
      if (availableSchedules.length > 0) {
        tally[`staff ${staffIds[index]}`] = availableSchedules.length;
      }

      index += 1;

      if (index < staffIds.length) {
        schedulesRequest.open('GET', `http://localhost:3000/api/schedules/${staffIds[index]}`);
        schedulesRequest.responseType = 'json';
        schedulesRequest.send();
      } else {
        if (Object.keys(tally).length === 0) {
          alert('There are currently no schedules available for booking.');
        } else {
          alert(Object.keys(tally).map(function (staffKey) {
            return `${staffKey}: ${tally[staffKey]}`;
          }).join('\n'));
        }

        alert('The request has been completed.');
      }
    });

    schedulesRequest.open('GET', `http://localhost:3000/api/schedules/${staffIds[index]}`);
    schedulesRequest.responseType = 'json';
    schedulesRequest.send();
  });

  staffMembersRequest.addEventListener('timeout', function () {
    alert('Request timed out. Please try again.');
  });

  schedulesRequest.addEventListener('timeout', function () {
    alert('Request timed out. Please try again.');
  });

  staffMembersRequest.send();
}

retrieveSchedules();
