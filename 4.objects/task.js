function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
   if (this.marks) {
    this.marks.push(...marksToAdd);
  }
}



Student.prototype.getAverage = function () {
   if (this.marks && this.marks.length) {
    let sum = this.marks.reduce((acc, cur) => acc + cur);
    let avg = sum / this.marks.length;
    return +avg.toFixed(1);
  } else {
    return 0;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
  
}

