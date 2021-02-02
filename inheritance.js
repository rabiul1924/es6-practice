class Parent {
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby.getFullName());
console.log(baby2.getFullName());


//extends is use to call parent class
//super() is use to call parent constructor
//getFullname() is use same as function just we don't need to write function word

//object-oriented 
// What are the 3 principles of object oriented programming?
// Object-Oriented Principles. Encapsulation, inheritance, and polymorphism are usually given as the three fundamental principles of object-oriented languages (OOLs) and object-oriented methodology. These principles depend somewhat on the type of the language.