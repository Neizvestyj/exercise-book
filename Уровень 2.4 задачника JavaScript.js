/*Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.*/
//let string = "a1b2c3d4";
//console.log( parseInt(string))

//for(let i = 0;i<string.length;i++){
  // if(typeof i =="number"){
//console.log(string.search(/\d/));   
  // }

/*Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.*/
/*
let obj = {
  a:"string",
  b:12345
}
let obj1={}
let obj2={}
for(let key in obj){
  obj1[key] = obj
  obj2[key] = obj[key]
  
}
console.log(obj1,obj2)*/

/*Дано число. Выведите в консоль количество четных цифр в этом числе.*/
/*
let number = 123456789;
let n=0;
for(let i=0;i<9;i++){
if( parseInt(number.toString()[i])%2==0)
n++;
}
console.log(n)*/

/*Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:*/
/*
let string = "abcde"
let strings = ""
for(let i =0;i<string.length;i++){
  let char = string[i]
  if(i%2==0){
    strings+= char.toUpperCase()
  }else{
    strings+=char
  }
  console.log(strings)
}*/
/*Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:*/

 let str ="aaa bbb ccc"
 let a=str.split(" ")
 let result =a.map(a => a[0].toUpperCase()+a.slice(1).toLowerCase()).join(" ");
 console.log(result)





