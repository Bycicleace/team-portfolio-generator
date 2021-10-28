const Employee = require("../lib/Employee.js");

test("Create an Intern object", () => {
    const intern = new Intern("Dave",1,"dave@gmail.com","Stanford University");

    expect(this.name).toBe("Dave");
    expect(this.id).toBe(1);
    expect(this.email).toBe("dave@gmail.com");
    expect(this.school).toBe("Stanford University");
})

test("getName returns name", () => {
    const intern = new Intern("Dave",1,"dave@gmail.com","Stanford University");

    expect(intern.getName()).toBe(intern.name);
})

test("getId returns intern id", () => {
    const intern = new Intern("Dave",1,"dave@gmail.com","Stanford University");

    expect(intern.getId()).toBe(intern.id);
})

test("getEmail returns email address", () => {
    const intern = new Intern("Dave",1,"dave@gmail.com","Stanford University");

    expect(intern.getEmail()).toBe(intern.email);
})

test("getRole returns 'Intern'", () => {
    const intern = new Intern("Dave",1,"dave@gmail.com","Stanford University");

    expect(intern.getRole()).toBe("Intern");
})

test("getSchool returns school name", () => {
    const intern = new Intern("Dave",1,"dave@gmail.com","Stanford University");

    expect(intern.getSchool()).toBe("Stanford University");
})