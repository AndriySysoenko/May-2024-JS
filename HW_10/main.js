let block = document.getElementById('text');
let touch = document.getElementsByTagName('button')[0];

touch.onclick = function (){
    // block.style.display = 'none';
    block.remove();
}

//____________________________інпут який приймає вік людини та кнопку яка підтверджує дію_________________________//
let formAged = document.forms.aged;

formAged.addEventListener('submit', function (event) {
    event.preventDefault();
    let ageValue = +formAged.age.value;
    console.log(ageValue);
    if (ageValue < 18){
        let msg = document.createElement('p');
        msg.innerText = 'Ще маленький. Треба щонайменьше 18 років';
        document.body.insertBefore(msg, allInfo);
    }
})

let allInfo = document.forms.allInfo;

allInfo.addEventListener('submit', function (event) {
    event.preventDefault();
    let nameInfo = allInfo.name.value;
    let surnameInfo = allInfo.surname.value;
    let ageInfo = allInfo.age.value;
    let personalInfo = {nameInfo, surnameInfo, ageInfo}
    console.log(personalInfo);

        let msgInfo = document.createElement('p');
        msgInfo.innerText = personalInfo.nameInfo + ' ' + personalInfo.surnameInfo + ' ' + personalInfo.ageInfo;
        document.body.appendChild(msgInfo);

})

