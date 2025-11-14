// var age=prompt("Enter your age:")
// if(age<18){
//     document.write("You are Minor")
// }
// else if(age>=18 ||age<=59){
//     document.write("You are Adult")
// }
// else if(age>=60){
//     document.write("you are a senior citizen")
// }
// else{
//     document.write("invalid age")
// }

// var num1=parseFloat(prompt("enter the 1st val:"))
// var num2=parseFloat(prompt("enter 2nd value:"))
// var opt=(prompt("enter the operator(+,-,*,/,%):"))
// if(opt=="+"){
// document.write(num1+num2)
// }
// else if(opt=="-"){
//     document.write(num1-num2)
// }
// else if(opt=="*"){
//     document.write(num1*num2)
// }
// else if(opt=="/"){
//     document.write(num1/num2)
// }
// else if(opt=="%"){
//     document.write(num1%num2)
// }
// else{
//     document.write("invalid operator")
// }

// var day=prompt("enter num b/w (1-7)")
// if(day==1){
//   document.write("monday")  
// }
// else if(day==2){
//     document.write("tuesday")
// }
// else if(day==3){
//     document.write("wednesday")
// }
// else if(day==4){
//     document.write("thursday")
// }
// else if(day==5){
//     document.write("friday")
// }
// else if(day==6){
//     document.write("saturday")
// }
// else if(day==7){
//     document.write("sunday")
// }
// else{
//     document.write("invalid day ")
// }

//----------------leap year-----------------------------------------
// var year=prompt("enter the year to find whether leap or not:")
// if(year%4==0){
//     document.write(year," is a leap year")
// }
// else if(year%100==0){
//     document.write(year," is a leap year")
// }
// else if(year%400==0){
//     document.write(year," is a leap year")
// }
// else{
//     document.write(year," is not a leap year")
// }

//------------------triangle----------------------------------------
// var a=parseFloat(prompt("enter 1st angle:")) 
// var b=parseFloat(prompt("enter 2st angle:"))
// var c=parseFloat(prompt("enter 3st angle:"))
// if(a+b+c==180){
//   document.write("triangle can be formed")
// }
// else{
//     document.write("not possible to form a triangle")
// }

// //----------------triangle sides---------------------
// var a=parseFloat(prompt("enter 1st side length:")) 
// var b=parseFloat(prompt("enter 2nd side length:"))
// var c=parseFloat(prompt("enter 3rd side length:"))
// if(a+b>c || a+c>b ||b+c>a ){
//     if(a==b==c){
//         document.write("It is equilateral triangle")
//     }
//     else if(a==b || b==c || c==a){
//         document.write("isosceles")
//     }
//     else{
//         document.write("scalene")
//     }
// }
// else{
//     document.write("triangle cannot be found")
// }
// //-------------senior citizen--------------------------

// var el=prompt("enter age:")
// if(el>=60){
//     document.write("eligible for senior citizen ship")
// }

// //----------temparature-------------------------------
// var tem=prompt("enter temperature:")
// if(tem<0){
//     document.write("its freezing")
// }
// else if(tem==0 ||tem<=10){
//     document.write("Very cold")
// }
// else if(tem>=11 || tem<=20){
//     document.write("cold")
// }
// else if(tem>=21 || tem<=30){
//     document.write("warm")
// }
// else{
//     document.write("Hot")
// }

// //---------------multiple of 10-------------
// var num=prompt("enter a value:")
// if(num%10==0){
//     document.write("its multiple of 10")
// }
// else{
//     document.write("its not a multiple")
// }

// //-------------marks---------------------
// var marks=prompt("enter marks:")
// switch(true){
//     case marks<=100 && marks>75:
//         grd="grade A"
//         break;
//     case marks>=50 && marks>=75:
//         grd="grade B"
//         break;
//     case marks>=0 && marks>=49:
//         grd="grade c"
//         break;
//     default:
//         grd="in.valid marks"
//         break;
// } 
// document.write(grd)

//fn parameters
// function ari(a,b){
//     return a+b
//     // return a-b
// }
// document.write(ari(12,4))
// document.write(ari(2,6))
// let sports=["soccer","volleyball"]
// sports.push("hockey","tennis")
// // sports.pop()
// // sports.shift()
// // document.write(sports)
// let team=[10,20,30,40,"tharak","kusal"]
// console.log(team)
// var myteam=team.join("->")
// console.log(myteam)

// let num=[1,2,3,4,5,"tharak","bharath"]
// document.write(num.slice(0,3),"<br/>")
// num1=num.slice(3,5)
// document.write(num1,"<br/>")
// document.write(num.indexOf(4))
var str="tharak"
document.write(str.toUpperCase(),"<br>")
document.write(str.toLowerCase(),"<br>")
document.write(str.charAt(),"<br>")
document.write(str.indexOf("t"),"<br>")
document.write(str.lastIndexOf("a"),"<br>")
var sen="Im very good enough"
document.write(sen.includes("good"))