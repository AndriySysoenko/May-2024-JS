let array = [365, 'white', -57, 89, false, 'home', 'green', 911, 'work', 25]
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

let data =[]
data[0]= 365;
console.log(array[0]);
data[1]= 'white';
console.log(array[1]);
data[2]= -57;
console.log(array[2]);
data[3]= 89;
console.log(array[3]);
data[4]= false;
console.log(array[4]);
data[5]= 'home';
console.log(array[5]);
data[6]= 'green';
console.log(array[6]);
data[7]= 911;
console.log(array[7]);
data[8]= 'work';
console.log(array[8]);
data[9]= 25;
console.log(array[9]);

// -------------------object book------------------//
let book1= {
    title : 'Aeneid',
    pageCount: 250,
    genre: 'poyema'
}
console.log(book1)

let book2 ={
    title : 'Kobzar',
    pageCount: 600,
    genre: 'verse'
}
console.log(book2)

let book3 ={
    title : 'Idiot',
    pageCount: 476,
    genre: 'novel'
}
console.log(book3)

let book4 ={
    title : 'Shōgun',
    pageCount: 860,
    genre: 'novel',
    authors: ['James Clavell', 72]
}
console.log(book4)

let book5 ={
    title : 'Favorite',
    pageCount: 650,
    genre: 'novel',
    authors: ['Valentin Pikul', 62]
}
console.log(book5)

let book6 ={
    title : 'Master and Margarita',
    pageCount: 320,
    genre: 'novel',
    authors: ['Mikhail Bulgakov', 48]
}
console.log(book6)

//-----------------------user------------------------------//
let users =[
    {name : 'Andrey', username : 'kazznachey', password: 'ru489y39f90'},
    {name : 'Sergey', username : 'serge', password: '0ojoei873'},
    {name : 'Sasha', username : 'sanek', password: 'nvpqeourh97ry'},
    {name : 'Nikolay', username : 'kol', password: 'pfmeoito834tbik'},
    {name : 'Viсtor', username : 'victory', password: '7546uto80094'},
    {name : 'Roman', username : 'romchik', password: '08fheuyt8oknkh'},
    {name : 'Ilya', username : 'ilich', password: 'bvejryg3u6vdbjw'},
    {name : 'Vladislav', username : 'oladik', password: 'a45okrpijihyo'},
    {name : 'Ekaterina', username : 'katie', password: '5okbiu3yuhfnwo'},
    {name : 'Victoria', username : 'vikki', password: 'mkhiuwegh298r2'},
]
console.log(users[0].password)
console.log(users[1] ['password'])
console.log(users[2].password)
console.log(users[3] ['password'])
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6] ['password'])
console.log(users[7].password)
console.log(users[8] ['password'])
console.log(users[9].password)

//-----------------------temperature array---------------------------//

let monday = [19, 29, 26]
let tuesday = [20, 31, 24]
let wednesday = [18, 26, 19]
let thursday = [16, 22, 26]
let friday = [19, 25, 24]
let saturday = [21, 26, 26]
let sunday = [19, 25, 26]
let week = [monday, tuesday, wednesday, thursday, friday, saturday, sunday]
console.log(week)

let week2 = [[19, 29, 26], [20, 31, 24], [18, 26, 19], [16, 22, 26], [19, 25, 24], [21, 26, 26], [19, 25, 26]]
console.log(week2)

//---------------------------conditions--------------------------------//
// let x = +prompt()
// if(x !== 0) {
//     console.log('Вірно')
// }
// else{
//     console.log('Невірно')
//     }

//----------------------time-hours-----------------------//
// let time = +prompt('enter number from 0 to 59')
// if (time > 0 && time <=15){
//     console.log('first quarter of an hour')
// }
// else if (time>15 && time<=30){
//     console.log('second quarter of an hour')
// }
// else if (time>30 && time<=45){
//     console.log('third quarter of an hour')
// }
// else if (time>45 && time<=59){
//     console.log('fourth quarter of an hour')
// }
// else if (time===0){
//     console.log('fourth quarter of an hour')
// }

//-------------------------time-days---------------------------------//
// let day = +prompt('enter number from 1 to 31')
// if (day >= 1 && day <=10){
//     console.log('first ten days of the month')
// }
// else if (day>10 && day<=20){
//     console.log('second ten days of the month')
// }
// else if (day>20 && day<=31){
//     console.log('third ten days of the month')
// }

//---------------------diary-------------------------------------//
// let dayWeek = prompt('enter number from 1 to 7')
// switch (dayWeek){
//     case '1':
//         console.log('Monday');
//         break
//     case '2':
//         console.log('Tuesday');
//         break
//     case '3':
//         console.log('Wednesday');
//         break
//     case '4':
//         console.log('Thursday');
//         break
//     case '5':
//         console.log('Friday');
//         break
//     case '6':
//         console.log('Saturday');
//         break
//     case '7':
//         console.log('Sunday');
//         break
// }

//--------------------------two numbers-------------------------------//
// let a = +prompt('enter any number')
// let b = +prompt('enter any number again')
// if (a > b){
//     console.log(a);
// }
// else if (b > a){
//     console.log(b);
// }
// else{
//     console.log('entered numbers are equal');
// }

//---------------------------falsy-значення--------------------------//
let x = 0;
if (x === false || x === 0 || x === undefined || x === null){
    x = 'default';
    console.log(x);
}

//-------------------------------duration of training-------------------//
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Супер');
}