//for of loop
let total=0
let marks=[85,97,44,37,76,60]
for(let mark of marks){
    total+=mark
}
avg=total/marks.length
console.log(avg)

//for of loop
let i=0
let price=[250,645,300,900,50]
for(let el of price){
    let offer=el/10
    price[i]=price[i]-offer
    console.log(price[i])
    i++
}