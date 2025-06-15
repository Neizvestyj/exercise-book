/*Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.*/
/*let n = 0;
let arr = [ 1,-2,3,-4,5,-6];
for(let i of arr){
   if(arr[i]<0){
      n++;
   }
}
   console.log(n)*/

/*Дан массив с числами. Оставьте в нем только положительные числа.*/

/*let arr = [1,-2,3,-4,5,-6,7];
 //console.log(arr.filter(num=>num>=0));
// for(let i = arr.length-1;i>=0;i--)
 for(let i =0;i<arr.length;i++){
   if(arr[i] < 0){
      arr.splice(i,1)
      i--
   }
 }
 console.log(arr)*/

 /*Дана строка. Удалите предпоследний символ из этой строки.*/

 //let string = "hello word"
//console.log(string.split("").splice(8,1))
/*string=string.split("")
 string.splice(8,1)
 console.log(string)*/

 /*Дан некоторый массив, например, вот такой:
Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.*/
let arr=[1, 2, 3, 4, 5, 6];
let ar = arr.splice(0,3);
arr=arr.reduce((prev,curr)=>prev+curr)
ar=ar.reduce((prev,curr)=>prev+curr)
console.log(ar/arr)
 
 






