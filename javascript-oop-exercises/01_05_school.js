function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],

    info: function () {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    addCourse: function (course) {
      this.courses.push(course);
    },

    listCourses: function () {
      return this.courses;
    },

    addNote: function (code, note) {
      var course = this.courses.find((course) => course.code === code);

      if (course !== undefined) {
        if (course.note === undefined) {
          course.note = note;
        } else {
          course.note += `; ${note}`;
        }
      }
    },

    updateNote: function (code, note) {
      var course = this.courses.find((course) => course.code === code);

      if (course !== undefined) {
        course.note = note;
      }
    },

    viewNotes: function () {
      this.courses.forEach((course) => {
        if (course.note !== undefined) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },
  };
}

var foo = {
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
};

var bar = {
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
};

var qux = {
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
   ],
};

var school = {
  students: [foo, bar, qux],

  addStudent: function (name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      return this.students.push(createStudent(name, year));
    } else {
      console.log('Invalid Year');
    }
  },

  enrollStudent: function (studentName, courseName, courseCode) {
    var student = this.students.find((student) => student.name === studentName);

    if (student === undefined) {
      console.log('There are no students with this name!');
      return;
    }

    student.addCourse({ name: courseName, code: courseCode });
  },

  addGrade: function (studentName, courseName, grade) {
    var student = this.students.find((student) => student.name === studentName);

    if (student === undefined) {
      console.log('There are no students with this name!');
      return;
    }

    var course =
      this.students.courses.find((course) => course.name === courseName);

    if (course === undefined) {
      console.log('There are no courses with this name!');
      return;
    }

    course.grade = grade;
  },

  getReportCard: function (student) {
    // var student = this.students.find((student) => student.name === studentName);

    // if (student === undefined) {
    //   console.log('There are no students with this name!');
    //   return;
    // }

    if (student.courses.length === 0) {
      console.log(`${student.name} has not enrolled in any courses yet.`);
      return;
    }

    student.courses.forEach((course) => {
      if (course.grade === undefined) {
        console.log(`${course.name}: In progress`);
      } else {
        console.log(`${course.name}: ${course.grade}`);
      }
    });
  },

  courseReport: function (courseName) {
    var courseGrades = [];
    var courseAverage;

    this.students.forEach((student) => {
      var course = student.courses.find((course) => course.name === courseName);
      var courseGrade;

      if (course !== undefined) {
        if (course.grade !== undefined) {
          courseGrade = {};
          courseGrade.studentName = student.name;
          courseGrade.grade = course.grade;
          courseGrades.push(courseGrade);
        }
      }
    });

    if (courseGrades.length > 0) {
      console.log(`=${courseName} Grades=`);

      courseAverage = courseGrades.reduce((sum, courseGrade) => {
        console.log(`${courseGrade.studentName}: ${courseGrade.grade}`);
        return sum + courseGrade.grade;
      }, 0) / courseGrades.length;

      console.log('---');
      console.log(`Course Average: ${String(courseAverage)}`);
    }
  },
};

school.getReportCard(foo);
// Math: 95
// Advanced Math: 90
// Physics: In progress

school.courseReport('Math');
// =Math Grades=
// foo: 95
// bar: 91
// qux: 93
// ---
// Course Average: 9

school.courseReport('Advanced Math');
// =Advanced Math Grades=
// foo: 90
// qux: 90
// ---
// Course Average: 9

school.courseReport('Physics');
// undefined
