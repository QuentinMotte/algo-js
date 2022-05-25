class Animal {
    constructor(greeting, name) {
        this.constructor.greeting = greeting;
        this.name = name;
    }
    sayHello() {
        return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
}
let cat = new Animal("Miaouuuuuuw", "Zazou");
cat.sayHello();
console.log(cat.sayHello());

let dog = new Animal("Wouf", "Djin");
dog.sayHello();
console.log(dog.sayHello());
