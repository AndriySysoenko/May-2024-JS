//___________________________________Створити функцію, яка робить глибоку копію об'єкту.____________________________//
function Copy(object) {
    let foo = {};
    for (let key in object) {
        if (object[key] === undefined || object[key] === null || Number.isNaN(object[key])){
            delete object[key];
        }
        if (typeof object[key] === "function") {
            foo[key] = object[key];
        }
    }
    let json = JSON.stringify(object);
    let pars = JSON.parse(json);

    for (let key in foo) {
        pars[key] = foo[key];
    }

    return pars;
}

let fistObject = {id: 1, name: 'slavik', surname:'kovalenko', email:null, greeting: function(){}};
console.log(fistObject)

let copyObject = Copy(fistObject)
console.log(copyObject)

console.log(fistObject === copyObject);
console.log(fistObject.greeting() === copyObject.greeting());
//------------------------------------------------------------------------------------------------------------------//

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let newArr = coursesAndDurationArray.map ((value, index) => ({id : index + 1, ...value}));
console.log(newArr)
