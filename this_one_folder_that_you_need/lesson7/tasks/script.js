// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let div = document.createElement('div');
// let button = document.createElement('button');
//
// div.setAttribute('id', 'text');
//
// div.innerText = 'Text Text Text Text Text Text Text Text Text Text ';
// button.innerText = "Button";
//
// button.onclick = () => {
//         div.style.display = 'none';
// }
//
// document.body.appendChild(div);
// document.body.appendChild(button);

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button = document.createElement('button');
// button.innerText = "Button";
//
// button.onclick = () => {
//     button.style.display = 'none';
// }
//
// document.body.appendChild(button);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let form = document.createElement('form');
// let input = document.createElement('input');
// let input2 = document.createElement('input');
//
// input.type = 'number';
// input.name = 'textIn';
// input.value = 0;
//
// input2.type = 'submit';
// input2.name = 'buttonIn';
// //Обмеження віку (Не обовязковий івент)
// input.oninput = () => {
//     let value = input.value;
//     if (value<0) input.value=0;
//     input.value = value < 0 || value>200 ? 0 : value;
// };
//
// input2.onclick = (ev) => {
//     ev.preventDefault();
//     input.value < 18
//     ?alert('Vik menshe 18')
//     :alert('Vik bilshe 18');
//
// };
// form.appendChild(input);
// form.appendChild(input2);
// document.body.appendChild(form);
// - Создайте меню, которое раскрывается/сворачивается при клике
//
// let mainUl = document.createElement('ul');
// let mainLi = document.createElement('li');
// let mainLi2 = document.createElement('li');
// let mainLi3 = document.createElement('li');
//
// mainLi.innerText = 'Main';
// mainLi2.innerText = 'About';
// mainLi3.innerText = 'Countact';
//
// mainUl.style.display = 'flex';
// mainUl.style.display = 'flex';
// mainUl.style.listStyleType = 'none';
//
// mainLi.style.padding = '15px 20px';
// mainLi2.style.padding = '15px 20px';
// mainLi3.style.padding = '15px 20px';
//
// mainLi.style.background = 'red';
// mainLi2.style.background = 'blue';
// mainLi3.style.background = 'green';
//
//
// let ul = document.createElement('ul');
// ul.setAttribute('id','subUl');
// ul.style.padding = '0';
// //Create li elements
// for (let i = 0; i < 10; i++) {
//     let li = document.createElement('li');
//     li.style.listStyleType = 'none';
//     li.style.margin = '5px 10px';
//
//     li.innerText = `SubMenu${i + 1}`;
//     li.style.background = 'lightblue';
//     ul.appendChild(li);
// };
//
// mainLi.onclick = (ev)=>{
//     if (ul.style.display == 'none'){
//         ul.style.display = 'block';
//     }else {
//         ul.style.display = 'none';
//     }
//
// }
//
// mainLi.appendChild(ul);
// mainUl.appendChild(mainLi);
// mainUl.appendChild(mainLi2);
// mainUl.appendChild(mainLi3);
// document.body.appendChild(mainUl);
//

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// let masCometar = [];
// for (let i = 0; i < 10; i++) {
//     masCometar.push({title : `lorem ${i+1}`, body:`lorem ipsum dolo sit ameti Nomer ${i+1}`});
// }
// masCometar.forEach(obj=>{
//     let div = document.createElement('div');
//     let h2 = document.createElement('h2');
//     let p = document.createElement('p');
//     let button = document.createElement('button');
//     button.innerText = 'Button';
//     h2.innerText = obj.title;
//     p.innerText = obj.body;
//
//     button.onclick = (ev)=>{
//             if (p.style.display == 'none'){
//         p.style.display = 'block';
//     }else {
//         p.style.display = 'none';
//     }
//     }
//
//
//     div.appendChild(h2);
//     div.appendChild(p);
//     div.appendChild(button);
//     document.body.appendChild(div);
// });
//
//
//


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// let form1 = document.createElement('form');
// let form2 = document.createElement('form');
//
// let input1 = document.createElement('input');
// input1.name = 'input1';
// let input2 = document.createElement('input');
// input1.name = 'input2';
// let input3 = document.createElement('input');
// input1.name = 'input3';
// let input4 = document.createElement('input');
// input1.name = 'input4';
// let button = document.createElement('button')
//
// button.innerText = 'Button';
//
// form1.appendChild(input1);
// form1.appendChild(input2);
// form2.appendChild(input3);
// form2.appendChild(input4);
//
// button.onclick = (ev)=>{
//      let masForm1 = form1.elements;
//      let masForm2 = form2.elements;
//     for (const input of masForm1) {
//         console.log(input.value);
//     }
//     for (const input of masForm2) {
//         console.log(input.value);
//     }
// };
//
// document.body.appendChild(form1);
// document.body.appendChild(form2);
// document.body.appendChild(button);
//


//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//

// let form = document.createElement('form');
// form.name = 'nameForm'
// let input1 = document.createElement('input');
// input1.type = 'text';
// input1.name = 'text';
// let input2 = document.createElement('input');
// input2.type = 'radio';
// input2.name = 'radio';
// let button = document.createElement('button');
// button.innerText='Button';
//
// form.appendChild(input1);
// form.appendChild(input2);
// document.body.appendChild(form);
// document.body.appendChild(button);
//
//
// let forms = document.forms.nameForm;
// forms.text.value = 'Text312312';
// forms.radio.checked = true;

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//
//
// function createTable(numbStr, numbCell, element) {
//     let elem = document.createElement(element);
//     let table = document.createElement('table');
//     for (let i = 0; i < numbStr; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < numbCell; j++) {
//             let td = document.createElement('td');
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     elem.appendChild(table);
//     return elem;
//
// }
//
// document.body.appendChild(createTable(6,3,'h1'));

//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//

// let form = document.createElement('form');
//
// let inputNumbRow = document.createElement('input');
// inputNumbRow.placeholder = 'Enter numbers row';
// inputNumbRow.type = 'number';
// let inputNumbCell = document.createElement('input');
// inputNumbCell.type = 'number';
// inputNumbCell.placeholder = 'Enter numbers cell';
//
// let inputCellText = document.createElement('input');
// inputCellText.placeholder = 'Enter text';
//
// let inputSubmit = document.createElement('input');
// inputSubmit.type = 'submit';
// inputSubmit.value = 'Create Table';
//
// inputSubmit.onclick = (ev) => {
//     ev.preventDefault();
//     document.body.appendChild(createTable(inputNumbRow.value,inputNumbCell.value,inputCellText.value));
//
// };
//
// function createTable(numbStr, numbCell, text) {
//     let elem = document.createElement('div');
//     let table = document.createElement('table');
//     for (let i = 0; i < numbStr; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < numbCell; j++) {
//             let td = document.createElement('td');
//             td.innerText = text;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     elem.appendChild(table);
//     return elem;
//
// }
//
//
// form.appendChild(inputNumbRow);
// form.appendChild(inputNumbCell);
// form.appendChild(inputCellText);
// form.appendChild(inputSubmit);
// document.body.appendChild(form);
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

//


// let imgMas = [
//     {id: 1, src: 'https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png'},
//     {id: 2, src: 'https://cs7.pikabu.ru/post_img/big/2019/01/22/10/1548178639131425422.jpg'},
//     {id: 3, src: 'https://cs11.pikabu.ru/post_img/2019/02/04/12/1549312329147951618.jpg'},
//     {id: 4, src: 'https://rozetked.me/images/uploads/dwoilp3BVjlE.jpg'},
//     {id: 5, src: 'https://klike.net/uploads/posts/2019-07/1564314090_3.jpg'},
//     {id: 6, src: 'https://i.pinimg.com/originals/1c/ba/1e/1cba1e5e40356f6edb0235c8a09a07d5.jpg'},
// ];
//
// let content = document.getElementById('content');
//  content.style.display = 'flex';
//  content.style.justifyContent = 'center';

// let carusel = document.createElement('div');
// let left = document.createElement('button');
// let right = document.createElement('button');
// let img = document.createElement('img');
// let count = 0;
//
// img.src = imgMas[0].src;
// carusel.style.display = 'flex';
//
// img.style.width = '400px';
// img.style.height = '400px';
// left.innerText = 'Left';
// right.innerText = 'Right';
//
//
// left.onclick = (ev) => {
//     count < 1 ? count = imgMas.length-1:count--;
//     img.src = imgMas[count].src;
// };
// right.onclick = (ev) => {
//     count > imgMas.length-2 ? count = 0:count++;
//     img.src = imgMas[count].src;
// };
//
// carusel.appendChild(left);
// carusel.appendChild(img);
// carusel.appendChild(right);
//
// content.appendChild(carusel);
//

// - Сворити масив не цензурних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
//
//
// let content = document.getElementById('content');
// let mas =[ 'slov1','slov2','slov3','slov4','slov5','slov6'];
//
// let input = document.createElement('input');
// let button = document.createElement('button');
//
// input.type = 'text';
// button.innerText = 'Перевірка';
//
// button.onclick = (ev)=>{
//     if (mas.indexOf(input.value)!==-1){
//         alert('Ви ввели не цензурне слово');
//     }
// };
//
// content.appendChild(input);
// content.appendChild(button);





// // - Сворити масив не цензцрних слів.
// //     Сворити інпут текстового типу.
// //     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// //     Кинути алерт з попередженням у випадку якщо містить.
// //     Перевірку робити при натисканні на кнопку
//
//
//
// let content = document.getElementById('content');
// let mas =[ 'slov1','slov2','slov3','slov4','slov5','slov6'];
//
// let input = document.createElement('input');
// let button = document.createElement('button');
//
// input.type = 'text';
// button.innerText = 'Перевірка';
//
// button.onclick = (ev)=>{
//     let strMas = input.value.split(" ");
//     console.log(strMas);
//     strMas.forEach((slov)=>{
//         if (mas.indexOf(slov)!==-1){
//             alert('В речені є не цензурне слово');
//         }
//     })
//
// };
//
// content.appendChild(input);
// content.appendChild(button);


//
//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//

// let hMas = document.getElementsByTagName('h2');
// let wrap = document.getElementById('wrap');
// let div = document.createElement('div');
// let count =1;
// div.style.position = 'fixed';
// div.style.top = '20%';
// div.style.left = '20px  ';
//
// wrap.style.marginLeft = '28%';
//
// for (const h of hMas) {
//     h.setAttribute('id',`yakor${count}`)
//     let a = document.createElement('a');
//     a.href =`#yakor${count}`;
//     a.innerHTML = `${h.innerText}<br>`;
//     div.appendChild(a);
//     count++
// }
// wrap.appendChild(div);
//
//




// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//

let content = document.getElementById('content');

let checkBox1 = document.createElement('input');
checkBox1.type = 'checkbox';
let checkBox2 = document.createElement('input');
checkBox2.type = 'checkbox';
let checkBox3 = document.createElement('input');
checkBox3.type = 'checkbox';
let button = document.createElement('button');
button.innerText = 'Start';



let divUsers = document.createElement('div');
let divCheckBox = document.createElement('div');

let label1 = document.createElement('label');
label1.innerText = '    False ';
let label2 = document.createElement('label');
label2.innerText = '    More 29 ';
let label3 = document.createElement('label');
label3.innerText = '    City Kiev ';
addDiv(usersWithAddress);

function addDiv(mas){
    mas.forEach(user=>{
        let p = document.createElement('p');
        p.innerHTML = JSON.stringify(user);
        divUsers.appendChild(p);
    });

}

button.onclick = (ev)=>{
    let mas = usersWithAddress;
    if (checkBox1.checked){

         mas =mas.filter(a=>{
          return  a.status===false;
        });
        console.log(mas);
        divUsers.innerText="";
        addDiv(mas);

        console.log(false);
    };
    if (checkBox2.checked){

        mas =mas.filter(a=>{
            return  a.age>=29;
        });
        console.log(mas);
        divUsers.innerText="";
        addDiv(mas);

        console.log(false);
    };
    if (checkBox3.checked){

        mas =mas.filter(a=>{
            return  a.address.city==='Kyiv';
        });
        console.log(mas);
        divUsers.innerText="";
        addDiv(mas);

        console.log(false);
    }
    if (!checkBox1.checked&&!checkBox2.checked&&!checkBox3.checked){
        addDiv(usersWithAddress);
    }

};




divCheckBox.appendChild(label1);
divCheckBox.appendChild(checkBox1);
divCheckBox.appendChild(label2);
divCheckBox.appendChild(checkBox2);
divCheckBox.appendChild(label3);
divCheckBox.appendChild(checkBox3);
divCheckBox.appendChild(button);
content.appendChild(divUsers);
content.appendChild(divCheckBox);

//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
//
//
