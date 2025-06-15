//Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.

/*function randomNumber(arr){
    let randomIndex=Math.floor(Math.random()*arr.length);
    console.log(arr[randomIndex])
}
randomNumber([1,2,3,4,5,6,7])*/


//Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.

/*function randomNumber(arr){
    let result=[];
    let n=Math.floor(Math.random()*arr.length);
    for(let i=0;i<n;i++){
        result.push(arr[Math.floor(Math.random()*arr.length)])
    }
    console.log(result)
}
randomNumber([1,2,3,4,5,6,7])*/

//или так  
/*function randomNumber(arr){
     let n=Math.floor(Math.random()*arr.length);
     console.log(arr.slice(0,n))
}
randomNumber([1,2,3,4,5,6,7])*/



//Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд.

/*function randomItem(arr){
  let result=null;
  let prev=[];
  let randomIndex=Math.floor(Math.random()*arr.length);
  while(result!==arr[randomIndex]){
  console.log(arr[randomIndex])
  result=arr[randomIndex]
  }
}
randomItem([1,2,3,4,5,6,7]);
randomItem([1,2,3,4,5,6,7]);
randomItem([1,2,3,4,5,6,7]);
randomItem([1,2,3,4,5,6,7]);
randomItem([1,2,3,4,5,6,7]);
randomItem([1,2,3,4,5,6,7]);*/



//Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.
/*function isPrime(num){
if(num<=1) {
return false;
}
for(let i=2;i<=Math.sqrt(num);i++){
if(num%i===0){
return false;
}}
return true;
}
function interval(a,b) {
let result=[];
let counter=0;
while(counter < b) {
if(isPrime(a)) {
result.push(a); 
counter++;
}
a++;
}
return result;
}
console.log(interval(2,10));*/



//Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвращать их сумму.
/*function nums(...num){
    let result=num.reduce((a,b)=>a+b);
    console.log(result)
}
nums(1,2,3)*/



//Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел.
/*function randomNumber(a,b){
let result=[];
while(result.length<(b - a + 1)){
let randomNum=Math.floor(Math.random()*(b-a+1))+a;
if(!result.includes(randomNum))
result.push(randomNum);
}
console.log(result);
}
randomNumber(2,6);*/



//Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись.

function randomNumber(a,b){
let result=[];
while(result.length<(b - a + 1)){
let randomNum=Math.floor(Math.random()*(b-a+1))+a;
if(!result.includes(randomNum))
result.push(randomNum);
}
console.log(result);
}
randomNumber(2,20);