// //
// // - создать массив с 20 числами.
// let mas = [];
// for (let i = 0; i < 20; i++) {
//     mas.push(Math.round(Math.random()*1000));
// }
//
// // -- при помощи метода sort отсортировать массив.
// mas.sort((a,b)=>a-b);
// console.log(mas);
// // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// mas.sort((a,b)=>b-a);
// console.log(mas);
// // -- при помощи filter получить числа кратные 3
// let newMas=mas.filter(value => {  return value%3===0?true:false; });
// console.log(newMas);
// // -- при помощи filter получить числа кратные 10
// // let newMas=mas.filter(value => {  return value%10===0?true:false; });
// // console.log(newMas);
// // -- перебрать (проитерировать) массив при помощи foreach()
// mas.forEach(item=>console.log(item));
// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// //
// let newMas2= mas.map(item=> item*3);
// console.log(newMas2);
// // - создать массив со словами на 15-20 элементов.
// let masString = [ 'Katia','Petya','Anstasia','Sveta','Nastya','Ira','Ruslan','Nadya','Vitaliy','Vera','Dasha','Oksana','Masha','Pasha','Ruslan']
// //
// // // -- отсортировать его по алфавиту в восходящем порядке.
// // masString.sort();
// // console.log(masString);
// // -- отсортировать его по алфавиту  в нисходящем порядке.
// masString.sort().reverse();
// console.log(masString);
// // -- отфильтровать слова длиной менее 4х символов
// let filtrFour = masString.filter(a=>a.length>3?true:false);
// console.log(filtrFour);
// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// //
// let masMap = masString.map(a=>a+'!');
// console.log(masMap);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [{name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {
    name: 'kolya',
    age: 29,
    status: true
}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {
    name: 'anya',
    age: 31,
    status: false
}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {
    name: 'masha',
    age: 30,
    status: true
}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true}];

// - відсортувати його за  віком (зростання , а потім окремо спадання)
// users.sort((user1,user2)=>user1.age-user2.age);
// console.log(users);
//
// users.sort((user1,user2)=>user2.age-user1.age);
// console.log(users);


// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// users.sort((user1,user2)=>user1.name.length-user2.name.length);
// console.log(users);
//
// users.sort((user1,user2)=>user2.name.length-user1.name.length);
// console.log(users);
//


// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// console.log(users);
// let newUsersId = users.map((user, id) => {
//
//     return{
//         name: user.name,
//         age: user.age,
//         status: user.status,
//         id: id,
//     }
//
// })
// console.log(newUsersId);
// // - відсортувати його за індентифікатором
// //
// newUsersId.sort((user1,user2)=>user2.id-user1.id)
//
// // -- наисать функцию калькулятора с 2мя числами и колбеком
//
// function calculater(numb1,numb2,callback) {
// callback(numb1,numb2);
// }
// calculater(1,2,(numb1,numb2)=>{
//     return numb1+numb2;
// });
//
//
// // -- наисать функцию калькулятора с 3мя числами и колбеком
// //
// function calculater(numb1,numb2,numb3,callback) {
//     callback(numb1,numb2,numb3);
// }
// calculater(1,2,5,(numb1,numb2,numb3)=>{
//     return numb1+numb2*numb3;
// });


// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
// //
// let cars = [{
//     producer: "subaru",
//     model: "wrx",
//     year: 2010,
//     color: "blue",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 400
// }, {
//     producer: "subaru",
//     model: "legacy",
//     year: 2007,
//     color: "silver",
//     type: "sedan",
//     engine: "ez30",
//     volume: 3,
//     power: 250
// }, {
//     producer: "subaru",
//     model: "tribeca",
//     year: 2011,
//     color: "white",
//     type: "jeep",
//     engine: "ej20",
//     volume: 2,
//     power: 300
// }, {
//     producer: "subaru",
//     model: "leone",
//     year: 1998,
//     color: "yellow",
//     type: "sedan",
//     engine: "ez20x",
//     volume: 2,
//     power: 140
// }, {
//     producer: "subaru",
//     model: "impreza",
//     year: 2014,
//     color: "red",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 200
// }, {
//     producer: "subaru",
//     model: "outback",
//     year: 2014,
//     color: "red",
//     type: "hachback",
//     engine: "ej204",
//     volume: 2,
//     power: 165
// }, {
//     producer: "bmw",
//     model: "115",
//     year: 2013,
//     color: "red",
//     type: "hachback",
//     engine: "f15",
//     volume: 1.5,
//     power: 120
// }, {
//     producer: "bmw",
//     model: "315",
//     year: 2010,
//     color: "white",
//     type: "sedan",
//     engine: "f15",
//     volume: 1.5,
//     power: 120
// }, {
//     producer: "bmw",
//     model: "650",
//     year: 2009,
//     color: "black",
//     type: "coupe",
//     engine: "f60",
//     volume: 6,
//     power: 350
// }, {
//     producer: "bmw",
//     model: "320",
//     year: 2012,
//     color: "red",
//     type: "sedan",
//     engine: "f20",
//     volume: 2,
//     power: 180
// }, {
//     producer: "mercedes",
//     model: "e200",
//     year: 1990,
//     color: "silver",
//     type: "sedan",
//     engine: "eng200",
//     volume: 2,
//     power: 180
// }, {
//     producer: "mercedes",
//     model: "e63",
//     year: 2017,
//     color: "yellow",
//     type: "sedan",
//     engine: "amg63",
//     volume: 3,
//     power: 400
// }, {
//     producer: "mercedes",
//     model: "c250",
//     year: 2017,
//     color: "red",
//     type: "sedan",
//     engine: "eng25",
//     volume: 2.5,
//     power: 230
// }];
// // Відфільтрувати масив за наступними крітеріями :
// //     - двигун більше 3х літрів
// // cars.filter(car=>{return car.volume>3});
// // - двигун = 2л
// // cars.filter(car=>{return car.volume>2});
// // - виробник мерс
// // let mas =cars.filter(car=>{ return car.producer === 'mercedes'});
// // console.log(mas);
// // - двигун більше 3х літрів + виробник мерседес
// let mas = cars.filter(car => {
//
//     if (car.volume > 3 && car.producer === 'mercedes') {
//         return true;
//     } else return false;
// });
// console.log(mas);
//
//
// // - двигун більше 3х літрів + виробник субару
// let mas = cars.filter(car => {
//
//     if (car.volume > 3 && car.producer === 'subaru') {
//         return true;
//     } else return false;
// });
// console.log(mas);
// // - сили більше ніж 300
// let mas = cars.filter(car => {
//
//     return car.power > 300;
// });
// console.log(mas);
// // - сили більше ніж 300 + виробник субару'
// let mas = cars.filter(car => {
//
//     if (car.power > 300 && car.producer === 'subaru') {
//         return true;
//     } else return false;
// });
// console.log(mas);
// // - мотор серіі ej
// let mas = cars.filter(car => {
//     return car.engine === 'ej';
// });
// console.log(mas);
// // - сили більше ніж 300 + виробник субару + мотор серіі ej
// let mas = cars.filter(car => {
//
//     if (car.power > 300 && car.producer === 'subaru' && car.engine === 'ej') {
//         return true;
//     } else return false;
// });
// // - двигун меньше 3х літрів + виробник мерседес
// let mas = cars.filter(car => {
//
//     if (car.volume < 3 && car.producer === 'mercedes') {
//         return true;
//     } else return false;
// });
// // - двигун більше 2л + сили більше 250
//
// let mas = cars.filter(car => {
//
//     if (car.volume < 2 && car.power > 250) {
//         return true;
//     } else return false;
// });
// // - сили більше 250  + виробник бмв
//
// let mas = cars.filter(car => {
//
//     if (car.power > 250 && car.producer === 'bmw') {
//         return true;
//     } else return false;
// });
//
//
//
// - взять слдующий массив
let usersWithAddress = [{
    id: 1,
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', street: 'aShevchenko', number: 16}
}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {
    id: 3,
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Lviv', street: 'wShevchenko', number: 121}
}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {
    id: 5,
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Lviv', street: 'aShevchenko', number: 115}
}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {
    id: 7,
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Lviv', street: 'aShevchenko', number: 22}
}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'aShevchenko', number: 43}}, {
    id: 9,
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Lviv', street: 'Shevchenko', number: 12}
}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'bShevchenko', number: 16}}, {
    id: 11,
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Lviv', street: 'Shevchenko', number: 121}
}];
// -- отсортировать его по id пользователей
// usersWithAddress.sort((user1,user2)=> user1.id-user2.id);
// // -- отсортировать его по id пользователей в обратном опрядке
// usersWithAddress.sort((user1,user2)=> user2.id-user1.id);
//
// // -- отсортировать его по возрасту пользователей
// usersWithAddress.sort((user1,user2)=> user1.age-user2.age);


// -- отсортировать его по возрасту пользователей в обратном порядке
// usersWithAddress.sort((user1,user2)=> user2.age-user1.age);
//
// // -- отсортировать его по имени пользователей
// usersWithAddress.sort((user1,user2)=>{
//     if (user1.name>user2.name) return 1;
//     if (user1.name<user2.name) return -1;
//     return 0;
// } );
// console.log(usersWithAddress);
// // -- отсортировать его по имени пользователей в обратном порядке
// usersWithAddress.sort((user1,user2)=>{
//     if (user1.name<user2.name) return 1;
//     if (user1.name>user2.name) return -1;
//     return 0;
// } );
// -- отсортировать его по названию улицы  в алфавитном порядке

//Чомусь не працю так як має працювати !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// usersWithAddress.sort((user1, user2) => {
//     let street1 = user1.address.street;
//     let street2 = user2.address.street;
//     if (street1 < street2) return -1;
//     else return 1;
// });
// -- отсортировать его по номеру дома по возрастанию
// usersWithAddress.sort((user1, user2) => {
//     return user1.address.number - user2.address.number;
// });
// console.log(usersWithAddress);

// -- отфильтровать (оставить) тех кто младше 30
// let newFilterAge =usersWithAddress.filter((user) => {
//     return user.age<30?true:false;
// });
// console.log(newFilterAge);

// -- отфильтровать (оставить) тех у кого отрицательный статус
// let newFilterAge =usersWithAddress.filter((user) => {
//     return !user.status;
// });
// console.log(newFilterAge);
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

// let newFilterAge = usersWithAddress.filter((user) => {
//     return !user.status && user.age < 30 ? true : false;
// });
// console.log(newFilterAge);
// -- отфильтровать (оставить) тех у кого номер дома четный
// let newFilterAge = usersWithAddress.filter((user) => {
//     return user.address.number%2===0;
// });
// console.log(newFilterAge);
//
//
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.


//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
// function Car(model, power, owner, price, years){
//     this.model = model;
//     this.power = power;
//     this.owner = owner;
//     this.price = price;
//     this.years = years;
// }
// function Owner(name, age, expirience){
//     this.name = name;
//     this.age = age;
//     this.expirience = expirience;
// }
// let cars =[]
// for (let i = 0; i < 10; i++) {
//     let owner = new Owner('Petya'+i, 24+i,30+i);
//     let car = new Car('BMW X'+i, 150+10*i,owner,2000*i-152*i,2006+i);
//     if (i%2===0){
//         car.power*=1.1;
//     car.owner = new Owner('Vasya'+i,20,1+i*4/2);
//     }
//     cars.push(car);
// }
// console.log(cars);
// // for (let i = 0; i < cars.length; i+2) {
// //     cars[i].power*=1.1;
// //     cars[i].price*=1.05;
// // }
// let ownerOnCurse = cars.filter(car=>car.owner.expirience<5&&car.owner.age>25);
// ownerOnCurse.forEach(car=>car.owner.expirience++);
// let sum =cars.reduce((car1,car2)=>{
//     return car1+car2.price
// },0);
// console.log(sum);

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//

function findIndexElement(mas, key) {
    let firstIndex = mas.findIndex((a) => a === key);

    let lastIndex = mas.lastIndexOf(key);
    if (firstIndex !== -1)
        return firstIndex + "  " + lastIndex;
    else {
        return -1;
    }

}


// Пример:
let Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
//

console.log(findIndexElement(Arr, 10));