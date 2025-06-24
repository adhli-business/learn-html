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

// let input;
// while (input !== 'exit') {
//     input = prompt("Type something (or exit to quit):");
// }

let object = {
    name: "adhli",
    age: 25,
    isOnLeave: true,
    doYourJob: function(){
        if (this.isOnLeave){
            return 'mentoring'
        } else {
            return 'front end'
        }
    }
}

console.log(object.doYourJob());


// function Kreditur(name, penghasilan){
//     this.nama = name;
//     this.income = penghasilan;
// }

// const KrediturOne = new Kreditur('John',1000);
// const KrediturTwo = new Kreditur('Doe',1000);

// console.log(KrediturOne);
// console.log(KrediturTwo);

const {name, ...otherInfo} = object;
console.log(otherInfo);

const user = {namef: 'adhli', age: 28};
const location = {city: "jakarta"};

// const profile = {...user, ...location};

// console.log(profile);

const { namef } = user;
const { city } = location;

const result = {...{namef}, ...{city}};

console.log(result);

//aray manipulation
const fruit = ['banana', 'apple', 'orange']
//buat masukin elemen ke array indeks terakhir
// fruit.push('kiwi'); 
//masukin elemen ke array indeks pertama
// fruit.unshift('kiwi');
//                      parameter baru  ubah parameter tersebut jadi sesuai sama variabel baru
const result_fruit = fruit.find(f => f === "apple");
console.log(result_fruit);
