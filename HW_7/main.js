//_____________________________________створити функцію конструктор для об'єктів User________________________________//
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let arrUsers = [
    new User(1, 'slavik', 'kovalenko', 'bviuhil@gmail.com', '+380752818356'),
    new User(2, 'viktor', 'khristenko', 'nkhkli@gmail.com', '+380723344555'),
    new User(3, 'seva', 'ivanov', 'gfdghv@gmail.com', '+380727687987'),
    new User(4, 'vlad', 'sidorov', 'zdfasedf@gmail.com', '+380754151621'),
    new User(5, 'ivan', 'kotov', 'dfsbdthde@gmail.com', '+380756775578'),
    new User(6, 'viktoria', 'gukova', 'tdgndthdv@gmail.com', '+380956164589'),
    new User(7, 'nika', 'kuzina', 'svrsgsss@gmail.com', '+380962534416'),
    new User(8, 'mila', 'phurd', 'vefvefgertr@gmail.com', '+380958908090'),
    new User(9, 'dima', 'novikov', 'ljhiouhosu@gmail.com', '+380967565851'),
    new User(10, 'rimma', 'kolot', 'vrasfvssd@gmail.com', '+380663334542'),
]
console.log(arrUsers)

let arrUsersFilter = arrUsers.filter(value => value.id % 2 === 0);
console.log(arrUsersFilter)

let arrUsersSort = arrUsers.toSorted((us1, us2) => us2.id - us1.id);
console.log(arrUsersSort)

//___________________________________створити класс для об'єктів Client______________________________________________//
class  Client {
    constructor(id, name, surname , email, phone, order) {
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
            this.order = order;
    }
}

let clients = [
    new Client(1, 'slavik', 'kovalenko', 'bviuhil@gmail.com', '+380752818356', ['mixer', 'oven', 'chair']),
    new Client(2, 'viktor', 'khristenko', 'nkhkli@gmail.com', '+380723344555', ['phone', 'tv', 'play station', 'headphones']),
    new Client(3, 'seva', 'ivanov', 'gfdghv@gmail.com', '+380727687987', ['card reader', 'printer']),
    new Client(4, 'vlad', 'sidorov', 'zdfasedf@gmail.com', '+380754151621', ['microwave', 'player', 'phone']),
    new Client(5, 'ivan', 'kotov', 'dfsbdthde@gmail.com', '+380756775578', ['smart watch', 'coffee maker', 'headphones']),
    new Client(6, 'viktoria', 'gukova', 'tdgndthdv@gmail.com', '+380956164589', ['refrigerator', 'iron', 'frying pan']),
    new Client(7, 'nika', 'kuzina', 'svrsgsss@gmail.com', '+380962534416', ['washing machine', 'computer mouse', 'pots', 'table lamp']),
    new Client(8, 'mila', 'phurd', 'vefvefgertr@gmail.com', '+380958908090', ['scales', 'hair dryer', 'curling iron']),
    new Client(9, 'dima', 'novikov', 'ljhiouhosu@gmail.com', '+380967565851', ['phone', 'headphones']),
    new Client(10, 'rimma', 'kolot', 'vrasfvssd@gmail.com', '+380663334542', ['tv', 'sound bar', 'HDMI-cable']),
]
console.log(clients)

let clientSort = clients.toSorted((ord1, ord2) => ord1.order.length - ord2.order.length);
console.log(clientSort)

//_________________________створити функцію конструктор яка дозволяє створювати об'єкти car_________________________//
function Car(model, brand, yearCreate, maxSpeed, engineVolume) {
    this.model = model;
    this.brand = brand;
    this.yearCreate = yearCreate;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function ()  {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = () => {
        for (const key in this) {
            console.log(key, ':', this[key]);
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        if(newSpeed > 0){
        console.log(this.maxSpeed + newSpeed);
        }
    };
    this.changeYear = (newValue) =>{
        if(newValue > 1900){
        console.log(this.yearCreate = newValue);
        }
    }
    this.addDriver = (driver) =>{
        this.driver = driver;
    }
}

const car = new Car ('Megane3', 'Renault', 2013, 220, 1500);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(70);
car.changeYear(2018);
car.addDriver({name: 'igor', age: '32', health: 'norm'});

//________________________________створити клас який дозволяє створювати об'єкти car________________________________//
class  Cars {
    constructor(model, brand, yearCreate, maxSpeed, engineVolume) {
        this.model = model;
        this.brand = brand;
        this.yearCreate = yearCreate;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive ()  {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    info = () => {
        for (const key in this) {
            console.log(key, ':', this[key]);
        }
    };
    increaseMaxSpeed = function (newSpeed) {
        if(newSpeed > 0){
            console.log(this.maxSpeed + newSpeed);
        }
    };
    changeYear = (newValue) =>{
        if(newValue > 1900){
            console.log(this.yearCreate = newValue);
        }
    }
    addDriver = (driver) => {
        this.driver = driver;
    }
}

const cars = new Cars ('Kugo', 'Ford', 2016, 270, 2000);
console.log(cars);

cars.drive();
cars.info();
cars.increaseMaxSpeed(100);
cars.changeYear(2021);
cars.addDriver({name: 'igor', age: '32', health: 'norm'});

//___________________________створити класс/функцію конструктор попелюшка__________________________________________//
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name, age, shoesSize) {
        this.name = name;
        this.age = age;
        this.shoesSize = shoesSize;
    }
}

let cinderellas = [
    new Cinderella('mirabella', 17, 35),
    new Cinderella('korovella', 16, 34),
    new Cinderella('nikoletta', 19, 35),
    new Cinderella('vasinella', 18, 36),
    new Cinderella('margarit', 19, 34),
    new Cinderella('claris', 18, 36),
    new Cinderella('ioganna', 17, 38),
    new Cinderella('desdemona', 20, 37),
    new Cinderella('cinderella', 18, 32),
    new Cinderella('gorgetta', 16, 33),
]

let groom= new Prince('Louis', 21, 32);
console.log(groom);

let bride;

for (const person of cinderellas) {
    if(person.footSize === groom.shoesSize){
        bride = person;
    }
}
console.log(bride);

let brideFind = cinderellas.find(value => value.footSize === groom.shoesSize);
console.log(brideFind);

//___________________________________*Через Array.prototype. створити власний foreach, filter________________________//
Array.prototype.typeForEach = function (callback){
    for (let item of this) {
        callback (item.toString());
    }
}

let changeArr =  [23, false, 34, 42, 45, true, 'home'];
changeArr.typeForEach (value => console.log(value))
console.log (changeArr)

Array.prototype.oderFilter = function (callback){
    const buyer = [];
    for (const unit of this) {
        if(callback(unit) <= 2) {
            buyer.push(unit);
        }
    }
    return buyer
    }

let badBuyer = clients.oderFilter(value => value.order.length);
console.log(badBuyer)