//Дана строка. Проверьте, что эта строка состоит только из цифр.

let str="a12345"
/*for(let i=0;i<str.length;i++){
   let digit=/\d/.test(str[i])
   if(digit){
      console.log(true)
   }else{
      console.log(false)
   }
}*/

//Дана строка. Проверьте, что эта строка состоит только из четных цифр.
/*for(let i=0;i<str.length;i++){
   if(str[i]%2===0){
     console.log("четное") 
   }else{console.log(false)}
}*/

//Дан массив со числами. Удалите из него числа, имеющие два и более нуля.
/*let arr=[1, 20,300,3000];
let number =0
for(let i=0;i<arr.length;i++){
   if(arr[i].toString().includes("00")){
      arr.splice(i,1)
      i--
   }
}
console.log(arr)*/

//Найдите все числа от 1 до 1000, сумма цифр которых равна 13.
/*let tragetSum=13
let maxNumber=1000
let result=[]
for(let i=1;i<=maxNumber;i++){
   let sum=0;
   let num=i
   while(num>0){
      sum+=num%10
      num=Math.floor(num/10)
   }
   if(sum===tragetSum){
      result.push(i)
   }
}
console.log(result)*/

/*Сформируйте с помощью циклов следующий массив:
[
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]*/
let result=[]
for(let i=1;i<=1;i++){
  let n=[]
  let p=[]
  let k=[]
  for(let j=1;j<=3;j++){
   n.push(j)
  }
  for(let q=4;q<=6;q++){
   p.push(q)
  }
  for(let e=7;e<=9;e++){
   k.push(e)
  }
  result.push(n,p,k)
}
console.log(result)
