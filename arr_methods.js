//other array methods

//splice method
let companyNames=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
console.log(companyNames)
console.log(companyNames.shift())
updated=companyNames.splice(1,1,"Ola")
console.log(companyNames)
console.log(`deleted ${updated}`)
companyNames.push("Amazon")
console.log(companyNames)

//map()
let arr=[4,5,2,3,1]
let newarr=arr.map((val) => {
    return val*val
})
console.log(newarr)

//filter()
let arr1=[4,5,2,3,1]
let newarr1=arr1.filter((val) => {
    return val%2===0
})
console.log(newarr1)

//reduce()
let arr2=[4,5,2,345,1,200]
let newarr2=arr2.reduce((prev,curr) => {
    return prev > curr?prev:curr
})
console.log(newarr2)

//task
let marks=[98,95,80,99,67,45,88]
let newarr3=marks.filter((val) => {
    return val>=90
})
console.log(newarr3)

//task
let num=prompt("Enter a number:")
console.log(num)
let arr3=[]
for(let i=1;i<=num;i++){
    arr3[i-1]=i
}
let redarr=arr3.reduce((prev,curr) => {
    return prev+curr
})
let product=arr3.reduce((prev,curr) => {
    return prev*curr
})
console.log(arr3)
console.log(redarr)
console.log(product)