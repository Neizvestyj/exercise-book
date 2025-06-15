<script> /*/* Дана переменная со строкой. Проверьте, что в эта строка представляет собой число, то есть состоит только из цифр.*/
/*let string=4
alert(typeof string)*/

/*Дана переменная со строкой. Проверьте, что в эта строка представляет собой дробь.*/

/*function p(num){
return !isNaN(parseFloat(num))
}
alert(p(3))*/

/*Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число.*/

/*function lastNum(arr){
let result= arr.sort((a,b)=>b-a)
alert(result[1])
}
lastNum([1,5,4])*/
/*

/*Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, заполненный целыми числами от минимального параметра до максимального.*/

/*function nums(a,b){
let result=[];
for(let i=a;i<b;i++){
result.push(i)
}
alert(result);
}
nums(2,8)*/

/*Сделайте функцию, которая заполнит массив случайными латинскими буквами.*/

function random(){
let string=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s"];
for(let i=0;i<10;i++){
let result=[]
let randomIndex=
Math.floor(Math.random()*string.length);
result.push(string[randomIndex])
console.log(result)
}
}
random()

Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи.
function fib(num){
    let a=0;
    let b=1;
let result=0;
for(let i=0;i<num;i++){
    result=a+b
    a=b
    b=result
  //  console.log(result)
}
console.log(result)
}
fib(4)*/


























<script>