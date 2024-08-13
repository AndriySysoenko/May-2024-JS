//_______________________площа прямокутника зі сторонами а і б_________________//
function areaRectangle (sideA, sideB){
    return sideA * sideB;
}

let result = areaRectangle(5, 6);
console.log(result);

//_____________________площа кола з радіусом r_____________________________//
function areaRound (radius){
    return Math.PI * Math.pow(radius, 2);
}

let resultRound = areaRound (4);
console.log(resultRound);

//______________________площа циліндру висотою h, та радіутом r_______________//
function areaCylinder (radius, height) {
    return 2 * Math.PI * Math.pow(radius, 2) + 2 * Math.PI * radius * height;
}

let resultCylinder = areaCylinder (4, 3);
console.log(resultCylinder);

//_____________________масив та виводить кожен його елемент___________________//
let newArr = [34, 98, 12, 45, 76, 'home', true];

function workArr (array){
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
workArr(newArr);

//_________створює параграф з текстом та виводить його через document.write________//
function write (text){
    document.write(`<p>${text}</p>`);
}

write('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur atque enim hic magnam necessitatibus nihil, officia repudiandae sequi similique!');

//_________створює ul з трьома елементами li та виводить його через document.write__________//
function list (text){
    document.write(`<ul>
                    <li>${text}</li>
                    <li>${text}</li>
                    <li>${text}</li>
    </ul>`)
}
list ('Lorem ipsum dolor.');

//__________Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом________//
function expandList (text, itemList){
    document.write(`<ul>`)
    for (let i = 0; i < itemList; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write (`</ul>`)
}

expandList ('Lorem ipsum dolor sit.', 7);

//______________масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li)__________//
let mixArr = [89, 72, 'hors', 'snow', -531, true, 'pig', 12, false, 488];

function creatList (array){
    document.write(`<ul>`)
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write (`</ul>`);
}

creatList (mixArr);
creatList (newArr);

//_____________масив об'єктів з наступними полями id,name,age , та виводить їх в документ._________________//
let arrObject = [{id:1, name:'forest', age:15}, {id:2, name: 'cake', age: 20}, {id:3, name:"zifir", age:5}]

function workObject (array){

    for (let i = 0; i < array.length; i++) {
        document.write(`<div>`)
        for (const key in array[i]) {
            document.write(`<span>${key}:${array[i][key]} </span>`);
        }
        document.write(`</div>`)
    }
}

workObject (arrObject);

//__________повертає найменьше число з масиву_________________________//
let numArr = [45, 889, -34, 768, -111, 7588, 564, 6, -489, 255];

function minValue (array){
    let minNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minNumber){
            minNumber = array[i];
        }
    }
    return minNumber;
}

console.log(minValue (numArr))

//________________________масив чисел, сумує значення елементів масиву та повертає його__________________//
let number = [8, 15, 89, 22, -48, 33, 72, -7, 81];

function sum (arr){
    let countSum = 0;
    for (let i = 0; i < arr.length; i++) {
        countSum = countSum + arr[i];
    }
    return countSum;
}

console.log(sum (number));
console.log(sum (numArr));

//_________________________функцію swap(arr,index1,index2)___________________________________//
let chang = [11,22,33,44]

function swap(arr,index1,index2){
    let x = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = x;
return arr;
}
swap(chang, 1, 3)
console.log(chang);

//_________________________функція обміну валюти exchange_________________________________//
let currency = [{currency:'USD',value:25},{currency:'EUR',value:44},{currency:'GBR',value:48}];

function exchange(sumUAH,currencyValues,exchangeCurrency){
    let needCurrency;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency){
            needCurrency = currencyValues[i];
        }
    }
    let resChange = sumUAH / needCurrency.value;
    return resChange;
}

console.log(exchange(10000,currency,'GBR'));