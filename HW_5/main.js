//_______________________площа прямокутника зі сторонами а і б_________________//
areaRectangle = (sideA, sideB) => sideA * sideB;

console.log(areaRectangle(7, 8));

//_____________________площа кола з радіусом r_____________________________//
areaRound = radius => Math.PI * Math.pow(radius, 2);

console.log(areaRound (6));

//______________________площа циліндру висотою h, та радіутом r_______________//
areaCylinder = (radius, height) => 2 * Math.PI * Math.pow(radius, 2) + 2 * Math.PI * radius * height;

let resultCylinder = areaCylinder (5, 6);
console.log(resultCylinder);

//_____________________масив та виводить кожен його елемент___________________//
let newArr = [43, 'work', 89, 21, 54, 67, false];

workArr = array => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

workArr(newArr);

//_________створює параграф з текстом та виводить його через document.write________//
write = (text) => {
    document.write(`<p>${text}</p>`);
}

write('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur atque enim hic magnam necessitatibus nihil, officia repudiandae sequi similique!');

//_________створює ul з трьома елементами li та виводить його через document.write__________//
list = text => {
    document.write(`<ul>
                    <li>${text}</li>
                    <li>${text}</li>
                    <li>${text}</li>
    </ul>`)
}
list ('Lorem ipsum dolor.');

//__________Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом________//
expandList = (text, itemList) => {
    document.write(`<ul>`)
    for (let i = 0; i < itemList; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write (`</ul>`)
}

expandList ('Lorem ipsum dolor sit.', 6);

//______________масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li)__________//
let mixArr = [98, - 27, 'cow', 'rain', 351, false, 'dove', -985, true, 44];

creatList = (array) => {
    document.write(`<ul>`)
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write (`</ul>`);
}

creatList (mixArr);
creatList (newArr);

//_____________масив об'єктів з наступними полями id,name,age , та виводить їх в документ._________________//
let arrObject = [{id:1, name:'chery', age:22}, {id:2, name: 'onion', age: 17}, {id:3, name:"melon", age:8}, {id:4, name:"apple", age:30}]

workObject = array => {
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
let numArr = [45, 889, -34, 768, -111, 7588, 564, 6, -48, 255];

minValue = (array) => {
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
let number = [28, 35, 109, 42, -68, 53, 92, -27, 101];

sum = arr => {
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

swap = (arr,index1,index2) => {
    let x = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = x;
    return arr;
}

console.log(swap(chang, 0, 3));

//_________________________функція обміну валюти exchange_________________________________//
let currency = [{currency:'USD',value:25},{currency:'EUR',value:44},{currency:'GBR',value:48}];

exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let needCurrency;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency){
            needCurrency = currencyValues[i];
        }
    }
    return sumUAH / needCurrency.value;
}

console.log(exchange(20000,currency,'EUR'));