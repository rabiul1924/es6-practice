const person = { name: 'Jack William', age: 17, job: 'facebooker', gfName: 'Ema Watson', address: 'Kochu Khet', phone: '01717112211', friends: ['Tom hancks', 'tom cruise', 'Tom yarn'] }
const { address, phone, gfName, salary } = person;

const complexObject = {
    name :'karim',
    info : {
        address : 'kola bagan',
        leader : 'Tiger Leader'
    }

}

const {leader} = complexObject.info;

//1

// const gfName = person.gfName;
// const phone = person.phone;

//2
// console.log(gfName, phone, salary, address);
// console.log(gfName, phone, salary, address);

//3
const friends = ['Sakib Khan', 'Arman Khan', 'Aamir Khan', 'Salman Khan', 'sharukh khan'];
const [chotoFriend, ...olderF] = friends;
console.log(olderF);

//1st 
//2nd 
//3rd