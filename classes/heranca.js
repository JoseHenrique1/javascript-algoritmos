class Person {
    constructor (name, age, cpf) {
        this.name = name;
        this.age = age;
        this.cpf = cpf;
    }
    year () {
        const date = new Date(); 
        return date.getFullYear() - this.age;
    }
}


const person = new Person("jose", 18, "12345");
console.log(person.name)
console.log(person.year())