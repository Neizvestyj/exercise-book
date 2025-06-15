/*Выведите в консоль все числа в проме-жутке от 10 до 1000, у которых первая цифра четная.*/
/*let n=10
for(let i=10;i<1000;i++){
   if(parseInt(n.toString()[0])%2==0){
   console.log(n)
   }
   n++
}
*/
/*Дан некоторый массив, например, вот такой:
 [1, 2, 3, 4, 5, 6]
Поменяйте местами пары элементов этого массива:
[2, 1, 4, 3, 6, 5]*/

/*let number= [1, 2, 3, 4, 5, 6]
let result=[]
for(let i=0;i<number.length;i++){
   if(number[i]%2!==0){
result.push(number[i+1])
   }else{
      result.push(number[i-1])
   }
}
console.log(result)*/
//Дан следующий объект:
//Найдите сумму элементов этого объекта.

let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
let result=0
for(let i=1;i<=3;i++){
  for(let k=1;k<=3;k++){
result+=obj[i][k]
}
}
console.log(result)