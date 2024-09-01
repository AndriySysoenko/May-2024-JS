let block = document.getElementById('text');
let touch = document.getElementsByTagName('button')[0];

touch.onclick = function (){
    // block.style.display = 'none';
    block.remove();
}

//____________________________інпут який приймає вік людини та кнопку яка підтверджує дію_________________________//
let formAged = document.forms.aged;

formAged.addEventListener('submit', function (event) {
    event.preventDefault();
    let ageValue = +formAged.age.value;
    console.log(ageValue);
    if (ageValue < 18){
        let msg = document.createElement('p');
        msg.innerText = 'Ще маленький. Треба щонайменьше 18 років';
        document.body.insertBefore(msg, allInfo);
    }
})

document.addEventListener('DOMContentLoaded', function() {
    formAged.reset();
});

//__________________При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.____________________//

let allInfo = document.forms.allInfo;

allInfo.addEventListener('submit', function (event) {
    event.preventDefault();
    let nameInfo = allInfo.name.value;
    let surnameInfo = allInfo.surname.value;
    let ageInfo = allInfo.age.value;
    let personalInfo = {nameInfo, surnameInfo, ageInfo}
    console.log(personalInfo);

        let msgInfo = document.createElement('p');
        msgInfo.innerText = personalInfo.nameInfo + ' ' + personalInfo.surnameInfo + ' ' + personalInfo.ageInfo;
        document.body.insertBefore(msgInfo, countReload);

})

document.addEventListener('DOMContentLoaded', function() {
    allInfo.reset();
});

//____________________________написати код, який при кожному перезавантажені сторінки буде додавати до неї +1____________________//
let counterLoad = +localStorage.getItem('counter');
counterLoad +=1;
localStorage.setItem('counter', counterLoad)

let blockLoad = document.getElementsByTagName('span')[0];
blockLoad.innerText = counterLoad;

//_________при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html__________________//
let sessionsList = [];
if (localStorage.getItem('sessionsList')) {
    sessionsList = JSON.parse(localStorage.getItem('sessionsList'));
}
sessionsList.push(new Date());
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));

//_________________створити конвертор ваги з кг в фунти. данні заповнюються через інпут._________________________//
let enterKilo = document.getElementById('change');
let totalConvert = document.getElementById('total');

enterKilo.oninput = function(){
    totalConvert.innerText = this.value * 2.2;
}

// _________________функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт__________________//
let arrOne = [
    {id:1, name:'slavik', surname:'kovalenko', email:'bviuhil@gmail.com', phone:'+380752818356'},
    {id:2, name:'viktor', surname:'khristenko', email:'nkhkli@gmail.com', phone:'+380723344555'}
];
let arrTwo = [
    {id:1, name:'seva', surname:'ivanov', email:'gfdghv@gmail.com', phone:'+380727687987'},
    {id:2, name:'vlad', surname:'sidorov', email:'zdfasedf@gmail.com', phone:'+380754151621'}
];
let arrThree = [
    {id:1, name:'ivan', surname:'kotov', email:'dfsbdthde@gmail.com', phone:'+380756775578'},
    {id:2, name:'viktoria', surname:'gukova', email:'tdgndthdv@gmail.com', phone:'+380956164589'}
];

localStorage.setItem('arrOne', JSON.stringify(arrOne));
localStorage.setItem('arrTwo', JSON.stringify(arrTwo));
localStorage.setItem('arrThree', JSON.stringify(arrThree));


function addObject (arrName, object) {
    let changeArr = JSON.parse(localStorage.getItem(arrName));

    changeArr.push(object)
    return localStorage.setItem(arrName, JSON.stringify(changeArr));
}

addObject('arrOne', {id:7, name:'nika', surname:'kuzina', email:'svrsgsss@gmail.com', phone:'+380962534416'});
addObject('arrTwo', {});
addObject('arrThree', {id:8, name:'mila', surname:'phurd', email:'vefvefgertr@gmail.com', phone:'+380958908090'});

//___Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк._____//
let tableData = document.forms['table'];
let creatTable = document.createElement('table');

tableData.addEventListener('submit', function (event) {
    creatTable.innerText = '';
    event.preventDefault();
    let rowData = +tableData.row.value;
    let columnData = +tableData.column.value;
    let infoData = tableData.info.value;


for (let i = 0; i < rowData; i++) {
    let row = document.createElement('tr');
        for (let j = 0; j < columnData; j++) {
            let column = document.createElement('td');
            column.innerText = infoData;
            row.appendChild(column);
            column.style.border = '1px solid black';
            column.style.padding = '5px';
        }
    creatTable.appendChild(row)
}
    document.body.insertBefore(creatTable, price);
    creatTable.style.border = '2px solid black';
})

document.addEventListener('DOMContentLoaded', function() {
    tableData.reset();
});

//___________________при перезавантаженні сторінки до значаення додається по 10грн, але !!!______________________//
let standardTime = +localStorage.getItem('lastVisitTime') || 0;

let counterPrice = +localStorage.getItem('price') || 90;
let timeLoad = new Date().getTime();
    if(timeLoad - standardTime > 10000){
        counterPrice += 10;
        localStorage.setItem('lastVisitTime', JSON.stringify(timeLoad));
    }
localStorage.setItem('price', counterPrice)

let blockPrice = document.getElementsByTagName('p')[0];
blockPrice.innerText = counterPrice + 'грн';