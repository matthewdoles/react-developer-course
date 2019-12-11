class Person {
    name = 'Matthew' // property
    call = () => {}  // method
}

const myPerson = new Person(); //constructor
myPerson.call();
console.log(myPerson.name);


class Human {
    constructor() {
        this.gender = 'male';
    }
    printGender() {
        console.log(this.gender);
    }
}

// inheritance
class Person extends Human {
    constrcutor() {
        super();
        this.name = 'Matthew';
    }
    printMyName() {
        console.log(this.name);
    }
}