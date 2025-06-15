/*Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.*/
/*
for(let i=10;i<=1000;i++){
  if((Math.floor(i/10)%10)%2==0){
   console.log(i)
  }
  
   //console.log(parseInt(n.toString().split(" ")[n.length-1]))
   
}
*/
/*Дан массив. Удалите из него каждый пятый элемент.*/

/*let ar=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
for(let i=4;i<12;i+=4){
    ar.splice(i,1)
    console.log(ar)
}*/
/*Дана некоторая переменная с числом:
Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:
'00000'*/
//let num =5;
/*let n=""
for(let i=0;i<=num;i++){
if(n.length<num){
  n+="0"
}
}
console.log(n)*/
//или так 
//let n="0".repeat(num)
//console.log(n)

/*Дана некоторая строка со словами:
Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:
'aaa ccc fff'*/
/*let str = "aaa bbb ccc eee fff";
let n=""
for(let i=0;i<str.split(" ").length;i+=2){
  n+=str.split(" ")[i]+" "

console.log(n)//n.trim
}*/
//Дан массив:
//Найдите сумму элементов этого массива.
let arr=[
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
let n=0
for(let i=0;i<10;i++){

n+=i
//n+=parseInt(arr.toString()[i])
console.log(n)
}