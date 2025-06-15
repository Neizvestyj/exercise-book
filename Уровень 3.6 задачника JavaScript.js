//Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.
//let arr =[12, 123, 45678]
/*for(let i=0;i<3;i++){
  if(arr[i].toString().length>3){
   arr.splice(i,1)
       }
}
console.log(arr)*/
//или так 
/*arr=arr.filter(num=>num.toString().length<=3)
console.log(arr)*/
/*Дано число, например, вот такое:
let num = 12345;
Проверьте, что все цифры этого числа больше нуля.*/
//let num =12345;
/*for(let i=1;i<num.toString().length+1;i++){
  parseInt(num.toString()[i])>0?console.log(i):console.log(false)}*/
  /*let numStr=num.toString()
  for(let i=0;i<numStr.length;i++){
if(numStr[i]>0){
  console.log(true)
}else{
  console.log(false)
}
  }
*/
/*Дан некоторый массив, например, вот такой:
[123, 456, 789]
Слейте все элементы этого массива в один массив, разбив их посимвольно:
[1, 2, 3, 4, 5, 6, 7, 8, 9]*/
//let num = [123, 456, 789];
/*let res=num.join("")
let result=res.split("")
result=result.map(Number)
console.log(result)*/

//Дан следующая структура:
//Найдите сумму элементов этой структуры.
let data = [
	{
		1: 11,
		2: 12,
		3: 13,
	},
	{
		1: 21,
		2: 22,
		3: 23,
	},
	{
		1: 24,
		2: 25,
		3: 26,
	},
];
let n=0;
for(let i=0;i<data.length;i++){
	for(let k=1;k<=3;k++){
     n+=data[i][k]
	}
}
console.log(n)


