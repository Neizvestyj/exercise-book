Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.
let arr=[1, 2, 3, 4 ,"t"];
for(let i=0;i<arr.length;i++){
   arr.splice(i,0,arr[i])
   i++
}
console.log(arr)*/

Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.
let arr=[];
let num=12;
for(let i=0;i<=num;i++){
   if(num%i===0){
      arr.push(i)
   }
}
console.log(arr)*/

Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.

let a=12345;
let b=56789;
let result=[]
let aString=a.toString()
let bString=b.toString()
for(let i=0;i<aString.length;i++){
if(bString.includes(aString[i])){
   if(!result.includes(aString[i])){
   result.push(aString[i])}
   }
}
console.log(parseInt(result))*/
Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.
let num = 1343563;
let numS=num.toString();
let result=[];
for(let i=0;i<numS.length;i++){
   if(numS[i].includes("3")){
      result.push(i)
   }
}
result.pop()
result.shift()
console.log(result)


Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.
let num=[12, 22, 23, 45, 67];
let nums=[];

for(let i=0;i<num.length;i++){
   let numStr=num[i].toString();
 if(new Set(numStr).size===numStr.length){
   nums.push(num[i])
 }
 }
console.log(nums)

Дан массив:
[
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
Слейте элементы этого массива в один одномерный массив:

[1, 2, 3, 4, 5, 6, 7, 8, 9]*/
let arr=[
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
let result=[]
for(let i=0;i<arr.length;i++){
   for(let n=0;n<arr[i].length;n++){
result.push(arr[i][n])
   }
}
// или
result= arr.flat()
console.log(result)