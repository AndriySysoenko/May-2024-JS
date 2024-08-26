let block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.innerText = 'Fist task';
document.body.appendChild(block)

let clone = block.cloneNode(true);
document.body.appendChild(clone);

//___________________Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)__________________//
let arr = ['Main','Products','About us','Contacts'];

let list = document.createElement('ul');

for (const item of arr) {
    let pointList = document.createElement('li');
    pointList.innerText = item;
    list.appendChild(pointList);
}

document.body.appendChild(list);

//_________________________________Для кожного елементу масиву зробити блок_______________________________________//
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const item of coursesAndDurationArray) {
    let separateBlock = document.createElement('div');
    separateBlock.innerText = item.title + ' ' + '-' + ' ' + item.monthDuration;
    document.body.appendChild(separateBlock);
}

for (const course of coursesAndDurationArray) {
    let area = document.createElement('div');
    area.classList.add('item');

    let titleArea = document.createElement('h1');
    titleArea.classList.add('heading');
    titleArea.innerText = course.title;

    let info = document.createElement('p');
    info.classList.add('description');
    info.innerText = course.monthDuration;

    area.append(titleArea, info)
    document.body.appendChild(area);
}