const Employee = require("../lib/Employee.js");

test("Create a new Employee", () => {
    const employee = new Employee("Jack",1,"jack@gmail.com");

    expect(employee.name).toBe("Jack");
    expect(employee.id).toBe(1);
    expect(employee.email).toEqual("jack@gmail.com");
})

test("getName returns name", () => {
    const employee = new Employee("Jack",1,"jack@gmail.com");

    expect(employee.getName()).toBe(employee.name);
})

test("getId returns employee id", () => {
    const employee = new Employee("Jack",1,"jack@gmail.com");

    expect(employee.getId()).toBe(employee.id);
})

test("getEmail returns email address", () => {
    const employee = new Employee("Jack",1,"jack@gmail.com");

    expect(employee.getEmail()).toBe(employee.email);
})

test("getRole returns 'Employee'", () => {
    const employee = new Employee("Jack",1,"jack@gmail.com");

    expect(employee.getRole()).toBe("Employee");
})