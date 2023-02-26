const Employee = require("./employee.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return `Github account is: ${this.github}`;
  }

  getRole() {
    return this.constructor.name;
  }
}

module.exports = Engineer;
