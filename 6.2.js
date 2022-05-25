class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    sayHello() {
        console.log(`Hello ${this.firstname} ${this.lastname} !`);
    }
}

let a = new Person("Quentin", "Motte");
a.sayHello();
// console.log(a.sayHello());
