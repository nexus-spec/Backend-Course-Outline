let greet:string = "Hello, World!"
let age: number = 30
let name :string = "Alice"

let output = `${greet} My name is ${name} and I am ${age} years old.`
console.log(output)

let studentName: string[] = ["Alice", "Bob", "Charlie"]
studentName.forEach(student => {
    console.log('my name is '+ student)
})

enum Role{Admin = 'Admin', User= 'My User', Guest= 'any Guest'}
let userRole :Role = Role.User
console.log(userRole)