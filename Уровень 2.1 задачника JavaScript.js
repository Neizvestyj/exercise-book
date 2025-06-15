/*Дана некоторая строка. Найдите позицию первого нуля в строке.*/

//let str = "Hello word ";
//console.log(str.indexOf(0))

/*Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.*/
/*
let a=1;
let b=1;
function calc(a,b){
while(a<=1000){
   if(a+b!=5){
      a++;  
   }else if(a+b==5){
       console.log(a,b)
      b--;
   }   
}
}
 calc(a,b)*/
 /*Дан массив. Удалите из него элементы с заданным значением.*/
 //let arr = [1,2,3,4,5,6,7];

 //let newArr = arr.slice(4)
// arr.splice(4,2)
 //console.log(arr)
 //arr.splice(2,1)
 //console.log(arr)
 //console.log(newArr)

 //Дан некоторый массив, например, вот такой:
 //Найдите сумму первой половины элементов этого массива.

let arr = [1, 2, 3, 4, 5, 6];
let sum = arr.splice(0,3);

console.log(sum.reduce((prev,curr)=>prev+curr));



