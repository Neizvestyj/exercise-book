/*Дано число. Выведите в консоль первую цифру этого числа*/
let number = 1234567;

console.log(number.toString()[0]);
 
console.log(number%10);

/*Дано число. Выведите в консоль сумму первой и последней цифры этого числа.*/
let number1 = number.toString()[0];
let nomberFitst = parseInt(number1)
console.log(nomberFitst+number%10);

/*Дано число. Выведите количество цифр в этом числе.*/
let num= 123456789;
num = num.toString();
console.log(num.length)

/*Даны два числа. Проверьте, что первые цифры этих чисел совпадают.*/

let abc = 1765;
let qwert = 12345;
let abcNumber=parseInt(abc.toString()[0]);
let qwertNumber=parseInt(qwert.toString()[0]);
let res = abcNumber==qwertNumber ? true:false;
console.log(res)

//let result = Math.trunc(abc/1000)
//console.log(result)// 1
//тоже вариант 




