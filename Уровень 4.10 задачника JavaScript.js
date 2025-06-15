//Сделайте функцию, которая параметром будет принимать букву и проверять, это буква кириллицы или латиницы

/*function letters(char){
  let lang = char.charCodeAt(0);
  lang<=122?console.log("Латинская буква"):console.log("Бкувы на кириллице")
}
letters("m")*/

//Сделайте функцию, которая параметром будет принимать массив и перемешивать элементы этого массива в случайном порядке.
/*let arr=[1,2,3,4,5,6,7];
function ars(arr){
   return arr.sort(()=>Math.random()-0.5)
}
console.log(ars(arr))*/


/*let arr="Дан текст со словами. Запишите все слова этого текста в специальный объект. Ключами в этом объекте будут буквы, а значениями - массивы слов, начинающихся на эти буквы."
function arrs(arr){
  let result={}
  for(let item of arr){
      let firstChar=item[0].toLowerCase()
if(!result[firstChar]){
    result[firstChar]=[];
   }
   result[firstChar].push(item)
   }
   console.log(result)
}
arrs(arr.split(" "))*/

//Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей, являющихся простыми числами.

/*function array(num){
    let result=[]
     for(let i=1;i<=num;i++){
            if(num%i===0){
                result.push(i)}}
let primeFactor=result.filter(factor=>{
    if(factor<2) return false;
for(let i=2;i<=Math.sqrt(factor);i++){
if(factor%i===0) return false;}
return true;})
console.log(result)
console.log(primeFactor)}
array(12);*/


//Сделайте функцию, которая параметром будет принимать слово и возвращать массив его слогов.

function letters(string){
    let result=[];
 let gl =["а","о","л","э","е","я","и","ю"];
 for(let i=0;i<string.length;i++){
     let char = string[i];
     if(gl.includes(char)){
       result.push(char+"-")  
     }else{
         result.push(char)
     }
     
 }
 console.log(result.join(""))
}
letters("мандарин")