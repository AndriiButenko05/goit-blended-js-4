// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) { 
//     let i = 1;
//     if (typeof num !== 'number') {
//         console.log('Not a number!');
//         return;
//     }
//     while (i <= num) {
//         i++;
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log(i, 'fizzbuzz');
//         } else if (i % 3 === 0) {
//             console.log(i, 'fizz');
//         } else if (i % 5 === 0) {
//             console.log(i, 'buzz');
//         }
//     }
// }
// fizzBuzz(35);



// const start = 1;
// const end = 20;
// let sum = 0;
// for (let i = start; i <= end; i++){
//     if (i % 2 === 0) {
//         sum ++;
//     }
// }
// console.log(`Всього парних чисел: ${sum}`);