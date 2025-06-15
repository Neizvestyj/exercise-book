/*Дан массив со словами. Удалите из него слова, состоящие более чем из трех сим-волов.*/
//let arr=["Дан", "массив", "со", "словами"];
//let result=[]
/*for(let char of arr){
if(char.length<=3){
  result.push(char) 
   
}
}
console.log(result)*/
/*Дано некоторое число:
1357
Проверьте, что все цифры этого числа являются нечетными.*/
/*let n=1357
for(let i=0;i<4;i++){
if(parseInt(n.toString().split("")[i])%2!==0){
  console.log(true)
}else{console.log(false)}
}
*/
/*Дано некоторое слово:
'abcba'
Проверьте, что это слово читается одина-
•ково с любой стороны.*/
/*let str = "abcba"
for(let i=1;i<6;i++){
  if(str[i]===str[str.length-i]){
  console.log(true)}else{
    console.log(false)
}
console.log(str[str.length-i])
//console.log(str[str.length-i])
}
*/
/*Дан массив:
Найдите сумму элементов этого массива.*/

let arr=[
	[
		[11, 12, 13],
		[14, 15, 16],
		[17, 17, 19],
	],
	[
		[21, 22, 23],
		[24, 25, 26],
		[27, 27, 29],
	],
	[
		[31, 32, 33],
		[34, 35, 36],
		[37, 37, 39],
	],
]
let n=0
for(let i=0;i<arr.length;i++){
  for(let j=0;j<arr[i].length;j++){
	 for(let k=0;k<arr[i][j].length;k++){
n+=arr[i][j][k]
}
  }
}
console.log(n)