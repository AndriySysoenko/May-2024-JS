let sessionsList = JSON.parse(localStorage.getItem('sessionsList'));
let generalBlock = document.createElement('div');
document.body.appendChild(generalBlock);

for (let listElement of sessionsList) {
   let info = document.createElement('p');
   info.innerText = listElement.toString();
   generalBlock.appendChild(info);
}