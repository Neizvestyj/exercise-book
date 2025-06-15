/*Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.*/
/*let str = "1a2b3c4d"
let result=[]
for(let i=0;i<8;i++){
if(str[i].search(/\d/)==0)
result.push(i)
}
console.log(result)*/

/*Дан массив с некоторыми числами, например, вот такой:
Напишите код, который перевернет числа в этом массиве по следующему принципу: 
[321, 654, 987]
*/
//let number = [123, 456, 789];
/*let n = 0;
let result=[]
for(let i=0;i<number.length;i++){
n = number[i].toString().split("").reverse().join("");
result.push(parseInt(n))
console.log(result)
}*/
/*let result = number.map(num=>parseInt(num.toString().split("").reverse().join("")))
console.log(result)*/

/*Дана некоторая строка с числом:
Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:*/
//"1 234 567"
//let number ="1234567"
//let result=[]
/*number=number.split("").join("")
console.log(number)
//console.log(number.splice(0,1," "))*/

/*for(let i =0;i<number.length;i++){
if(number[i]==="1"){
   result.push(1+" ")
   console.log(result)
}else if(number[i]==="4"){
   result.push(4+" ")
  // console.log(result)
}else{
   result.push(number[i])
   //console.log(result)
}
//console.log(result)
}
console.log(result.join(""))*/
/*Дана некоторая строка:
Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:
'aBcDe'*/
/*
let str ="AbCdE"
let result="";
for(let i=0;i<str.length;i++){
if(/[A-Z]/.test(str[i])){
 result+=str[i].toLowerCase()
}else{
   result+=str[i].toUpperCase()
}
}
//console.log(result)
//или так 
for(char of str){
   if(char===char.toUpperCase()){
      result+=char.toLowerCase()
   }else{
      result+=char.toUpperCase()
   }
}
console.log(result)*/

/*Дан некоторый массив с числами, например, вот такой:
Слейте пары элементов вместе:
[12, 34, 56]*/

//let arr = [1, 2, 3, 4, 5, 6];
//let result=[];
/*
for(let i=0;i<arr.length;i+=2){
result.push(arr.slice(i ,i+2))
//arr.push(result[i].join(""))
}
let arrr =[]
for(let j=0;j<result.length;j++){
arrr.push(result[j].join(""))
}
console.log((arrr))
//console.log(arr[0])*/
//или так 

/*for(let i=0;i<arr.length;i+=2){
result.push(arr[i]*10+arr[i+1])
console.log(result)
}*/

/*Дана некоторая строка со словами:
Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее:
'aaa Bbb ccc Eee fff'*/
let str ="aaa bbb ccc eee fff"
let st =""
//console.log(str.split(","))
//console.log(str[4].toUpperCase())
for(let i=1;i<str.length;i+=2){
st = str.split("")
st[4]=st[4].toUpperCase()
st[12]=st[12].toUpperCase()
console.log(st.join(""))
}




