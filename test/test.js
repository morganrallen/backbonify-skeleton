var tr = require("jasmine-tapreporter");
jasmine.getEnv().addReporter(new tr);

var Person = require("../src/models/Person");
var name = "Fry";

describe("Person Model", function(t) {
  var user = new Person({
    name: name
  }, {
    noView: true
  });

  it("User created", function() {
    expect(typeof user).toBe("object");
  });
  it("user is instanceof Person", function() {
    expect(user instanceof Person).toBe(true);
  });

  it("greeting is correct", function() {
    expect(user.greet()).toBe("Hello, " + name);
  });

  it("names is correct", function() {
    expect(user.get("name")).toBe(name);
  });
});
