/*Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.*/
/*
let str ="aBcDeF"
let n =0
for(let char of str){
   if(char===char.toUpperCase()){
      n++
   }
}
console.log(" заглавных букв на "+(n-2)+" больше")
*/
/*Дана некоторая строка:
Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:
'1 22 333 22 1'*/
/*let number="1 22 333 4444 22 5555 1"
let result= number.split(" ").filter(item=>item.length<=3).join(" ")
console.log(result)
*/

/*Даны два массива:
Слейте эти массивы в новый массив следующим образом:
[1, 2, 'a', 'b', 'c', 3]*/
let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
/*arr1.pop()
for(let i=0;i<arr2.length;i++){
arr1.push(arr2[i])
}
arr1.push(3)
console.log(arr1)*/
//или так 
let result=[...arr1.slice(0,2),...arr2,arr1[2]]
console.log(result)