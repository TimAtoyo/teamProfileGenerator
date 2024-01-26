const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./src/page-template.js");

// array of questions for user
const questions = [
        // When a user starts the application then they are prompted to enter the team manager’s:
// Name
// Employee ID
// Email address
// Office number
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
            if(isNaN(answer)){
                return 'Please Enter a number';
            }
            return true
        }
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
            if(isNaN(answer)){
                return 'Please Enter a number'
            }
            return true
        }
      },
    //   {
    //     type: "input",
    //     name: "learning input",
    //     message: "What did you learn?",
    //     default: "Na",
    //   },
    //   Instalation
    //   {
    //     type: "input",
    //     name: "instalSteps input",
    //     message: "What are the steps required to install your project? /n Provide a step-by-step description of how to get the development environment running.",
    //     default: "Na",
    //   },
    //   {
    //     type: "input",
    //     name: "instructions input",
    //     message: "Provide instructions and examples for use.",
    //     default: "Na",
    //   },
    //   {
    //     type: "list",
    //     name: "licenses input",
    //     message: "Whats your go to language?",
    //     default: "MIT License",
    //     choices: ["Apache License 2.0", "GNU GPLv3 License", "MIT License", "ISC License"],
    //   },
    //   {
    //     type: "checkbox",
    //     name: "languages input",
    //     message: "Whats languages are used on your project?",
    //     default: "JavaScript",
    //     choices: ["HTML", "JavaScript", "C", "Python", "Other"],
    //   },
    //   {
    //     type: "input",
    //     name: "test input",
    //     message: "Instructions for testing",
    //     default: "npm test",
    //   },
  ];
  



// // function to write README file
// function writeToFile(fileName, data) {
//   writeFile(fileName, generateMarkdown(data), (err) =>
//   // TODO: Describe how this ternary operator works
//   err ? console.error(err) : console.log("Commit logged!"), console.log(generateMarkdown(data))
// );

// }

// function to initialize program
function init() {

inquirer
.prompt(questions)
.then((answers) => {
    // Answer variables 
    // Manager
    var manName = answers.managerName;
    var manId = answers.ManagerId;
    var manEmail = answers.managerEmail;
    var manOfficeNo = answers.managerOfficeNo;

  // Variables of vales from user feedback!

console.log(manager);
  
// writeToFile(fileName, data)

})
.catch((error) => {
  if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
});
}

// function call to initialize program
init();


// TODO: Write Code to gather information about the development team members, and render the HTML file.





// When a user enters those requirements then the user is presented with a menu with the option to:
// Add an engineer
// Add an intern
// Finish building the team


// When a user selects the engineer option then a user is prompted to enter the following and then the user is taken back to the menu:
// Engineer's Name
// ID
// Email
// GitHub username

// When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
// Intern’s name
// ID
// Email
// School


// When a user decides to finish building their team then they exit the application, and the HTML is generated.

