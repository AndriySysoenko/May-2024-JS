//____________робота зі string_______________________________//
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

console.log(str1, str1.length);
console.log(str2, str2.length);
console.log(str3, str3.length);
//--------------------------------------------------------------//
let srtUP1 = str1.toUpperCase()
let srtUP2 = str2.toUpperCase()
let srtUP3 = str3.toUpperCase()

console.log(srtUP1);
console.log(srtUP2);
console.log(srtUP3);
//--------------------------------------------------------------//
console.log(srtUP1.toLowerCase());
console.log(srtUP2.toLowerCase());
console.log(srtUP3.toLowerCase());
//-------------------------------------------------------------//
let str = ' dirty string   ';
console.log(str, str.length);
let clearStr = str.trim();
console.log(clearStr, clearStr.length);
//------------------------------------------------------------//
let string = 'Ревуть воли як ясла повні';
stringToArray = (string) => string.split (' ');

let arr = stringToArray(string);
console.log(arr);
console.log(stringToArray(str));
console.log(stringToArray(clearStr));
//----------------------------------------------------------//
let num = [10,8,-7,55,987,-1011,0,1050,0];

let arrStr = num.map ((value, index) => num[index] = num[index]  + '')

console.log(arrStr)
//-----------------------------------------------------------------//