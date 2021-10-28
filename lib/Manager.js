const Employee = require("../lib/Employee");

class Manager extends Employee {

    constructor(name='',id=-1,email='',officeNumber=-1) {
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager