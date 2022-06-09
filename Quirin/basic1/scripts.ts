
// Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”



class Person{
    name: string;
    age: number;
    jobTitle: string; 
    constructor(name: string, age:number, jobTitle:string){
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    output(){
        return `Hello there, my name is ${this.name} and I am ${this.age} years old and I am a ${this.jobTitle}`;
    }
}

let doofus = new Person("doofus", 73, "roofus");
document.write(doofus.output());