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

let arrStr = num.map ((value, index) => num[index]  + '')

console.log(num);
console.log(arrStr);
//-----------------------------------------------------------------//
let arrNum = [11,21,3];

function sortNums (array, order) {
    let arrSort = array.sort((a, b) => {
        if(order === 'ascending'){
          return a - b;
        }
        else{
            return b - a;
        }
    });
    return arrSort;
}
console.log(sortNums(arrNum, 'ascending'));
console.log(sortNums(arrNum, 'descending'));
console.log(sortNums(arrStr, 'ascending'));
console.log(sortNums(num, 'descending'));

//______________________________________________________массива з об'єктами__________________________________________//
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortArr = coursesAndDurationArray.toSorted((courses1, courses2) => courses2.monthDuration - courses1.monthDuration);
console.log(sortArr)

let filterArr = sortArr.filter(value => value.monthDuration > 5);
console.log(filterArr)

let changeArr = coursesAndDurationArray.map ((value, index) => {
    return {
        id: index + 1,
        title : value.title,
        monthDuration: value.monthDuration
    }
})
console.log(changeArr)

//______________________________________________описати колоду карт (від 6 до туза без джокерів)________________________________________//
const suit = ['spade', 'diamond', 'clubs', 'heart'];
const values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

const cardHolder = [];
for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < values.length; j++) {
        const cards = {cardSuit: suit[i], value: values[j]};
        if (suit[i] === 'spade' || suit[i] === 'clubs') {
            cards.color = 'black';
        } else{
            cards.color = 'red';
    }
    cardHolder.push(cards);
    }
}
console.log(cardHolder);

let spadeAce = cardHolder.find(value => value.cardSuit === 'spade' && value.value === 'ace');
console.log(spadeAce);

let sixes = cardHolder.filter(value => value.value === '6');
console.log(sixes);

let colors = cardHolder.filter(value => value.color === 'red');
console.log(colors);

let suitDiamond = cardHolder.filter(value => value.cardSuit === 'diamond');
console.log(suitDiamond);

let suitClubs = cardHolder.filter(value => value.cardSuit === 'clubs' && (value.value !== '6' && value.value !== '7' && value.value !== '8'));
console.log(suitClubs);

//________________________________________________упакувати всі карти по "мастях" в об'єкт________________________________//
const groupCardHolder = cardHolder.reduce((repo, cards) => {
    switch (cards.cardSuit){
        case 'spade':
        repo.spades.push(cards);
        break;
        case 'diamond':
        repo.diamonds.push(cards);
        break;
        case 'clubs':
        repo.clubs.push(cards);
        break;
        case 'heart':
        repo.hearts.push(cards);
        break;
}
    return repo
}, {spades:[], diamonds:[], clubs:[], hearts:[]});

console.log(groupCardHolder);

const splitCardHolder = cardHolder.reduce((repo, cards) => {
    if (cards.cardSuit === 'spade'){
        repo[0].push(cards);
    }
    if (cards.cardSuit === 'diamond'){
        repo[1].push(cards);
    }
    if (cards.cardSuit === 'clubs'){
        repo[2].push(cards);
    }
    if (cards.cardSuit === 'heart'){
        repo[3].push(cards);
    }
    return repo
}, [[], [], [], []]);

console.log(splitCardHolder);
//____________________________________взяти з arrays.js масив coursesArray____________________________//
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let directions1 = coursesArray.filter(value => value.modules.includes('sass'));
console.log(directions1);

let directions2 = coursesArray.filter(value => value.modules.includes('docker'));
console.log(directions2);