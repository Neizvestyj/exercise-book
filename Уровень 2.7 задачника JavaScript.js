/*Дана некоторая строка:
Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:
'A BC DEF ghij'*/
//let str='a bc def ghij'
//let result="";
//let result=[];
/*for(let i=0;i<13;i++){
   if(str[i]<str[9]){
      result+=str[i].toUpperCase()
   }else{
      result+=str[i] }}
console.log(result)*/
/*for(let i=0;i<str.length;i++){
   let sub = str.slice(i,i+1);
   if(sub.length<=3){
      result.push(sub.toUpperCase())
   }else{result.push(sub.toLowerCase())
   }
}
result=result.join("")
console.log(result)
*/
/*Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
*/
/*Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
*/
/*
let a ="b"
for(let i of a){
a.toUpperCase()==i?console.log("toUpperCase"):console.log("toLowerCase")
}*/
/*Дано некоторое число, например, такое:
Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:
28*/

let number= 123789;

let numbers=[]
number=number.toString()
for(let i=0;i<number.length;i++){
    if(number[i]%2==0){
      numbers.push(number[i])
   }
}
console.log(parseInt(numbers.join("")))
