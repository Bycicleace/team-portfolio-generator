const Manager = require("./Manager.js");
const Engineer = require("./Engineer.js");
const Intern = require("./Intern.js");
const HTML = require("./HTML.js");
const inquirer = require("inquirer");

class Prompts {
    people = [];

    startPrompts() {
        // Prompt for Manager, then dynamically for the rest
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Please enter the Manager's name: "
                },
                {
                    type: "input",
                    name: "id",
                    message: "Please enter the Manager's Employee ID: "
                },
                {
                    type: "input",
                    name: "email",
                    message: "Please enter the Manager's email address: "
                },
                {
                    type: "input",
                    name: "officeNumber",
                    message: "Please enter the Manager's office number: "
                }
            ])
            .then((data) => {
                this.people.push(new Manager(data.name,data.id,data.email,data.officeNumber));
                this.promptHandler();
            })
    }

    promptHandler() {
        inquirer
            .prompt({
                type: "list",
                message: "Which type of Employee would you like to add?",
                name: "action",
                choices: ['Engineer','Intern','Done']
            })
            .then (({ action }) => {
                if (action === "Engineer") {
                    return this.promptEngineer();
                } else if (action === "Intern") {
                    return this.promptIntern();
                } else if (action === "Done") {
                    // All prompts are done. Generate HTML page.
                    const page = new HTML().buildPage(this.people);
                }
            })
    }

    promptEngineer() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Please enter the name of the Engineer: "
                },
                {
                    type: "input",
                    name: "id",
                    message: "Please enter the Engineer's employee ID: "
                },
                {
                    type: "input",
                    name: "email",
                    message: "Please enter the Engineer's email address: "
                },
                {
                    type: "input",
                    name: "github",
                    message: "Please enter the Engineer's GitHub Username: "
                }
            ])
            .then((data) => {
                this.people.push(new Engineer(data.name, data.id, data.email, data.github));
                this.promptHandler();
            })
    }

    promptIntern() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Please enter the name of the Intern: "
                },
                {
                    type: "input",
                    name: "id",
                    message: "Please enter the Intern's employee ID: "
                },
                {
                    type: "input",
                    name: "email",
                    message: "Please enter the Intern's email address: "
                },
                {
                    type: "input",
                    name: "school",
                    message: "Please enter the name of the school the Intern is attending: "
                }
            ])
            .then((data) => {
                this.people.push(new Intern(data.name, data.id, data.email, data.school));
                this.promptHandler();
            })
    }
}

module.exports = Prompts;