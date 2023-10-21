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

class Employee extends Person {
    constructor (name, age, cpf, office) {
        super(name, age, cpf);
        this.office = office;
    }

    Info () {
        console.log(this.name);
        console.log(this.cpf);
        console.log(this.age);
        console.log(this.office);
        console.log(this.year());
    }
}

const employee = new Employee("jose", 18, "1234-9", "gerente");
employee.Info();