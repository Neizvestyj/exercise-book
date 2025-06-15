//Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
function check(number){
   if(number<2){
      return false;
   }
   if(number===2){
     return  true
   }
   if(number%2===0){
      return false
   }
   for(let i=3;i<=Math.sqrt(number);i+=2){
      if(number%i===0){
         return false
      }
   }
   return true
}
console.log(check(11))




