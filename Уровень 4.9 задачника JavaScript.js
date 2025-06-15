//Сделайте функцию, которая будет возвращать сколько дней осталось до ближайшего 29 февраля.
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
serchDate("2025-02-28")*/

//Сделайте функцию, которая будет возвращать дату следующей масленницы, которая празднуется в последнее воскресенье зимы.
/*function serchDay(){

let dates= new Date("2025-02-28");
let daysOfweek=["вс","пн","вт","ср","чт","пт","сб"];
let sunday=daysOfweek[dates.getDay()];

if(sunday==="вс"){
    console.log(sunday)
    
}else{
  let prevIndex = (dates.getDay()+6)%7
console.log(daysOfweek[prevIndex])
//console.log(dates)
}
}
serchDay()*/

//Сделайте функцию, которая будет возвращать случайный цвет.

/*function color (){
    let colors = ["синий","красный","черный","желтый","зеленый"];
    let random= Math.floor(Math.random()*colors.length)
    console.log(colors[random])
}
color()*/

//Сделайте функцию, которая параметром будет принимать двухмерный массив чисел и возвращать массив максимальных чисел в каждом подмассиве.
let arrs=[[1,2,3],
          [4,5,6]
         ]
function arr(arrs){
    let result=[];
    for(let item of arrs){
    result.push(Math.max(...item))
    }
    console.log(result)
}
arr(arrs)

