//Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.

/*function search(arr){
  let result= arr.filter((value,index,self)=>
   self.indexOf(value)===index)
   console.log(result)
}*/
//search([1,2,2,3,4,5,6,7])

//Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз.
/*function removeDup(arr){
  const counts={};
  arr.forEach(value =>{
    counts[value] = (counts[value]||0)+1})
    return  arr.filter(value =>
     counts[value] <=3)
  
}
let result=removeDup([1,2,2,2,2,3,4,])
console.log(result)*/

//Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы.
/*function mas(arr){
  let result=[]
  //arr.toStrung()
   for(let i=0;i<arr.length;i++){
    if(arr[i]!=arr[i+1]){
      result.push(arr[i])
    }
   }
   console.log(result)
}
mas([1,1,2,3,2,3,4])*/
//или
/*function mas(arr){
let result=arr.filter((item,index)=>
item!==arr[index+1])
console.log(result)
}
mas([1,2,2,3,4,])*/

//Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта:
/*{
	max: 9,
	min: 1,
}*/
function minMax(arr){
let result={}
let sort=arr.sort((a,b)=>a-b);
result.max=sort[sort.length-1];
result.min=sort[0]
console.log(result)
}
minMax([1,4,6,2,7,8,6,3])

