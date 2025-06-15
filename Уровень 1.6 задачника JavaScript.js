/*Дан массив с числами. Найдите сумму квадратов элементов этого массива*/

//let sum=0;
//let number = [1,2,3,4,5];
/*
for(let i=0;i<number.length;i++){
sum +=number[i]*number[i]
   console.log(sum) 
}*/
/*
for(let item of number ){
   sum+=item*item
   console.log(sum)
}*/
/*
number.forEach(function(item){
   sum+=item*item
   console.log(sum)
})*/

/*Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.*/

/*for(let i of number){
   sum+=Math.sqrt(i)
   console.log(sum)
}*/

/*Дан массив с числами. Найдите сумму положительных элементов этого массива.*/
//while(true)){
  // console.log("g")}
  /*let summ=0
  for(let i of number){
if(number[i]>0){
   sum+=sum+number[i]
   console.log(sum)
}else{
   if(summ+=number[i]){
      console.log(summ)
   }
   console.log(sum)
  }
*/
/*
let summ=0
for(let i of number){
   if(i>0){
      sum+=i
   console.log(sum)}else{
      summ+=i
      console.log(summ)
   }
}*/
/*Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.*/
let sum =0;
let mas = [1,17,-9,21,7];

for(let element of mas){
   if(element>0&&element<10){
      sum+=element;
      console.log(sum)
   }
}

