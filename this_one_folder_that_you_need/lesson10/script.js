// // Завдання 1
//
function userCard(number) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = number;
    setTimeout(()=>{

    },1000);
    function getCardOptions() {

        return {
            balance,
            transactionLimit,
            historyLogs,
            key
        }
    }

    function putCredits(money) {
        balance += money;
        historyLogs.unshift(createObjectHistoryLog('Received credits',money));
        console.log(`Операція пройшла успішно. Ваш баланс повнено на ${money} UAH. Ваш баланс становить ${balance} UAH`);
    }

    function takeCredits(money) {
        if (balance >= money && money <= transactionLimit) {
            balance -= money;
            historyLogs.unshift(createObjectHistoryLog('Withdrawal of credits',money));

            console.log(`Операція пройшла успішно. З вашого балансу списано ${money} UAH. Ваш баланс становить ${balance} UAH`);
        }else {
            console.error('Операція не можлива')
        }
    }

    function setTransactionLimit(limit) {
        if (limit>0){
            transactionLimit = limit;
            historyLogs.unshift(createObjectHistoryLog('Transaction limit change',limit));
            console.log(`Ліміт карти змінино. Тепер ліміт карти становить ${limit} UAH`);
        }

    }

    function transferCredits(money,card) {
        let moneyWithTax = (money*1.005).toFixed(2);

        if (balance>=moneyWithTax&&transactionLimit>moneyWithTax){
            card.putCredits(money);
            this.takeCredits(moneyWithTax) ;
        }else {
            console.error('Операція не можлива');
        }
    }


    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    }
}

function createObjectHistoryLog(operationType,credits){
    let date = new Date();
    let day = date.getDay()<10?"0"+date.getDay():date.getDay();
    let month = date.getMonth()<10?"0"+date.getMonth():date.getMonth();
    let hours = date.getHours()<10?"0"+date.getHours():date.getHours();
    let mins = date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes();
    let seconds = date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds();
    return {
        operationType:operationType,
            credits: credits,
        operationTime: `${day}/${month}/${date.getFullYear()}, ${hours}:${mins}:${mins}`,

    }
}
//
//
// let card = userCard(3);
//
// let card2 = userCard(2);
//
// //Ложим гроші
// console.log(card.getCardOptions());
// card.putCredits(2000);
//
// //Знімаєм гроші
// console.log(card.getCardOptions());
// card.takeCredits(94);
//
// //Змінюєм ліміти карти гроші
// console.log(card.getCardOptions());
// card.setTransactionLimit(4);
//
// //Операція повина не пройти бо маленький ліміт
// console.log(card.getCardOptions());
// card.takeCredits(5);
//
// //Міняєм ліміт на нормальний
// console.log(card.getCardOptions());
// card.setTransactionLimit(400);
//
// // Переводим кошти іншому користувачу
// console.log(card.getCardOptions());
// card.transferCredits(220,card2);
//
// console.log(card.getCardOptions());
// console.log(card2.getCardOptions());

// Завдання 2

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards=[];
    }

    addCard(){
        if (this.cards.length<3){
            let card = userCard(this.cards.length+1);
            this.cards.push(card);
        }else {
            console.log('Перевищений дозволений ліміт карток');
        }
    }
    getCardByKey(numb){
        if (this.cards.length>0){
            return this.cards[numb-1];
        }

    }
    
}


let user = new UserAccount('Bob');
user.addCard();
user.addCard();
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);
card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);
card2.takeCredits(50);
console.log(card1.getCardOptions()); //
console.log(card2.getCardOptions()); //