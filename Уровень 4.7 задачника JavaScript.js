//Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.
/*function string(strings){
    let n=strings.split(" ")
    n.sort((a,b)=>a.localeCompare(b));
    console.log(n.join(" "))
}
string("Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.")*/
//Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.
/*function array(arr1,arr2){
    let charSet = new Set();
    let dublecates = new Set();
    for (let i=0;i<arr1.length;i++){
        if(arr2.includes(arr1[i])){
            dublecates.add(arr1[i])
        }else{
            charSet.add(arr1[i])
        }
    }
    return Array.from(dublecates);
}
console.log(array([1,2,3,4,5],[4,5,6,7,8,9,10]))*/
/*function array(arr1,arr2){
    return arr1.filter(item=>
        arr2.includes(item))
}
console.log(array([1,2,3,4],[4,5,6,7]))*/


//Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.
/*function random(){
    let prevResult=null;
    let curResult;
    do{
        curResult=Math.floor(Math.random()*100);
    }while(curResult===prevResult);
    prevResult=curResult;
    console.log(curResult)
}
random()
random()
random()*/

//Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:

let arr = [1, 2, 3, 4, 5];

/*func(arr, 1); // 2
func(arr, 4); // 5
func(arr, 5); // 1*/

/*function search(arr,num){
    let index=arr.indexOf(num)
    if(num===arr.length){
        console.log(arr[0])
    }else{
    console.log(arr[index+1])
    }
}
search(arr,4)*/

function search(arr,num){
let index = arr.indexOf(num);
if(index=-1){
return error}
if(index===arr.length-1){
return arr[0];
}else{
return arr[index+1]
}
}
console.log(search(arr,3))