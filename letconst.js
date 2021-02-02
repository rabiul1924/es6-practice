const hubby = "Elias Kanchon";
//hubby ="omar Sunny"; //error
console.log(hubby); // Elias Kanchon

const numbers = [12, 45];
numbers[1] = 88;
numbers.push(12);
const nayok = {name:"sakib khan", phone:4578}; 

//console.log(numbers);

let patientName = "Rahim Chacha";
patientName = "Fatema Khala";
console.log(patientName); // Fatema Khala

let sum = 0; 
for(let i = 0; i < 10; i++){
    sum = sum + i;
}
console.log(i); //error

for(var i = 0; i < 10; i++){
    sum = sum + i;
}
console.log(i); //work //10


//const value can change but new array cannot add
//let is flexible 
//let scope variable inside work able only
//var scope variable work any side