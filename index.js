const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./src/page-template.js");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Create team array
const team = [];

// Initial manager questions
function promptManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
        // validate: emptyValidate,
      },
      {
        type: "input",
        name: "id",
        message: "What is the team manager's employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      team.push(manager);
      promptMenu();
    });
}

// Menu to decide wether to add Engineer, Intern, or to finish the building process
function promptMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: [
          "Add an engineer",
          "Add an intern",
          "Finish building the team",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.menu) {
        case "Add an engineer":
          promptEngineer();
          break;
        case "Add an intern":
          promptIntern();
          break;
        default:
          generateHTML();
          break;
      }
    });
}

// If engineer selected ask these questions
function promptEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      team.push(engineer);
      promptMenu();
    });
}

// If intern selected ask these questions
function promptIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What school does the intern attend?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      team.push(intern);
      promptMenu();
    });
}

// Use fs.writeFile to create the HTML file. outputPath gives directory and file name, render(team) creates the html markup, and errorHandler prints any errors to the log.
function generateHTML() {
  fs.writeFile(outputPath, render(team), errorHandler);
}

// Errors from generateHTML
function errorHandler(error) {
  if (error) {
    console.log(error);
  }
}

// Validation working but not continuing question flow
function emptyValidate(input) {
  if (!input) {
    return "Please enter something";
  }
}

// Runs the programme
promptManager();
