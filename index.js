const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const internQuestions = [
  {
    type: "input",
    name: "internsName",
    message: "What is your name?",
    default: "Interns Name Default",
  },
  {
    type: "input",
    name: "internsId",
    message: "What is your Id?",
    validate: (answer) => {
      if (isNaN(answer)) {
        return "Please Enter a number";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "internsEmail",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "internsSchool",
    message: "where did you go to school?",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "EngineerName",
    message: "What is your name?",
    default: "Engineer Name Default",
  },
  {
    type: "input",
    name: "EngineerId",
    message: "What is your Id?",
    validate: (answer) => {
      if (isNaN(answer)) {
        return "Please Enter a number";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "EngineerEmail",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "GitHubUsername",
    message: "What is your GitHub user name?",
  },
];

const subMembersChoice = [
  {
    type: "list",
    name: "managerTeamChoice",
    message: "What type of employee would you like to add?",
    choices: ["Add an engineer", "Add an intern", "Finish building the team"],
  },
];

const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "What is your name?",
    default: "Manager Default",
  },
  {
    type: "input",
    name: "ManagerId",
    message: "What is your Id?",
    validate: (answer) => {
      if (isNaN(answer)) {
        return "Please Enter a number";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "managerOfficeNo",
    message: "What is your office number?",
    validate: (answer) => {
      if (isNaN(answer)) {
        // return "Please Enter a number";
      }
      return true;
    },
  },
];

// function to initialize program
const initQuestions = function () {
  inquirer
    .prompt(managerQuestions)
    .then((answers) => {
      // Answer variables
      // Manager
      var manName = answers.managerName;
      var manId = answers.ManagerId;
      var manEmail = answers.managerEmail;
      var manOfficeNo = answers.managerOfficeNo;
      var manager = new Manager(manName, manId, manEmail, manOfficeNo);
      console.log(`Manger object create: ${manager}`);
      createTeamMember();
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log(error.isTtyError);
      } else {
        // Something else went wrong
        console.log("Somethingelse went wrong");
      }
    });
};

const createIntern = function () {
  inquirer
    .prompt(internQuestions)
    .then((answers) => {
      var internsName = answers.internsName;
      var internsId = answers.internsId;
      var nternsEmail = answers.nternsEmail;
      var internsSchool = answers.internsSchool;
      var intern = new Intern(
        internsName,
        internsId,
        nternsEmail,
        internsSchool
      );
      console.log(intern);
      createTeamMember();
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log(error.isTtyError);
      } else {
        // Something else went wrong
        console.log("Somethingelse went wrong");
      }
    });
};
// Engineer
const createEngineer = function () {
  inquirer
    .prompt(engineerQuestions)
    .then((answers) => {
      var EngineerName = answers.EngineerName;
      var EngineerId = answers.EngineerId;
      var EngineerEmail = answers.EngineerEmail;
      var GitHubUsername = answers.GitHubUsername;
      var engineer = new Engineer(
        EngineerName,
        EngineerId,
        EngineerEmail,
        GitHubUsername
      );
      console.log(engineer);
      createTeamMember();
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log(error.isTtyError);
      } else {
        // Something else went wrong
        console.log("Somethingelse went wrong");
      }
    });
};

// Team Member 
const createTeamMember = function () {
  inquirer
    .prompt(subMembersChoice)
    .then((answers) => {
      if (answers.managerTeamChoice === "Add an engineer") {
        createEngineer();
      } else if (answers.managerTeamChoice === "Add an intern") {
        createIntern();
      } else if (answers.managerTeamChoice === "Finish building the team") {
        console.log("Lets build your team");
        process.exit(0);
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log(error.isTtyError);
      } else {
        // Something else went wrong
        console.log("Somethingelse went wrong");
      }
    });
};
initQuestions();
