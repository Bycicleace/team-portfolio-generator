const Engineer = require("../lib/Engineer.js");

test("Create an Engineer Object", () => {
    const engineer = new Engineer("Dave",1,"dave@gmail.com","davison");

    expect(engineer.name).toBe("Dave");
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe("dave@gmail.com");
    expect(engineer.gitHubUsername).toBe("davison");
})

test("getName returns name", () => {
    const engineer = new Engineer("Dave",1,"dave@gmail.com","davison");

    expect(engineer.getName()).toBe(engineer.name);
})

test("getId returns engineer id", () => {
    const engineer = new Engineer("Dave",1,"dave@gmail.com","davison");

    expect(engineer.getId()).toBe(engineer.id);
})

test("getEmail returns email address", () => {
    const engineer = new Engineer("Dave",1,"dave@gmail.com","davison");

    expect(engineer.getEmail()).toBe(engineer.email);
})

test("getRole returns 'Engineer'", () => {
    const engineer = new Engineer("Dave",1,"dave@gmail.com","davison");

    expect(engineer.getRole()).toBe("Engineer");
})

test("getGithub returns GitHub Username", () => {
    const engineer = new Engineer("Dave",1,"dave@gmail.com","davison");

    expect(engineer.getGitHub()).toBe(engineer.gitHubUsername);
})