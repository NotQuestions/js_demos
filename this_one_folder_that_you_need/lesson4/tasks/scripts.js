// // - створити функцію яка виводить масив
// // let mas = [1, 324, 312, 312, '31123', 'OWU', true, 'false'];
// //
// // // masItr(mas);
// //
// // function masItr(array) {
// //     for (const element of array) {
// //         console.log(element);
// //     }
// //
// // }
//
// // - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// // let masRand = [];
// // randMasAndAdd(masRand, 10);
// //
// // function randMasAndAdd(array, n) {
// //     for (let i = 0; i < n; i++) {
// //         array.push(Math.round(Math.random() * 1000));
// //     }
// //     masItr(array);
// // }
//
// // - створити функцію яка приймає три числа та виводить та повертає найменьше.
// // minNum(22,31123,13)
// // function minNum(num1, num2, num3) {
// //     let min = num1 < num2 ? num1 : num2;
// //     min = min < num3 ? min : num3;
// //     console.log(min);
// //     return min;
// // }
//
// // - створити функцію яка приймає три числа та виводить та повертає найбільше.
// // maxNum(9999213,31123,212131)
// // function maxNum(num1, num2, num3) {
// //     let max = num1 > num2 ? num1 : num2;
// //     max = max > num3 ? max : num3;
// //     console.log(max);
// //     return max;
// // }
//
//
// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// // let min=minMax(42232322, 1321, 321132312, 312312, 123132);
// //
// // function minMax(...mas) {
// //     let max = mas[0];
// //     let min = mas[0];
// //     for (const numb of mas) {
// //         max = max > numb ? max : numb;
// //         min = min < numb ? min : numb;
// //     }
// //     console.log(max);
// //     return min;
// // }
// //
// // console.log(min);
//
//
// // - створити функцію яка виводить масив
// // let mas = [1, 324, 312, 312, '31123', 'OWU', true, 'false'];
// //
// // // masItr(mas);
// //
// // function masItr(array) {
// //     for (const element of array) {
// //         console.log(element);
// //     }
// //
// // }
//
// // // - створити функцію яка повертає найбільше число з масиву
// // function maxMas(mas) {
// //     let max = mas[0];
// //     for (const numb of mas) {
// //         max = max > numb ? max : numb;
// //     }
// //     return max;
// // }
// //
// // // - створити функцію яка повертає найменьше число з масиву
// // function minMas(mas) {
// //     let min = mas[0];
// //     for (const numb of mas) {
// //         min = min < numb ? min : numb;
// //     }
// //     return min;
// // }
// // - створити функцію яка приймає масив чисел
// // mas();
// // function mas(arr) {
// // }
//
//
// // - створити функцію яка скаладає значення елементів масиву та повертає його.
// // let mas2=[2,3,4,5,6,7,8];
// //
// // function sumMas(arr) {
// //     let sum=0;
// //     console.log(arr);
// //     for (const element of arr) {
// //         sum+=element;
// //     }
// //     return sum;
// // }
// //
// // console.log(sumMas(mas2))
//
// // // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// // medVal([22,3,132,2342,4234,243,324]);
// // function medVal(arr) {
// //     let sum=0;
// //     for (const element of arr) {
// //         sum+=element;
// //     }
// //     return (sum/arr.length);
// // }
//
//
// // - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// // let mas = [22,3,132,2342,4234,243,324];
// //
// // console.log(leghtMas(mas));
// // function leghtMas(mas) {
// //
// //     if (Array.isArray(mas))  return mas.length;
// //
// //     return 'Ви передали не масив';
// // }
//
// // - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// // let obj = {name: 'koly', skills: ['js', 'java' , 'spring' , 'maven']};
// // let obj2 = {name: 'Styopa', skills: ['C', 'pascal' , 'spring' , 'maven'], born: 1934, sex: 'male'};
// // let obj3 = {name: 'Nastya', skills: ['C++', 'Delphi' , 'spring' , 'maven'], status: true};
// // let mas= [obj,obj2,obj3]
// //
// // function lengthObjKeys(masObj) {
// //     let result = 0;
// //     for (const obj of masObj) {
// //         result+=Object.keys(obj).length
// //     }
// //     return result;
// // }
// //
// // console.log(lengthObjKeys(mas));
// //
// //
//
//
// // - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// //     Приклад
// //     [1,2,3,4];
// //     [2,3,4,5];
// // результат
// //     [3,5,7,9]
//
// // function sumMas(mas1,mas2) {
// //     let result =[];
// //     for (let i = 0; i < mas1.length; i++) {
// //         result[i]=mas1[i]+mas2[i];
// //     }
// //     return result
// // }
//
// // - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//
// // - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// // Двожина масиву від 2 до 100
// // Приклад
// // [1,0,6,0,3] => [1,6,3,0,0]
// // [0,1,2,3,4] => [1,2,3,4,0]
// // [0,0,1,0]   => [1,0,0,0]
// //
// // let mas =[0,1,2,3,4];
// // console.log(mas);
// // lastEl(mas)
// // function lastEl(mas) {
// //     for (let i = 0; i<mas.length;i++) {
// //         if (mas[i]===0){
// //             mas.splice(i,1);
// //             mas.push(0)
// //         }
// //     }
// // }
// // console.log(mas);
//
//
// // Створити функцію яка :
// // - Додає в боді блок з текстом "Hello owu"
// // function textOwuBody() {
// //     document.body.innerText+='Hello owu';
// // }
//
// // // - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// // addBodyElement('h1','Text Owu')
// // function addBodyElement() {
// //     let elem = document.createElement(arguments[0]);
// //     elem.innerText= arguments[1];
// //     document.body.appendChild(elem);
// // }
//
// // - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// let cars = [
//     {
//         model: "Ford Fiesta",
//         class: "B",
//         year: 2018,
//         color: "Black",
//         price: 2000
//     },
//     {
//         model: "Bugatti w16",
//         class: "S",
//         year: 2018,
//         color: "Navi-Blue",
//         price: 4450000
//     },
//     {
//         model: "Geely CK",
//         class: "B",
//         year: 2015,
//         color: "Black",
//         price: 2542
//     },
//     {
//         model: "Audi A4",
//         class: "A",
//         year: 2017,
//         color: "Silver",
//         price: 12310
//     },
//     {
//         model: "BMW M16",
//         class: "A",
//         year: 2019,
//         color: "Black",
//         price: 12340
//     }
//
// ];
// // - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// // Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// // f(cars,'body');
// // function f(mas, elem) {
// //
// //     let element = document.getElementById(elem);
// //     for (const m of mas) {
// //         let div= document.createElement('div');
// //         div.innerHTML = `Модель: ${m.model}, Класс машини: ${m.class}, Рік випуску: ${m.year}, Колір: ${m.color}, Ціна: ${m.price}`;
// //         element.appendChild(div);
// //     }
// //
// // }
//
//
// <<<<<<< HEAD
// =======
//
// >>>>>>> master
// // - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// // Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// // Для кожної властивості створити всередені блока автомоблія свій блок
// //
// //
// // f(cars,'body');
// // function f(mas, elem) {
// //
// //     let element = document.getElementById(elem);
// //     for (const m of mas) {
// //         let div= document.createElement('div');
// //         div.innerHTML = `<div>Модель: ${m.model}</div> <div>Класс машини: ${m.class}</div> <div>Рік випуску: ${m.year}</div> <div>Колір: ${m.color}</div> <div>Ціна: ${m.price}</div>`;
// //         div.style.margin ='15px 0';
// //         element.appendChild(div);
// //     }
// //
// // }
//
// // (на основі минулого ДЗ)
// // **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// // та повертає масив цих з'єднаних об'єктів.
// // Приклад масивів:
// //             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// //             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// // //
// // let mas =skleykaMas(usersWithId,citiesWithId);
// // function skleykaMas(mas1,mas2) {
// //     let result = [];
// //     let tempObject={};
// //     for (const object1 of mas1) {
// //         for (var object2 of mas2) {
// //             if (object1.id===object2.user_id){
// //                 tempObject={...object1,...object2};
// //             }
// //         }
// //         result.push(tempObject);
// //     }
// //
// //     return result;
// //
// // }
// // console.log(mas);
//
// //
// //
// // ***- беремо завдання з правилами з укроку №3 :
// // Та робимо це функцією.При цьому правила отримувати через аргумент.
// // "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// // При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// // Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// // //todo add rules
// //
// // 			let rules = [
// // 				{
// // 					title: 'Первое правило Бойцовского клуба.',
// // 					body: 'Никому не рассказывать о Бойцовском клубе.'
// // 				},
// // 				{
// // 					title: 'Второе правило Бойцовского клуба.',
// // 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// // 				},
// // 				{
// // 					title: 'Третье правило Бойцовского клуба.',
// // 					body: 'В схватке участвуют только двое.'
// // 				},
// // 				{
// // 					title: 'Четвертое правило Бойцовского клуба.',
// // 					body: 'Не более одного поединка за один раз.'
// // 				},
// // 				{
// // 					title: 'Пятое правило Бойцовского клуба.',
// // 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// // 				},
// // 				{
// // 					title: 'Шестое правило Бойцовского клуба.',
// // 					body: 'Поединок продолжается столько, сколько потребуется.'
// // 				},
// // 				{
// // 					title: 'Седьмое правило Бойцовского клуба.',
// // 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// // 				},
// // 				{
// // 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// // 					body: 'Новичок обязан принять бой.'
// // 				},
// //
// // 			];
//
//
// // "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// // При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// // Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла  rule.html
//
//
// // function blokRusles() {
// //     let div = document.createElement('div');
// //     let h2 = document.createElement('h2');
// //     let p = document.createElement('p');
// //
// //     h2.innerHTML=`${arguments[0].title}`;
// //     p.innerHTML=`${arguments[0].body}`;
// //
// //     div.appendChild(h2);
// //     div.appendChild(p);
// //     return div;
// // }
// //
// // for (let i = 0; i < rules.length; i++) {
// //     let wrap = document.getElementById('wrap');
// //     let div = blokRusles(rules[i]);
// //     div.classList =`rules rule${i+1}`;
// //     wrap.appendChild(div);
// // }
// //
// // //
// <<<<<<< HEAD
//
// //***Task
// //
// //
// // let str = prompt('Enter string');
// // let rand = Math.random()*1000+1000;
// // console.log(Math.round(rand)+'mm');
// // // setTimeout(function(){f(str)}, 0);
// // f(str);
// //
// // function f(str) {
// //     document.write(`${str.charAt(0)}`);
// //     if (str.length < 2) {
// //         return;
// //     }
// //     rand = Math.random()*1000+1000;
// //     console.log(Math.round(rand)+'mm');
// //     setTimeout(function () { f(str.substring(1))
// //     }, rand)
// // }
//
// // let mas =[
// //     {1:'qweweqw',2:'waddasds',3:{4:'qwqedas',5:'sdfsd',6:{7:'waddsds',8:'dsdas'}}},
// //     {1:'qweweqw2',2:'waddasds2',3:{4:'qwqedas2',5:'sdfsd2',6:{7:'waddsds2',8:'dsdas2'}}},
// //     {1:'qweweqw3',2:'waddasds3',3:{4:'qwqedas3',5:'sdfsd3',6:{7:'waddsds3',8:'dsdas3'}}},
// //     {1:'qweweqw3',2:'waddasds3',3:{4:'qwqedas3',5:'sdfsd3',6:{7:'waddsds3',8:'dsdas3'}}},
// //     {1:'qweweqw3',2:'waddasds3',3:{4:'qwqedas3',5:'sdfsd3',6:{7:'waddsds3',8:'dsdas3'}}}
// // ];
// // console.log(recurs(mas))
// // function recurs(mas) {
// //     let count =0;
// //     for (const ma in mas) {
// //         if (typeof mas[ma] ==='object'){
// //             count+= recurs(mas[ma]);
// //         }
// //         else {
// //             count++;
// //         }
// //     }
// //     return count
// //
// // }
//
// // let a1 = "wrong";
// // debugger
// // function  a() {
// //     console.log(11);
// //     this.a1 = 'right2';
// //     return "1st";
// // };
// //
// // function  a(val) {
// //
// //     console.log(12);
// //     this.a1 = 'right';
// //     return "2nd";
// // };
// //
// // function  a(val,val2) {
// //     console.log(12);
// //     this.a1 = 'right3';
// //     return "2nd";
// // };
// // document.write( new a(1).a1);
// // =======
// // >>>>>>> master
