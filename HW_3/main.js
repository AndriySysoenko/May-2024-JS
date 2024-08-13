// --------------------------Цикл for------------------------------------//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>
//         <h2>Lorem ipsum dolor sit amet.</h2>
//     </div>`)
// }
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>
//         <h2>Lorem ipsum dolor sit amet. - ${i}</h2>
//     </div>`)
// }

//--------------------------Цикл While----------------------------------//
// let i = 0;
// while (i < 20){
//     document.write(`<div>
//         <h1>Lorem ipsum dolor sit amet.</h1>
//         </div>`)
//     i++;
// }

// let j = 0;
// while (j < 20){
//     document.write(`<div>
//         <h1>Lorem ipsum dolor sit amet. - ${j}</h1>
//         </div>`)
//     j++;
// }

//---------------------------Список з наведенного масива--------------------//
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`)
//     for (let i =0; i < listOfItems.length; i++) {
//     document.write(`<li>${listOfItems[i]}</li>`)
// }
// document.write(`</ul>`)
document.write(`<ul>`)
for (const unite of listOfItems) {
    document.write(`<li>${unite}</li>`)
}
document.write(`</ul>`)

// -----------------------------розподіл на масиви---------------------------------------//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// let arrStatusTrue = [];
// let arrStatusFalse = [];
// let arrAge = [];
//
// let i = 0;
// while (i < users.length){
//     if (users[i].status){
//         arrStatusTrue[arrStatusTrue.length] = users[i].status;
//     }
//     else{
//         arrStatusFalse[arrStatusFalse.length] = users[i].status;
//     }
//     ++i;
// }
// // let j = 0;
// // while (j < users.length) {
// //     if (users[j].age > 30) {
// //         arrAge[arrAge.length] = users[j].age
// //     }
// //     ++j
// // }
//
// for (let j = 0; j < users.length; j++) {
//     const item = users[j].age;
//     if (item > 30) {
//         arrAge[arrAge.length] = item;
//     }
// }
//
// console.log(arrStatusTrue);
// console.log(arrStatusFalse);
// console.log(arrAge);