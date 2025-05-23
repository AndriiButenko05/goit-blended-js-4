// Task 1
// 1 - отримай body елемент і виведи його в консоль;
const body = document.querySelector('body');
console.log(body);
// 2 - отримай елемент id="title" і виведи його в консоль;
const heading = document.querySelector('#title');
console.log(heading);
// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector('.list');
console.log(list);
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataTopic = document.querySelectorAll('[data-topic]');
console.log(dataTopic);
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const firstDataTopic = dataTopic[0];
console.log(firstDataTopic);
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const lastDataTopic = dataTopic[dataTopic.length - 1];
console.log(lastDataTopic);
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const h1 = document.querySelector('h1');
const h1NextElement = h1.nextElementSibling;
console.log(h1NextElement);
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const h3Heading = document.querySelectorAll('h3');
Array.from(h3Heading).forEach((h3) => {
    console.log(h3.textContent)
 });
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
Array.from(h3Heading).forEach((h3) => {
    h3.classList.add('active');
    console.log(h3)
 });
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const liElement = document.querySelector(`[data-topic="navigation"]`);
console.log(liElement);
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
liElement.setAttribute("style", "background-color: yellow");
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const pElement = liElement.querySelector('p');
pElement.textContent = "Я змінив тут текст!";
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const currentTopicElement=document.querySelector(`[data-topic=${currentTopic}]`);
console.log(currentTopicElement);
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
currentTopicElement.setAttribute("style", "background-color: blue");
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const completedHeading = document.querySelector('.completed');
console.log(completedHeading);
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const completedLi = document.querySelector('.completed').closest('li');
completedLi.remove();
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
h1.insertAdjacentHTML('afterend', '<p >Об`єктна модель документа (Document Object Model)</p>');
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".
// тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
const newLi = document.createElement('li');
const newH = document.createElement('h3');
newH.textContent = "Властивість innerHTML";
const newP = document.createElement('p');
newP.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
newLi.append(newH);
newLi.append(newP);
list.append(newLi);
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
newLi.insertAdjacentHTML("beforeend", `<h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>`);
// 20 - очисти список


// Task 2
const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const mainDiv = document.querySelector('.container');
const newDiv =document.createElement(`div`)
mainDiv.append(newDiv)
newDiv.classList.add(`number-container`)
for (let i = 0; i <= 100; i++){
    const newDivElement = document.createElement(`div`)
    newDivElement.classList.add(`number`)
    newDivElement.textContent = randomNumber()
    if (newDivElement.textContent % 2 === 0) {
        newDivElement.classList.add(`even`)
    } else {
        newDivElement.classList.add(`odd`)
    }
    newDiv.append(newDivElement)
}

// Task 3
