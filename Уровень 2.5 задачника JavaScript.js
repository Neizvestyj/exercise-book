/*Дана некоторая строка, например, вот такая:
Получите массив позиций всех нулей в этой в строке.*//*
let string="023m0df02dfg0";
let index = []
for (let i =0;i<string.length;i++){
   if(parseInt(string[i])===0)
   index.push(i)
}
console.log(index)*/
/*Дана некоторая строка:
Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:*/

//let str = "abcdefg"
//'abdeg'
/*str = str.split("")
str.splice(2,1)
str.splice(4,1)
console.log(str.join(""))*/
//или так 
/*let res=""
for (let i = 0;i<str.length;i++){
   if((i+1)%3!=0){ 
      res+=str[i]

console.log(res)
}}*/
/*Дан некоторый массив, например, вот такой:
Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.*/
let arr = [1, 2, 3, 4, 5, 6];
let a = 0;
let b = 0;
for(let i=0;i<arr.length;i++){
   if((i+1)%2==0){
      a+=arr[i]
   }else{
      b+=arr[i] 
   }
   let result = a/b
   console.log(result)
}

