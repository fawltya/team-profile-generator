// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./employee.js");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return `Office number is: ${this.officeNumber}`;
  }

  getRole() {
    return this.constructor.name;
  }
}

module.exports = Manager;
