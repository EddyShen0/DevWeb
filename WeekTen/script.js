let x,y,z;
let name, age, coding
name = "Eddy"
age = "20000000"
coding = "true"
var box = document.getElementById("wordBox")
x = 100;
y = 5;
z = 20;
var word1 = "omg"
let fruit = "banana"
document.getElementById("phrase").innerHTML = "Eat " + fruit
var word = "Fool"

function sumValues(a, b) {
    let c = a + b;
    alert("the sum of a and b is " + c);
}

var isOn = true

function switchOff(){
if(isOn == true){
    alert("the light is ON")
    isOn = false
} else {
    alert("the light is OFF")
    isOn = true
}
}


var original

original = "TYPE HERE"
console.log(original)

box.onclick = function(){

    const inputBox = document.createElement('input');
    inputBox.type = 'text'
    inputBox.value = original
    box.innerHTML = '';
    box.appendChild(inputBox)
    inputBox.focus();

    inputBox.addEventListener('blur',function(){
        original = inputBox.value
        box.innerHTML = '';
        box.innerHTML = original
    })
}




console.log(Math.sin(4))
console.log("HELLO WORLD")
document.getElementById("alertButton").onclick = function(){
    alert("hello")
}
document.getElementById("first").innerHTML = "the font size of this text is " +  z + " px"
document.getElementById("first").style.fontSize = z + "px"

document.getElementById("increaseSize").onclick = function(){
    z += 1;
    console.log(z);
    document.getElementById("first").style.fontSize = z + "px"
    document.getElementById("first").innerHTML = "the font size of this text is " +  z + " px"
}

document.getElementById("decreaseSize").onclick = function(){
    z -= 1;
    console.log(z);
    document.getElementById("first").style.fontSize = z + "px"
    document.getElementById("first").innerHTML = "the font size of this text is " +  z + " px"
}
document.getElementById("first").style.color="rgb(" + 155 + "," + 155 + "," + 255 + ")"

document.getElementById("theWord").innerHTML = word

document.getElementById("practice").innerHTML = "Hello, my name is " + name + " I am "
 + age +
 " years old and I am "
 + "and I can code Javascript: " + coding + ""
