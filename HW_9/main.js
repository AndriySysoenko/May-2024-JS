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

//____________________________simpsons____________________________________________________________//
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

for (const members of simpsons) {
    let infoCard = document.createElement('div');
    infoCard.classList.add('member');

    let nameMembers = document.createElement('h2');
    nameMembers.innerText = members.name + ' ' + members.surname + ' '+'-'+' ' + members.age;

    let image = document.createElement('img');
    image.src = members.photo;

    let description = document.createElement('p');
    description.innerText = members.info;

    infoCard.append(nameMembers, image, description)
    document.body.appendChild(infoCard);
}

//____________________________________________створити три блоки з різним текстовим контентом._______________________//
// let card1 = document.createElement('div');
// let text1 = document.createElement('p');
// text1.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque doloribus eius facilis hic illo laboriosam nesciunt nihil qui quo vel. Aspernatur corporis eius eos nemo voluptates? Accusamus architecto dolorum eum facilis, minus possimus quia rem ut. Ab adipisci animi assumenda dolore dolorem doloribus est ex excepturi fugit, illum in ipsam ipsum magnam molestiae natus nisi officia porro, quas quia ratione reiciendis repellendus rerum sed sunt tempora temporibus tenetur vero. Ea error et excepturi, hic, in ipsum labore nesciunt, praesentium quam quidem quis quo rem sapiente? Aspernatur earum officia quos recusandae sunt veritatis. Earum eveniet necessitatibus odio repudiandae suscipit. Hic, necessitatibus!';
//
// let card2 = document.createElement('div');
// let text2 = document.createElement('p');
// text2.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dicta enim natus! Assumenda dolorum ipsa laudantium libero molestias nam quasi quibusdam repellendus temporibus voluptates! Accusantium ad aliquam architecto asperiores consequatur consequuntur cumque debitis dignissimos dolorem ea earum error excepturi impedit incidunt inventore itaque iusto laboriosam magni minima, neque non nulla officiis omnis perferendis provident quae quaerat reiciendis repellat, reprehenderit repudiandae sapiente sunt totam voluptas. Ab architecto consequatur consequuntur deserunt dignissimos dolores, doloribus expedita iusto libero magni minus modi nam nesciunt optio placeat provident ratione repellat repudiandae sapiente similique sint veritatis voluptates. Accusantium ad aspernatur blanditiis commodi dolorum error eum exercitationem fugiat illo illum inventore iure laboriosam magnam mollitia natus nesciunt nostrum officiis quidem ratione soluta sunt tempore temporibus, tenetur ullam vero. Dolorem enim, error eum ex odio quasi quibusdam quis saepe suscipit voluptas? At, consectetur cupiditate, distinctio doloremque dolorum ea impedit ipsa ipsam laborum natus nemo nisi numquam quis, rem sunt tempore totam voluptatibus? A ab, amet aperiam deleniti dolore dolores eum explicabo inventore labore maxime nulla perspiciatis porro possimus quo suscipit velit voluptates. Aliquam, asperiores aspernatur atque corporis cum deserunt ipsam maxime natus nemo reiciendis sapiente suscipit. Aspernatur aut culpa cumque est, eveniet quam temporibus vel voluptatum? Aliquid aspernatur autem blanditiis consequatur culpa cumque distinctio, dolores ducimus eaque eligendi et expedita fugit id, iure magnam mollitia nesciunt non numquam obcaecati officia quas quidem ratione, recusandae reiciendis repellendus sapiente sequi suscipit tenetur vitae voluptatum. Ad aliquid amet atque consectetur corporis cupiditate delectus deserunt dicta distinctio dolores doloribus earum enim est exercitationem fugit ipsa molestiae necessitatibus placeat provident quas quia quisquam quo ratione recusandae reiciendis repellat rerum sequi sint sit suscipit totam, ut voluptates voluptatibus. Amet at dolorum minima minus neque nostrum optio porro quasi sit, sunt! Animi, aperiam ducimus facere facilis harum laudantium magni molestias nesciunt nobis perferendis sapiente sit, vitae voluptatibus. Accusamus culpa cum dignissimos ipsam molestias necessitatibus temporibus! Animi aspernatur consectetur consequuntur, corporis ducimus, ea et ipsam iste laudantium magni natus porro tenetur voluptate! Assumenda dignissimos dolorem esse impedit ipsam nam obcaecati quaerat quibusdam reiciendis voluptates. Aliquam autem deserunt doloremque expedita, inventore itaque magnam maxime mollitia necessitatibus omnis optio quia reiciendis suscipit velit veritatis! Delectus deleniti fugiat in magni non quasi quisquam quo, quos, repellendus suscipit tenetur veritatis voluptates voluptatum? Amet consequatur debitis delectus dicta doloribus dolorum ducimus, error facilis, fugiat hic itaque magnam molestias, nisi numquam odit porro possimus sunt. Adipisci assumenda cumque dolorem dolores doloribus labore nisi nostrum, numquam quibusdam, quod sunt tempora! Dolor dolore illo illum inventore neque numquam tenetur unde vitae. Aliquam aliquid, at autem debitis dicta distinctio dolore dolorem dolorum earum, eius eum exercitationem expedita facere in inventore labore laudantium magnam nesciunt nisi nulla odio quia quis recusandae sed suscipit tenetur unde veritatis, vero vitae voluptates. Delectus dolor error numquam reprehenderit vitae? A alias aperiam aut consectetur corporis cum cumque deleniti dignissimos ea eius, est eveniet excepturi expedita facere id illum incidunt inventore laborum laudantium libero modi nesciunt nihil obcaecati optio perferendis provident quas qui quod recusandae repellendus sequi sunt ullam vel voluptate.';
//
// let card3 = document.createElement('div');
// let text3 = document.createElement('p');
// text3.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at blanditiis cumque deleniti doloribus expedita explicabo, facere molestias natus nemo provident reiciendis saepe? Amet consectetur dicta doloremque est exercitationem, expedita id illum libero modi molestiae mollitia natus nesciunt nulla optio praesentium provident quas quia reiciendis repellat rerum temporibus ut vitae. A adipisci amet atque autem hic mollitia, porro quam ratione, repellat, rerum sapiente sed sunt voluptas. Ab accusamus amet aperiam asperiores, assumenda beatae consequuntur culpa delectus deleniti dolor eaque enim error esse et eveniet fuga fugiat fugit in inventore iste itaque laboriosam laudantium magnam maiores minima nam obcaecati omnis optio quo reprehenderit sapiente similique sint soluta temporibus totam ut voluptatibus! Ab consequatur consequuntur esse impedit incidunt, ipsam, magni natus officia perspiciatis veniam vero voluptatibus. Atque consequatur cum cupiditate dicta dolores eveniet facilis in neque non odit quidem repellendus reprehenderit sed sunt totam vel, veritatis voluptatibus? Accusantium ad asperiores atque autem corporis culpa cumque deleniti eaque enim excepturi exercitationem, expedita explicabo in ipsum laborum laudantium minima mollitia necessitatibus numquam odit officia porro quia quibusdam quidem recusandae reiciendis totam vero. Ad aliquid aspernatur beatae, doloribus explicabo illo labore libero maiores minima quaerat quas quidem recusandae veniam. Animi, harum incidunt molestiae placeat porro qui quod tempore. Dolores doloribus ducimus iure modi nostrum ratione voluptates. Blanditiis distinctio ex nesciunt quasi soluta. Ad corporis delectus dolor dolorem dolores eos incidunt quae quasi vero voluptatibus! Adipisci at autem consectetur eum fuga ipsam labore molestias praesentium quaerat quia, quibusdam quo quos similique veritatis voluptate. Aperiam distinctio ducimus enim ex harum inventore, maiores obcaecati officia pariatur perferendis quas reprehenderit sunt totam ut veniam? Blanditiis consequatur, corporis culpa cumque deleniti dicta id impedit ipsam molestias mollitia perspiciatis, quo rem repellat repudiandae suscipit temporibus voluptas. A accusamus, alias amet ducimus ex fuga neque nobis, provident reprehenderit saepe sed suscipit, voluptatum! Fugiat harum obcaecati rerum sint. Beatae cum esse inventore minima quisquam velit voluptates? Ad aliquam animi autem blanditiis, consequatur consequuntur corporis cumque cupiditate dolore doloremque eaque earum eius esse eum eveniet facilis illo inventore itaque laboriosam libero minus mollitia neque nihil nisi nulla porro praesentium repudiandae sint sunt totam unde veritatis voluptas voluptatum. Accusamus accusantium ad, cum cupiditate eaque enim explicabo facere facilis, libero magnam odio, quam quibusdam repellat reprehenderit vitae. Assumenda at beatae distinctio dolorum enim, eos et exercitationem illum ipsum iste obcaecati porro possimus quis quisquam quo repudiandae sequi sint unde. Blanditiis consectetur cum distinctio, eligendi fuga, impedit iste mollitia neque nisi qui ratione sit voluptatem. Corporis eius fuga nesciunt rem reprehenderit velit, voluptatibus? Id, odio, placeat? A aperiam assumenda aut corporis culpa debitis error, eveniet excepturi exercitationem fuga harum illum ipsam labore neque nobis obcaecati officiis perferendis placeat porro praesentium provident quam quasi qui quod recusandae reiciendis saepe sunt suscipit tempora vitae. At enim id maxime obcaecati odio voluptatibus voluptatum. Aut est nobis officiis quibusdam tempore velit! Ab ad aperiam distinctio dolor esse fuga, id in ipsa iure, iusto molestiae natus obcaecati provident quasi, quidem quis sunt tempora ut veniam veritatis? A amet animi aperiam at autem commodi consectetur eius eligendi error expedita magnam molestias mollitia placeat quos, repellendus saepe tempora! A aliquid dolorum eos et eveniet explicabo hic in incidunt iure, laudantium maiores maxime minima molestiae nam, neque possimus quae quaerat quasi quia quis quos sit sunt tempora veniam, voluptates. Ab aliquam asperiores delectus dolorem illum neque omnis perferendis, perspiciatis provident rem rerum sit vero. Animi consequatur consequuntur dolor ipsa ipsum iure, minus molestias nam, possimus quisquam repellat, similique unde vitae. Assumenda autem earum esse hic incidunt magnam optio quaerat repellendus reprehenderit sit? Aliquid, architecto at autem consequatur distinctio, ducimus ea ipsam laudantium libero, necessitatibus quidem quod reiciendis rem tempora tempore unde voluptas voluptate. Ad aliquid amet aut beatae cum debitis dicta dignissimos dolore doloremque eaque, eos exercitationem ipsam ipsum minus nam necessitatibus nesciunt non, officia omnis pariatur quaerat quas quasi qui quo rem tenetur voluptas voluptatum? A accusantium aliquid asperiores deserunt dolorem ea eaque eius ipsa iure laborum, magnam magni nam obcaecati quae, quo reiciendis rerum, tempora vero voluptatibus voluptatum. Amet architecto atque aut cupiditate, dicta et eveniet ipsa labore nemo quis quo reiciendis rerum, ut vel veniam vero voluptates. A dolorem error exercitationem illo in ipsam labore libero magnam magni maxime nemo nulla obcaecati possimus quas quo, unde veniam voluptate! Atque cumque, distinctio dolores doloribus eos ex harum iusto laudantium magnam molestiae natus, optio perferendis quasi quos saepe ullam voluptatem. Ab adipisci, animi, aperiam architecto aspernatur at consequatur culpa cumque dicta distinctio dolor doloribus esse et eum ex facilis fuga fugit hic illo iste itaque iure libero minima modi natus nemo nesciunt nisi nulla officiis placeat possimus provident quis rem repellat sapiente sit veritatis? At blanditiis doloribus eaque enim iste laudantium molestiae mollitia natus nihil possimus saepe, sequi voluptatem voluptatibus! Ab, assumenda atque deserunt dolores ducimus, enim eveniet incidunt itaque labore laboriosam maiores non odio quae rem saepe sint voluptatibus! Accusamus ad aliquid consectetur consequatur culpa cum delectus eaque eos, esse fugiat fugit impedit iste laborum magni maxime molestias mollitia nisi non numquam pariatur quia ratione similique suscipit tempora unde ut veritatis. Aliquid dolore et excepturi ipsa nisi. Amet autem corporis culpa debitis deleniti dignissimos dolore doloribus ducimus eaque eveniet, exercitationem expedita fugiat fugit in labore libero modi, molestiae necessitatibus nemo neque odio omnis pariatur quisquam quod repudiandae saepe sequi similique, sit soluta suscipit totam velit vitae voluptatibus. Autem deleniti deserunt doloribus esse exercitationem fugiat illo libero nobis numquam quo reprehenderit tempore voluptas, voluptatum! Beatae commodi, deserunt dolorem earum maxime quis ratione repellendus suscipit. Doloremque inventore labore maiores minima possimus. Assumenda at commodi, corporis, delectus dicta dolore eaque et impedit inventore numquam perspiciatis suscipit unde veniam vero, voluptate! Ad adipisci assumenda, deserunt doloremque doloribus dolorum iste laudantium magni, molestias obcaecati porro quas sint veniam! Consequatur maiores nisi odio quia, quo repudiandae sunt velit? Ab animi blanditiis, dicta dolores est fuga ipsam laudantium, minima necessitatibus provident quae quaerat quasi sequi sint voluptatem! Accusantium deserunt dignissimos dolores ducimus esse expedita illum ipsa iste iusto libero magnam modi nemo, nulla, optio possimus ratione reiciendis repellat tempora totam?';
//
// card1.appendChild(text1);
// card2.appendChild(text2);
// card3.appendChild(text3);
//
// document.body.append(card1, card2, card3);
//
// let bloks = document.getElementsByTagName('div');
// console.log(bloks)
// let maxHeight = 0;
// for (const item of bloks) {
//     if (item.clientHeight > maxHeight){
//     maxHeight = item.clientHeight;
//     }
// }
//
// card1.style.height = maxHeight + 'px';
// card2.style.height = maxHeight + 'px';
// card3.style.height = maxHeight + 'px';