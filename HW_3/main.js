// --------------------------Цикл for------------------------------------//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>
//         <h2>Lorem ipsum dolor sit amet.</h2>
//     </div>`)
// }
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>
//         <h2>Lorem ipsum dolor sit amet. - ${i}</h2>
//     </div>`)
// }

//--------------------------Цикл While----------------------------------//
// let i = 0;
// while (i < 20){
//     document.write(`<div>
//         <h1>Lorem ipsum dolor sit amet.</h1>
//         </div>`)
//     i++;
// }

// let j = 0;
// while (j < 20){
//     document.write(`<div>
//         <h1>Lorem ipsum dolor sit amet. - ${j}</h1>
//         </div>`)
//     j++;
// }

//---------------------------Список з наведенного масива--------------------//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// for (let i =0; i < listOfItems.length; i++) {
//     document.write(`<ul>
//             <li>${listOfItems[i]}</li>
//          </ul>`)
// }
// for (const unite of listOfItems) {
//     document.write(`<ul>
//             <li>${unite}</li>
//          </ul>`)
// }

// --------------------------Продуктові картки----------------------------//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const card of products) {
    document.write(`<div class="product-card">
        <h3 class="product-title">${card.title}. Price - ${card.price}</h3>
        <img src="${card.image}" alt="${card.title}" class="product-image">
    </div>`)
}