const Employee = require("../lib/Employee.js");

test("Create a new Employee", () => {
    const employee = new Employee("Jack",1,"jack@gmail.com");

    expect(employee.name).toBe("Jack");
    expect(employee.id).toBe(1);
    expect(employee.email).toEqual("jack@gmail.com");
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe("Employee");
})