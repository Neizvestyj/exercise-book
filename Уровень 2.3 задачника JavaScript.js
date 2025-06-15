
/*Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.*/
//let a = "string";
//let b = "king"
/*if(a[a.length-1]===b[0]){ 
   console.log(true)}else{
      console.log(false)
   
}*/
//или
/*console.log(a[a.length-1]===b[0]?true:false)
*/
/*Дана некоторая строка. Найдите позицию третьего нуля в строке.*/
/*let a = "string 0 0 0 ";
//console.log(a.lastIndexOf("0"));
let b = a.indexOf("0");
let c = a.indexOf("0",b +1)
console.log(a.indexOf("0",c + 1))*/

/*Даны числа, разделенные запятыми:
Найдите сумму этих чисел.*/
/*let string = "12,34,56";

let n = string.split(",")
n=n.map(Number)
n=n.reduce((prev,curr) =>prev+curr)
 console.log(n)
 //или так 
 console.log("12,34,56".split(",").map(Number).reduce((prev,cur)=>prev+cur))
*/

//Дана дата в следующем формате:
let d ="2025-12-31"
let data={}
//Преобразуйте эту дату в следующий объект:
/*{year: '2025',
 month: '12',
 day: '31',}*/
 d=d.split("-")
 data.year = d[0];
 data.month = d[1];
 data.day = d[2]
 console.log(data)

 
