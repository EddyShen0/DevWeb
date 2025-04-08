function isLong(city){
    return city.length>8;
}
const cities = ["London", "Liverpool","Edinburgh"]
const longer = cities.filter(isLong)

const data = "Shanghai,Shenzhen,Beijing,Guangzhou,Chongqing"
const split = data.split(",")
console.log(longer)

let foods = ["apple", "mango", "banana", "durian","pineapple","pear","cherry","orange"]

foods.shift()
const index = foods.indexOf("banana")
foods.splice(index,2)


let filtered = foods.filter(foods => foods.startsWith("p"))

while(foods.length>3){
    foods.shift()
}
foods.sort()
console.log(foods)
console.log(filtered)

var z = 2.25
var zrf = Math.floor(z)
console.log(zrf)
var zrc = Math.ceil(z)
console.log(zrc)

var r = Math.round(Math.random())
console.log(r)

// if(r == 0){
//     alert("no")
// } else {
//     alert('yes')
// }

function randomRange(min,max){
    var rn = Math.round(Math.random()*(max-min)+min)
    console.log(rn)
}

function randomRange2(max){
    var rn2 = Math.round(Math.random()*(max))
    console.log(rn2)
}

randomRange(3,5)
randomRange2(100)