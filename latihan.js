let pesan = "Message to the world";
console.log(pesan);

pesan = "Message Change";
console.log(pesan);

const bumi = "bulat";
console.log(bumi);

const arr = ['banana', true, 23];
console.log(arr[2]*2);

let person = {
    name:"john",
    age:30,
    isStudent: false
};

console.log(person.name);


let dataUser = [ //array of object
    {
    name:"john",
    age:30,
    isStudent: false
    },
    {
    name:"doe",
    age:30,
    isStudent: false
    }
]

console.log(dataUser[1].name);

const arrName = ['John', 'Doe'] //array of string
console.log(arrName);


let y = 3
// console.log(x %= y);
// console.log(x **= y);

let x = 2
let z = "2"
console.log(x===z);

let a = true;
let b ="true";
console.log(a==b);

let age = 10;
// console.log(age >=18 ? 'Legal':'Not Legal');
console.log(age >= 18 && age<=55 ? 
    "legal" 
    : age > 56 ? "not legal" 
        : "undefined age");