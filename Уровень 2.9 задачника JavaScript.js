/*Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:
12 + 34 + 56*/
/*
let number=123456;
let a=0
number=number.toString()
for(let i=0;i<6;i+=2){
let result=[...number.slice(i,i+2)]
let n=parseInt(result.join(""))
a+=n
}
console.log(a)
*/
/*Дан массив с числами:
Выведите в консоль элементы этого массива в обратном порядке.*/
/*let arr =[1, 2, 3, 4, 5];
for(let i of arr){
console.log(arr.length-i+1)
}
*/
//Дано число. Получите первую четную цифру с конца этого числа.
/*
let num = 12345678;
for(let i=8;i>=0;i--){
if(num%2==0){
console.log(i)
break
}
//num=Math.floor(num/10)
}
*/
/*Дана некоторая строка:
Замените в ней первый символ каждого слова на '!':
'!bcde !bcde !bcde'*/
/*let str ="abcde abcde abcde"
let result=""
for(let i=0;i<str.length;i++){
if(str[i]=="a"){
   result+="!" }else{
      result+=str[i]
   }
}
console.log(result)*/

/*Дан массив с числами:
[1, 2, 3, 3, 4, 5]
Проверьте, что в этом массиве есть два одинаковых элемента подряд.
*/
let arr = [1, 2, 3, 3, 4, 5];
for(let i of arr){
   if(arr[i]===arr[i+1]){
      console.log("одинаковые числа "+arr[i])
   }
}