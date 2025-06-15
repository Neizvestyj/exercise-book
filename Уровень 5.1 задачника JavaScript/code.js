//Даны два инпута, абзац и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите в абзац сумму этих чисел.

document.getElementById("btn")?.addEventListener("click",()=>{
const inputName1=document.getElementById("name1") as HTMLInputElement|null
const inputName2=document.getElementById("name2") as HTMLInputElement|null

if(inputName1&&inputName2){
const inputValue1=+inputName1.value;
const inputValue2=+inputName2.value;
const result= document.getElementById("result")as HTMLParagraphElement|null

let results=inputValue1+inputValue2

document.getElementById("result").innerHTML= results+"<br>"
}
})