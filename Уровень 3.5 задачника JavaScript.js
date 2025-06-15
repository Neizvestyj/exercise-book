//Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.
//let str="Дан текст со словами. Запишите в массив все слова, начинающиеся на букву акварель a"
//let arr=[]
/*for( let char of str.toLowerCase()){
  if(char ==="a"){
   let word="";
   while(char!==" " && char!==undefined){
      word+=char
      char=str[str.indexOf(char)+1]
   }
   arr.push(word)
  }
}
console.log(arr)*///так лучше >
/*let result=[]
let arr=str.toLowerCase().split(" ")
for(let word of arr){
   if(word[0]==="а"){
      result.push(word)
   }
}
console.log(result)
*/
//Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.
//let arr=[0, 1, 20, 3, 4, 5, 6, 7];
/*let result= arr.filter(num=>num%5===0)
console.log(result)*/

/*Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.*/
//let result=arr.filter(num=>num.toString().includes("0"))
//console.log(result)

//Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.

 //let result = arr.filter(num=>num.toString().includes("3"))
//console.log(result)
/*Дано некоторое число:
35142
Отсортируйте цифры этого числа. В нашем случае должно получится следующее:
12345*/
/*let num =35142;
let arr=num.toString().split("").sort(function(a, b){
   return a-b})
  console.log(parseInt(arr.join("")))
  */
//Напишите программу, которая сформирует следующую строку:
/*let num="-1-2-3-4-5-"
let result=""
let n=0
for(let i=0;i<11;i++){
if(i%2==0){
result+="-"
}else{
 n++ 
 result+=n 
}
console.log(result)
}
*/
//Дан следующий объект:
//Найдите сумму элементов этого объекта.
let obj = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}
let result=0
for(let i=1;i<=3;i++){
  for(let k=1;k<=2;k++){
    for(let n=1;n<=3;n++){
      result+=obj[i][k][n]  }}}
console.log(result)



