// Variable using Employee.js
const Employee = require("./Employee");

// Engineer class
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

}

// Export
module.exports = Engineer;