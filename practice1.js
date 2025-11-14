// var hour=5
// console.log(hour)
// var weekdays=7
// console.log(weekdays)
// var weekstudy=hour*weekdays
// console.log(weekstudy)
// var favclr="red"
// console.log(favclr)
// let age=22
// console.log(age)
// const pi=3.14159
// console.log(pi)
// var arr=["apple","aptitude","alphabet","arrange"]
// console.log(arr)
// var details={name:"tharak",Id:"244m1foo58",age:22,city:"chittoor"}
// console.log(details)
// const name="TharakaVenkateswar"
// var age=22
// var  student=age<25
//  var fav
//   var project=null
//  console.log(name)
//  console.log(age)
//  console.log(student)
//  console.log(fav)
//  console.log(project)
// var cap="king Kohli"
// var game="cricket"
// if(game=="cricket"){
//     document.write("match maker is ",cap)
// }

// var num=prompt("enter num:")
// if(num%2==0){
//     document.write(num," is even")
// }
// if(num%2!=0){
//     document.write(num," is odd","<br/>")
// }
// var age=prompt("enter age: ")
// if(age>18){
//     document.write("<br>",age," is adult age")
// }

// var num=23
// if(num>0){
//     document.write(num,"is positive")
// }
// else if(num<0){
//     document.write(num,"is negative")
// }
// else{
//     document.write(num,"is zero")
// }

// var x=prompt("enter 1st value:")
// var y=prompt("enter second value:")
// var z=prompt("enter third value:")
// if(x>y && x>z){
//     document.write(x,"is greater")
// }
// else if(y>z){
//     document.write(y,"is greatest")
// }
// else{
//     document.write(z,"is gretaest")
// }

// var num1=prompt("enter the number:")
// if(num1%3==0){
//     document.write(num1,"is divisible by 3")
// }
// else if(num1%5==0){
//     document.write(num1,"is divisible by 5")

// }
// else if(num1%3==0 && num1%5==0){
//     document.write(num1,"is divisible by both 3 and 5")
// }
// else{
//     document.write(num1,"is not divisible by both")
// }

// var scr=prompt("enter your score b/w 0-100:")
// if(scr<=100 && scr>=90){
//     document.write(scr," is GRADE A")
// }
// else if(scr<=89 && scr>=80){
//     document.write(scr," is GRADE B")
// }
// else if(scr<=79 && scr>=70){
//     document.write(scr," is GRADE C")
// }
// else if(scr<=69 && scr>=60){
//     document.write(scr," is GRADE D")

// }
// else if(scr<=59 && scr>=0){
//     document.write(scr," is GRADE F")
// }

var username=prompt("enter username:")
var password=prompt("enter password:")
var username1="Tarak"
var password1="Tarak150"
if(username==username1 && password==password1){
    document.write("WELCOME!!!")
}
else if(username==username1 || password!=password1){
    document.write("invalid password")
}
else if(username!=username1 || password==password1){
    document.write("invalid user name")
}
else{
    document.write("invalid username and password")
}