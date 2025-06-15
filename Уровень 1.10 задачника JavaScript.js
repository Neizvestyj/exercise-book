/*Заполните массив случайными числами из промежутка от 1 до 100.*//*
let number = [];
for(let i=0;i<10;i++){
let randomNumber=Math.floor(Math.random()*100);
number.push(randomNumber); console.log(number);
}*/
//ечли так то это не массив 
/*number = Math.floor(Math.random()*100)
console.log(number)
}
console.log(number)*/
/*Дано некоторое число:

12345
Выведите в консоль все его символы с конца.*/
/*
let number = 12345;
for(let i=0;i<5;i++){
let numb = number.toString().split("").reverse()
console.log(parseInt(numb[i]))
}*/
/*
Дан некоторый массив, например, вот такой:
По очереди выведите в консоль подмассивы из двух элементов нашего массива:
[1, 2]
[3, 4]
[5, 6]
*/
/*
let mini = [];
let mas = [1,2,3,4,5,6];
for(let i=0;i<mas.length;i+=2){
console.log([mas[i],mas[i]+1])  
}*/

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
//Слейте эти массивы в новый массив:
//[1, 2, 3, 4, 5, 6]
//console.log([[arr1]+[,arr2]])

//лучше
//let mergedArr=[...arr1,...arr2];
//console.log(mergedArr)

//или
//let mergedArr = arr1.concat(arr2);
//console.log(mergedArr)
