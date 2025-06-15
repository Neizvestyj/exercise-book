//4.6
//Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день, и определять, существует ли такая дата или нет.
/*function data(n){
    let newDate=new Date(n);
    console.log(!isNaN(newDate.getTime()))
}
data("2024-03-32")*/

//Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами.
/*function randomString(n){
    let letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","w","q","y"];
    let result=""
    for(let i=0;i<n;i++){
    let randomIndex=Math.floor(Math.random()*letters.length);
    
    
       result+=letters[randomIndex]
    }
    console.log(result)
}
randomString(7)*/

//Сделайте функцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов.

/*function uper(strings){
    let result=""
    let words=strings.split(" ");
    for(let word of words ){
result+=word.charAt(0).toUpperCase()
    
    }
    console.log(result)
}
uper("gydhsjs jdhd djdjdjd eueie")*/

//Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей.
/*function array(arr){
    let n=[]
    let result=[]
    for(let item of arr){
        
        for(let i=1;i<=item;i++){
            if(item%i===0){
                n.push(i)
            }
        } 
        
    result.push(n)
    }
    console.log(result)
}
array([1,2,3,4]);*/

/*Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде следующего объекта:

{
	d: 12,
	h: 10,
	m: 59,
	s: 59,
}
*/

function sec(num){
   let result ={}
   result.d=parseInt(num/1000/3600/24)
   result.h=parseInt(num/1000/3600)
   result.m=parseInt(num/1000/60)
   result.s=num/1000
   console.log(result)
}
sec(3400000000
