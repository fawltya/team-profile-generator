// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return `Name is: ${this.name}`;
  }

  getId() {
    return `ID is: ${this.id}`;
  }

  getEmail() {
    return `Email is: ${this.email}`;
  }

  getRole() {
    return this.constructor.name;
  }
}
