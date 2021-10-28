const Manager = require("../lib/Manager.js");

test("Creates new Manager object", () => {
    const manager = new Manager("Dave",1,"dave@gmail.com",12);

    expect(manager.name).toBe("Dave");
    expect(manager.id).toBe(1);
    expect(manager.email).toBe("dave@gmail.com");
    expect(manager.officeNumber).toBe(12);
})

test("getName returns name", () => {
    const manager = new Manager("Dave",1,"dave@gmail.com",12);

    expect(manager.getName()).toBe(manager.name);
})

test("getId returns manager id", () => {
    const manager = new Manager("Dave",1,"dave@gmail.com",12);

    expect(manager.getId()).toBe(manager.id);
})

test("getEmail returns email address", () => {
    const manager = new Manager("Dave",1,"dave@gmail.com",12);

    expect(manager.getEmail()).toBe(manager.email);
})

test("getRole returns 'Manager'", () => {
    const manager = new Manager("Dave",1,"dave@gmail.com",12);

    expect(manager.getRole()).toBe("Manager");
})