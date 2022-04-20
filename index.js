/* Variables/Required */
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template.js")

/* Team Array */
teamArray = [];

/* App function */
function runApp () {
    /* Select Team Make-up*/
    function createTeam () {
      inquirer.prompt([{
        type: "list",
        message: "What type of employees would you like to add to your team?",
        name: "addEmployeePrompt",
        choices: ["Manager", "Engineer", "Intern", "No more employees to add."]
      }]).then(function (userInput) {
        switch(userInput.addEmployeePrompt) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
  
          default:
            htmlBuilder();
        }
      })
    }
}