const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name='',id=-1,email='',school='') {
        super(name,id,email);
        this.school = school;
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;