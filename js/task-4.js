// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

let number = prompt("Enter a number of minutes:");
number = number.padStart(2, '0');
let hours = Math.floor(number / 60);
let minutes = number % 60;
hours = String(hours).padStart(2, '0');
console.log(`${hours}:${minutes}`);
