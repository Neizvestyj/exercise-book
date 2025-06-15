/*Получите массив букв этой строки.*/

let str = "abcde";
//console.log(str.split(""))

let number = 12345;
/*Получите массив цифр этого числа.*/

//console.log(number.toString().split("").map(Number))

/*Переверните его*/
/*let x=number.toString().split("").reverse().join("");
console.log(parseInt(x))*/
let sum=0;
/*
let numbers= number.toString().split("").map(Number);
for(let i of numbers){
   sum+=i
   console.log(sum)
}*///или так 
for(let numbers of number.toString()){
   sum+=parseInt(numbers);
   console.log(sum)
}