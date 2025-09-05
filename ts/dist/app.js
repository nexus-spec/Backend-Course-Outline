"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let greet = "Hello, World!";
let age = 30;
let name = "Alice";
let output = `${greet} My name is ${name} and I am ${age} years old.`;
console.log(output);
let studentName = ["Alice", "Bob", "Charlie"];
studentName.forEach(student => {
    console.log('my name is ' + student);
});
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["User"] = "My User";
    Role["Guest"] = "any Guest";
})(Role || (Role = {}));
let userRole = Role.User;
console.log(userRole);
//# sourceMappingURL=app.js.map