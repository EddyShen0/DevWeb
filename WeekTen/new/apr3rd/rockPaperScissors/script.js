let randomNum = Math.floor(Math.random()*3)
const array = ["Rock","Paper","Scissors"]
let result = document.getElementById("result")
let ready = true
let restart = document.getElementById("restart")
let wins = document.getElementById("wins")
let losts = document.getElementById("losts")
wins.innerHTML = 0
losts.innerHTML = 0
let computer = document.getElementById("computer")

function start(num){
    let choice = num
    randomNum = Math.floor(Math.random()*3);
    ready = true;
    result.innerHTML = ""
    computer.innerHTML = ""
    restart.style.opacity= "0%"
    computer.innerHTML = array[randomNum]
if(ready == true){
if(choice===0){
    if(randomNum===0){
        result.innerHTML = "TIED!"
    }
    if(randomNum===1){
        result.innerHTML = "LOST!"
    }
    if(randomNum===2){
        result.innerHTML = "WON!"
    }
}
if(choice===1){
    if(randomNum===0){
        result.innerHTML = "WON!"
    }
    if(randomNum===1){
        result.innerHTML = "TIED!"
    }
    if(randomNum===2){
        result.innerHTML = "LOST!"
    }
}
if(choice===2){
    if(randomNum===0){
        result.innerHTML = "LOST!"
    }
    if(randomNum===1){
        result.innerHTML = "WON!"
    }
    if(randomNum===2){
        result.innerHTML = "TIED!"
    }


}
if(result.innerHTML == "TIED!"){
    result.style.backgroundColor="grey"
    result.style.color="white"
    
}else if
(result.innerHTML == "WON!"){
    result.style.backgroundColor="green"
    result.style.color="white"
    wins.innerHTML ++
}else{
    result.style.backgroundColor="red"
    result.style.color="white"
    losts.innerHTML ++
}

}

ready = false
console.log(ready)
restart.style.opacity= "100%"
}

function newGame(){
    wins.innerHTML = 0;
    losts.innerHTML = 0;
    randomNum = Math.floor(Math.random()*3);
    ready = true;
    result.innerHTML = ""
    computer.innerHTML = ""
    restart.style.opacity= "0%"
}

