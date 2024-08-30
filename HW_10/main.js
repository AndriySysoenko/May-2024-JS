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
        document.body.appendChild(msgInfo);

})

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

