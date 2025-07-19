//  querySelector
let el =document.querySelector("#heading")
console.log(el)
console.dir(document.body.firstChild)
let el1 = document.querySelector("div")
console.log(el1)

let el2 = document.querySelector("h2")
console.log(el2)

let heading = document.querySelector("h2")
console.log(heading.innerText)
heading.innerText=heading.innerText + " from Apna college students"

//  querySelectorAll
let div = document.querySelectorAll(".box")
div[0].innerText = "new value 1"
[1].innerText = "new value 2"
div[2].innerText = "new value 3"