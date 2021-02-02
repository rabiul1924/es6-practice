class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "kolimunnesa school"
    }
}

const student1 = new Student(12, "Shuvo");
const student2 = new Student(22, "mahiya");
const student3 = new Student(29, "Bappi");
console.log(student3);

//class then select any name start with uppercase
//constructor is key who call main thing
//every "this" must use before any object