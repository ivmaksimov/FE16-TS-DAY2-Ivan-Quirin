"use strict";
// Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”
class Person {
    constructor(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    message() {
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}.`;
    }
}
;
let Jon = new Person("Jon", 26, "ingeneer");
console.log(Jon.message());
// Basic 2
// Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”
class Job extends Person {
    constructor(name, age, jobTitle, salary, jobLocation) {
        super(name, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    message1() {
        return this.message() + `and I get ${this.salary} every month, and I work in ${this.jobLocation}.`;
    }
}
let Nik = new Job("Nik", 25, "teacher", 1500, "Vienna");
console.log(Nik.message1());
