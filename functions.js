//functions
function myfunc(msg){
    console.log(msg)
}
myfunc("I am studying JS");

function sum(a,b){
    s=a+b
    return s
}
let val=sum(5,4)
console.log(val)

//arrow functions
let arrfunct=(a,b) => {
    console.log(a+b)
}
arrfunct(3,8)

const printHello = () => {
    console.log("Hello");
}

//task
function strfun(vowels){
    let count=0
    for(let i of vowels){
        if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
            count+=1
        }
    }
    console.log(count)
}
strfun("I am good")
//with arrow function
let vowelsnum=(vowels)=>{
    let count=0
    for(let i of vowels){
        if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
            count+=1
        }
    }
    console.log(count)
}
vowelsnum("shawkath")

//functions
function myfunc(msg){
    console.log(msg)
}
myfunc("I am studying JS");

function sum(a,b){
    s=a+b
    return s
}
let val2=sum(5,4)
console.log(val2)

//arrow functions
let arrfunct1=(a,b) => {
    console.log(a+b)
}
arrfunct1(3,8)

const printHello1 = () => {
    console.log("Hello");
}

//task
function strfun(vowels){
    let count=0
    for(let i of vowels){
        if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
            count+=1
        }
    }
    console.log(count)
}
strfun("I am good")
//with arrow function
let vowelsnum1=(vowels)=>{
    let count=0
    for(let i of vowels){
        if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
            count+=1
        }
    }
    console.log(count)
}
vowelsnum1("shawkath")