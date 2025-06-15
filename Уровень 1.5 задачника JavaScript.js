/*Найдите сумму всех целых чисел от 1 до 100.*/
/*let result=0;
  let n= 1;

   while(n<=100){
      result = result + n;
      n++;
      console.log(result)
   }
 */  


/*Найдите сумму всех целых четных чисел в промежутке от 1 до 100.*/
//2, 6, 12, 20
/*
let result=2
let sum =0;
let n=1;
while(n<=100){
   if(result%2==0){
    sum = sum+result;
     console.log(sum);
     result++;
     n++;
     }else{
      result++;
      n++;
     }  
}*/
/*Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.*/
/*
let n=0;
let result=0;
let sum=0;
while(n<=100){
   if(result%2===1){
      sum = sum + result;
      console.log(sum);
      result++;
      n++;
   }else{
      result++
      n++;
   }
}*/
//или вот так 
/*
let sum = 0;
for(let i = 1; i < 100; i+=2){
   //console.log(i)
   sum+=i;
   console.log(sum)
}
*/
/*Даны два целых числа. Найдите остаток от деления первого числа на второе.*/
/*
let a= 4;
let b= 6;
c = a%b
console.log(c)*/

/*Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.*/
const c ="string";
const b = c.split("").reverse().join("");
for(let i=0;i<b.length;i++){
   console.log(b[i]);
}
// или

/*for(let char of a){
   console.log(char)
}
*/
//или
/*
a.forEach((char)=>{
 console.log(char)
})*/

