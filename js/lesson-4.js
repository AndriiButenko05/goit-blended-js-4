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
list.insertAdjacentHTML("beforeend",
    `<h3>Властивість innerHTML</h3>
    <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>`
);
// 20 - очисти список
// list.innerHTML = '';


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
// Form Events, Input, Focus, Blur and Submit.
// Використовуй шаблон форми з файлу html.
// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const form = document.querySelector('.contact-form');
const input = document.querySelector('.contact-form-input');
const checkbox = document.querySelector('.contact-form-checkbox');
const span = document.querySelector('.js-username-output');
input.addEventListener('input', (event) => {
    if (event.target.value.length >= 6) {
        input.classList.add('success');
        input.classList.remove('error');
    } else {
        input.classList.add('error');
        input.classList.remove('success');
    }
});

// input.addEventListener('focus', (event) => {
//     if (event.target.value.trim() === '') {
//         input.style.outline = '3px solid red';
//     } else {
//         input.style.outline = '3px solid green';
//     }
// });

input.addEventListener('blur', (event) => {
    if (event.target.value.trim() === '') {
        input.style.outline = '3px solid red';
    } else {
        input.style.outline = '3px solid lime';
    }
});

input.addEventListener('input', (event) => {
    if (event.target.value.trim() === '') {
        span.textContent = 'Anonymous';
    } else {
        span.textContent = event.target.value;
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (input.value === '' || !checkbox.checked) {
        alert('Please fill in the input and check the checkbox');
        return;
    }
    const userName = input.value.trim();
    const user = {
        userName
    }
    console.log(user);
    input.value = '';
    checkbox.checked = false;
    span.textContent = 'Anonymous';
});
  
// Task 4
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
const decrease = document.querySelector('.js-decrease');
const increase = document.querySelector('.js-increase');
const square = document.querySelector('.box');
decrease.addEventListener('click', () => {
    const currentWidth = parseInt(window.getComputedStyle(square).width);
    const currentHeight = parseInt(window.getComputedStyle(square).height);
    square.style.width = `${currentWidth - 20}px`;
    square.style.height = `${currentHeight - 20}px`;
})
increase.addEventListener('click', () => {
    const currentWidth = parseInt(window.getComputedStyle(square).width);
    const currentHeight = parseInt(window.getComputedStyle(square).height);
    square.style.width = `${currentWidth + 20}px`;
    square.style.height = `${currentHeight + 20}px`;
})
 
// При кліку на кнопку "Подвоїти" збільшувати значення в кожному
// елементі списку в два рази.
const doubleList = document.querySelector('.list-second');
const doubleButton = document.querySelector('#double');
doubleButton.addEventListener('click', () => {
    const liItems = doubleList.querySelectorAll('.listItem');
    liItems.forEach(li => {
        li.textContent = parseInt(li.textContent) * 2;
    })
});