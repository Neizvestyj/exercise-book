//Сделайте функцию, которая параметром будет принимать число и удалять из него нули.
/*function serch(number){  
 let result=number.toString().split("")
 for(let i=0;i<result.length;i++){
   if(result[i]==="0"){
      result.splice(i,1)
      i--
   }
 }
 console.log(parseInt(result.join("")))
}
serch(1023)
*/
//Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
/*function numSum(number){
  let result=0;
let num=number.toString().split("")
for(let i=0;i<num.length;i++){
  result+=parseInt(num[i])
 // console.log(num)
}
console.log(result)
}
numSum(123)*/

//Сделайте функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет.

/*function serchDate(dataString){
let dataStr=new Date(dataString);
let dateReal = new Date();
let dataStrMil=dataStr.getTime();
let dateRealMil=dateReal.getTime();
let difTime=(dataStrMil-dateRealMil)
let result=Math.ceil(difTime/(1000*3600*24))
if(result<0){
  console.log(`Прошло ${Math.abs(result)}`)
}else{
  console.log(`Дата ${dataString} наступит через ${result} дней`)
}
}
serchDate("2024-08-31")*/

//Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
/*function get(year){
  let date = new Date(year, 1,29);
  return date.getDate()===29 ? true:false
}*/
//console.log(get(2024))

//Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.

/*let result=[]
function getSum(){
  for(let i=1914;i<2024;i++){
    let date =new Date(i,1,29)
    if(date.getDate()===29){
      result.push(i)
    }
  }
  console.log(result)
}
getSum()*/
//Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.

/*function serchDate(){
let day= new Date()
let curentDay=day.getDate()
let dateYear = new Date().getFullYear();
let month=new Date().getMonth()+1;
let monthInDay= new Date(dateYear,month,0).getDate()
let result= monthInDay-curentDay;
return result
//console.log(result)
 }
console.log(serchDate())
*/
/*Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:
{
	next: 'пн',
	curr: 'вс',
	prev: 'сб',
}*/
function threDay(){
  let result={}
  let dayOfWeeks=["Sunday", "Monday",
"Tuesday", "Wednesday", "Thursday", "Friday",
"Saturday"];
  let day = new Date();
  let dayA = dayOfWeeks[(day.getDay()+1)%7];
  result.next=dayA
  let dayB = dayOfWeeks[day.getDay()];
  result.curr=dayB
  let dayC = dayOfWeeks[(day.getDay()-1+7)%7]
  result.prev=dayC
  console.log(result)
}
threDay()