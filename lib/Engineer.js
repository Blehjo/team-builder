const Employee = require("./Employee");

class Engineer{
    constructor(school) {
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern'
    }
}