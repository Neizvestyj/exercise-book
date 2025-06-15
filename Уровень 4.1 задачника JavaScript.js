//Сделайте функцию, которая вернет текущий день недели словом.
//console.log(new Date())

/*function getDays(dateString){
   const daysOfWeek= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   const date = new Date(dateString);
   return daysOfWeek[date.getDay()];
}
console.log(getDays("2024/08/16"))*/

//Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.

//Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
/*function second(num){
   return num/(60*60*24)
}
console.log(second(86400))*/

//Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.

/*function fun(number, str){
   let result=""
   for(let i=0;i<number;i++){
      result+=str[i]
   }
   return result
}
console.log(fun(5,"string"))
*/
//Сделайте функцию, которая параметром будет получать дату, а возвращать знак зодиака, соответствующий этой дате.
/*function goroscop(dateString){
  let date = new Date(dateString)
  let month=date.getMonth();
  const zodiacSign=["Козерог","Водолей","Рыбы","Овен","Телец","Близницы","Рак","Лев","Дева","Весы","Скорпион","Стрелец"];
   for(let i=0;i<zodiacSign.length;i++){
      if(month===i){
      console.log(zodiacSign[i])
      }
   }
}
goroscop("2024/10/10")
//res("2024/10/10")*/

//Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.
/*
function sumDividor(number){
   let result=0;
  for(let i=0;i<number;i++){
   if(number%i===0){
result+=i;
   }
  }
  console.log(result)
}
sumDividor(12)*/

