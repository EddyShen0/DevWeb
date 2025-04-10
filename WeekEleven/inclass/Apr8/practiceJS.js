let main = document.getElementById("main")
function addMain(added){
    main.innerHTML += `<br> ${added}`
}

const grocery = ["chopsticks","toiletPaper","garbageBags","snacks"]
var joined = grocery.join(", ")
addMain(joined)

function FMA(mass,acceleration){
let force = mass*acceleration
addMain(`Assume an object with a mass of ${mass}kg and an acceleration rate of 5 m/s^2, <br> 
    what is the net force on this object?`)
addMain(`${mass} kg * ${acceleration} m/s^2 = ${force} N`)
}

function math1(a,b,c){
    addMain(`${a}/(${b}-${c})=${a/(b-c)}`)
}

FMA(10,5)
math1(5,12,7)