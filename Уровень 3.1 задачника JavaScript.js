/*Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.*/

/*let number=12323451
for(let i=0;i<8;i++){
let n =number.toString()

if(parseInt(n[i+1])-parseInt(n[i])==1){
   console.log(true)
}else{console.log(false)}
}
*/
//Дан массив:
//Удалите из массива все пустые строки.
/*let arr=[1, " ", 2, 3, " ", 5];

let newarr=arr.filter(function(value){
   return value!==" "
})
console.log(newarr)
*/

/*Дан массив:
Отсортируйте элементы в каждом подмассиве.
*/
/*let arr = [
	[2, 1, 4, 3, 5],
	[3, 5, 2, 4, 1],
	[4, 3, 1, 5, 2],
];
*/
/*let n=[]
n=arr[0][0]
for(let i=0;i<5;i++){
	if(n[0][0]<arr[0][i]){
		n.push(arr[0][i])
	}
console.log(n)
}*/
/*
for(let i=0;i<3;i++){
	arr[i].sort(function(a,b){
		return a-b
	})
	}
console.log(arr)*/

/*Даны два массива:
Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.*/
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];
arr2.pop(),arr2.pop()
console.log(arr2)