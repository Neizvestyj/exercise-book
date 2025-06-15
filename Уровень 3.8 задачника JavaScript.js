//Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.
let arr=[1, 23,3, 45,63]
let number=3
for(let i=0;i<arr.length;i++){
   if(arr[i].toString().includes(number.toString())){
      console.log(true)
   }else{
      console.log(arr[i])
   }}
   

 /*  Дана строка в формате:
'kebab-case'
Преобразуйте ее в формат:
'snake_case'*/
/*
let str="kebab-case"
let result=""
for(let i=0;i<str.length;i++){
if(str[i]==="-"){
   result+="_"
}else{
   result+=str[i]
}
}
console.log(result)*/

/*Дана строка в формате:
'snake_case'
Преобразуйте ее в формат:
'camelCase'*/

/*let str="snake_case";
let result="";
for(let i=0;i<str.length;i++){
   if(str[i]==="_"){
      i++;
      result+=str[i].toUpperCase()
   }else{
      result+=str[i]
   }
}
console.log(result)*/

/*Дана строка в формате:
'camelCase'
Преобразуйте ее в формат:
'snake_case'*/

/*let str="camelCase";
let result="";
for(let i=0;i<str.length;i++){
   if(str[i]===str[i].toUpperCase()){
      result+="_"
      result+=str[i].toLowerCase()
   }else{
      result+=str[i]
   }
   
}console.log(result)
*/

//Сформируйте с помощью циклов следующий массив:
/*[
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3],
];
let arr =[]

for (let i=0;i<5;i++){
   let sum=[]
   for(let n=1;n<=3;n++ ){ 
      sum.push(n)
   }
   arr.push(sum)
}
//console.log(arr)
//или так 
const result=Array(5).fill([1,2,3])
console.log(result)*/

