const Employee = require("../lib/Employee.js");

test("Create a new Employee", () => {
    const employee = new Employee("Jack");

    expect(employee.name).toBe("Jack");
    expect(employee.id).toBe(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe("Employee");
})