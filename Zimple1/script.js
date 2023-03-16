// console.log(console)
// console.error("thisn is error")
// obj={a:1, b:2, c:3, d:5}
// console.table(obj)
// alert = ("Enter the value a!")
// let a = prompt("Enter value here","56")
// a=Number.parseInt(a)
// alert("You entered a of type" +(typeof a))
// document.write(a)

alert("Enter the value a!")
let a = prompt("Enter value here","56")
a=Number.parseInt(a)
alert("You entered a of type " +(typeof a))
let write=confirm("Do you want to write to the page")
if(write){
    document.write(a)
}
else{
    document.write("Please allow me to write")

}
document.write(a)