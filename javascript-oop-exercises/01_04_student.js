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

var foo = createStudent('Foo', '1st');

foo.info();
// 'Foo is a 1st year student'

console.log(foo.listCourses());
// [];

foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
console.log(foo.listCourses());
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]

foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun Course; Remember to study for algebra"

foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun Course; Remember to study for algebra"
// "Advance Math: Difficult Subject"

foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun Course"
// "Advance Math: Difficult Subject"
