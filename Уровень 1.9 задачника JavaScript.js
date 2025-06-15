/*Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.*/
let str =["gghjgg","sgah","http://.gdhs","index.html", "html"]
/*
let string = str.filter(item=>item.startsWith("http:"))
console.log(string);
//или indexOf даст 2
*/
/*Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html*/
/*
let string = str.filter(item=>item.endsWith("html"));
console.log(string);
*/
/*Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
*/

let number = [12,32,64]
/*
let numbers = number.map(element=>(element*110)/100);
console.log(numbers)*/
//или так 
number.forEach((element,index)=>{ number[index] = (element*110)/100)
})
console.log(number)






