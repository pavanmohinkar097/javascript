document.write("Hi Guys")

// let a=setTimeout(function(){
//     alert("I am settiimeout inside")
// },2000)
// let p=prompt("do you want run settimeout")
// if("no"==p){
//     clearTimeout(a)

// }

// console.log(a)

let sum = (a, b) => {
    console.log("I am running" + (a + b))
    a + b
}
setTimeout(sum, 1000, 1, 2)


setInterval(function(){
    alert("Hi chomanya")
},2000)