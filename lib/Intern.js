const Employee = require("./employee.js");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return `School is: ${this.school}`;
  }

  getRole() {
    return this.constructor.name;
  }
}

module.exports = Intern;
