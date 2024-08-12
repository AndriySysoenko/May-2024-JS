//---------------------------створити масиви з 5 елементами----------------------------------------//
let arrNumber = [56, 90, 32, 16, -78];
let arrString = ['summer', 'word', 'sky', 'yellow', 'world'];
let arrMix = [64, 'round', false, -22, true];

console.log(arrNumber);
console.log(arrString);
console.log(arrMix);

//---------------------------робота з заданним масивом---------------------------------//
// let num = [2,17,13,6,22,31,45,66,100,-18];
// console.log(num);
//-------------------------1 і 2------------------------------------//
// let i = 0;
// while (i < num.length){
//     console.log(num [i]);
//     ++i;
// }
//
// for (let i = 0; i < num.length; i++) {
//     console.log(num [i]);
// }
//------------------------3 і 4------------------------------------//
// let j = 0;
// while (j < num.length){
//     if (j % 2 !== 0) {
//         console.log(num [j]);
//     }
//     ++j;
// }
// for (let j = 0; j < num.length; j++) {
//     if (j % 2 !== 0) {
//         console.log(num [j]);
//     }
// }
// -----------------------5 і 6-----------------------------------//
// let k = 0;
// while (k < num.length){
//     if (k % 2 === 0) {
//         console.log(num [k]);
//     }
//     ++k;
// }
// for (let k = 0; k < num.length; k++) {
//     if (k % 2 === 0) {
//         console.log(num [k]);
//     }
// }
// -----------------------7---------------------------------------//
// let c = 0;
// while (c < num.length){
//     if (num[c] % 3 === 0) {
//         num [c] = 'okten';
//     }
//     ++c;
// }
// console.log(num);
//
// for (let c = 0; c < num.length; c++) {
//     if (num[c] % 3 === 0) {
//         num [c] = 'okten';
//
//     }
// }
// console.log(num);
// -------------------------8--------------------------------------//
// let b = num.length-1;
// while (b >= 0){
//     console.log(num [b]);
//     --b;
// }
//
// for (let b = num.length-1; b >= 0 ; b--) {
//     console.log(num [b]);
// }
//--------------------------9----------------------------------------//
// let n = num.length-1;
// while (n >= 0){
//     if (n % 2 !== 0) {
//         console.log(num [n]);
//     }
//     --n;
// }
// for (let n = num.length-1; n >= 0; n--) {
//     if (n % 2 !== 0) {
//         console.log(num [n]);
//     }
// }

// let m = num.length-1;
// while (m >= 0){
//     if (m % 2 === 0) {
//         console.log(num [m]);
//     }
//     --m;
// }
// for (let m = num.length-1; m >= 0; m--) {
//     if (m % 2 === 0) {
//         console.log(num [m]);
//     }
// }

// let x = num.length-1;
// while (x >= 0){
//     if (num[x] % 3 === 0) {
//         num [x] = 'okten';
//     }
//     --x;
// }
// console.log(num);
//
// for (let x = num.length-1; x >= 0; x--) {
//     if (num[x] % 3 === 0) {
//         num [x] = 'okten';
//
//     }
// }
// console.log(num);

//_______________створити масиви з 10 елементами_______________________________//
// let numb = [468, 54, 98, -634, 124, -88, 362, 4, -17, 746];
// for (let i = 0; i < numb.length; i++) {
//     console.log(numb[i]);
// }
//
// let str = ['write', 'speck', 'white', 'house', 'cup', 'milk', 'cross', 'angel', 'price', 'cost'];
// let i = 0;
// while (i < str.length){
//     console.log(str[i]);
//     ++i;
// }

// let differ = ['rush', 348, true, 'black', false, -26, 'table', true, 'apple', 934];
// for (let i = 0; i < differ.length; i++) {
//     console.log(differ[i]);
// }
//
// let a = 0
// while (a < differ.length){
//     if(typeof differ[a] === 'boolean') {
//         console.log(differ[a]);
//     }
//     ++a;
// }
//
// for (let k = 0; k < differ.length; k++) {
//     if(typeof differ[k] === 'number') {
//         console.log(differ[k]);
//     }
// }
//
// for (const str of differ) {
//     if(typeof str === 'string') {
//         console.log(str);
//     }
// }

//_____________________________порожгій масив___________________________________//
// let mix = [];
//     mix[0] = 'bread';
//     mix[1] = 73;
//     mix[2] = false;
//     mix[3] = true;
//     mix[4] = 'green';
//     mix[5] = 621;
//     mix[6] = 'bird';
//     mix[7] = 'email';
//     mix[8] = 456;
//     mix[9] = -94;
// for (let i = 0; i < mix.length; i++) {
//     console.log(mix[i])
// }

// for (let j = 0; j < 10; j++) {
//    console.log(j);
//    document.write(`<div>${[j]}</div>`)
// }

// for (let k = 0; k < 100; k++) {
//    console.log(k);
//    document.write(`<div>${[k]}</div>`)
// }

// for (let c = 0; c < 100; c += 2) {
//     console.log(c);
//     document.write(`<div>${[c]}</div>`)
// }

// for (let l = 0; l < 100; l++) {
//     if(l % 2 === 0){
//    console.log(l);
//    document.write(`<div>${[l]}</div>`)
// }
// }

// for (let y = 0; y < 100; y++) {
//     if(y % 2 !== 0){
//         console.log(y);
//     document.write(`<div>${[y]}</div>`)
//     }
// }