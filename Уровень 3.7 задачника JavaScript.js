//Дана строка со словами. Отсортируйте слова в алфавитном порядке

/*let str = "Дана строка со словами. Отсортируйте слова в алфавитном порядке"
console.log(str.split(" ").sort((a, b)=>
a.toLowerCase().localeCompare(b.toLowerCase() ) ))*/

//Дано число. Получите массив делителей этого числа.

/*let number = 4
let arr =[]
for(let i=1;i<=number;i++){
   if(number%i==0){
      arr.push(i)
   }
}
console.log(arr)*/

//Даны два числа. Получите массив общих делителей этих чисел.

/*let a=10
let b= 12
let arr=[]
for(let i=1;i<=Math.min(a, b);i++){
if(a%i===0 && b%i===0 ){
   arr.push(i)
}
}
console.log(arr)*/

//Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.

/*let num = 12;
let n=0;
for(let i =1;i<=12;i++){
   if(num%12==0&&num%1==0&&num%i===0){
      n++
   }
}
console.log(n+" делителей")*/

//Через запятую написаны числа. Получите максимальное из этих чисел.
/*let num= [1, 2, 3, 4, 5]
let result = 0
console.log(parseInt(num.sort((a,b)=>(b-a)).join("")))*/

//Дан массив с числами. После каждого однозначного числа вставьте еще такое же.

/*let arr=[1,2,33,4,55]
let result=[]
for(let i=0;i<arr.length;i++){
   if(String(arr[i]).length===1){
   result.push(arr[i])
   result.push(arr[i])
   }else{
      result.push(arr[i])
   }
}
console.log(result)*/

//Дана строка. Удалите из нее все гласные буквы.
/*let str="Дана строка. Удалите из нее все гласные буквы."
function remove(str){
   let serch=/[аеиоуыэюя]/gi;
  return str.replace(serch," ")
   }
console.log(remove(str))
*/

//Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.

/*let str="Дана строка сделайте заглавной последнюю букву каждого слова в этой строке."
let result=[]
for(let i=1;i<str.length;i++){
   if(str[i]===" "||i===str.length-1){

     result.push(str[i-1].toUpperCase());
     result.splice(result.length-2,1)
     result.push(" ")
   }else{
    // result+=str[i]
    result.push(str.slice(i-1,1))
    result.push(str[i])
   }
}
console.log(result.join(""))*/

//Дан следующая структура:
//Найдите сумму элементов этой структуры.

let data = [
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
];
let result=0
for(let i=0;i<data.length;i++){
   for(let j=1;j<=3;j++){
      for(let n =0;n<data[i][j].length;n++){
         result+=data[i][j][n]
      }
   }
}
console.log(result)




