//content took reference to Claude AI
const editSpans = document.querySelectorAll('.editSpans');

const one = document.getElementById('one')
const oneOriginal = "red"
one.innerHTML= oneOriginal
const two = document.getElementById('two')
const twoOriginal = "sailboat"
two.innerHTML= twoOriginal
const three = document.getElementById('three')
const threeOriginal = "headphones"
three.innerHTML= threeOriginal
const four = document.getElementById('four')
const fourOriginal = "traffic-light"
four.innerHTML= fourOriginal
const five = document.getElementById('five')
const fiveOriginal = "Hello, this is the composition"
five.innerHTML= fiveOriginal
const text = document.getElementById('text')

const objectOne = document.getElementById('object1')
const objectTwo = document.getElementById('object2')
const objectThree = document.getElementById('object3')

const originalValues = {
    'one' : oneOriginal,
    'two' : twoOriginal,
    'three' : threeOriginal,
    'four' : fourOriginal,
    'five' : fiveOriginal
}
const objects = {
    'two' : objectOne,
    'three' : objectTwo,
    'four' : objectThree,
}

editSpans.forEach(i => {
    i.addEventListener('click', startEdit);
})

//input edit function
function startEdit(){
    const span = this;
    const inputBox = document.createElement('input');
    inputBox.type= 'text';
    inputBox.className = 'input';
    inputBox.value = span.textContent;
    if (span.id == 'one'|| span.id =='two'|| span.id =='three'|| span.id =='four'){
        inputBox.maxLength = 13;
    }
    inputBox.id = 'inputBox';
    span.innerHTML = '';
    span.appendChild(inputBox);
    inputBox.focus();
    
    //adjusting box length
    inputBox.style.width = (inputBox.value.length) + 'ch';
    inputBox.addEventListener('input',function(){
        this.style.width = (this.value.length) + 'ch'
    });

    //save content when click outside or press enter
    inputBox.addEventListener('keyup', function(event){
        if (event.key === "Enter"){
            inputBox.blur()
        }
        //real-time content update
        if(span.id == 'five'){
            text.innerHTML = inputBox.value
        }

        if(span.id == 'one'){
            if(inputBox.value == "red"){
                document.getElementById('block1').style.backgroundColor = "red"
                document.getElementById('block2').style.backgroundColor = "red"
                document.getElementById('block3').style.backgroundColor = "red"
            }
            if(inputBox.value == "orange"){
                document.getElementById('block1').style.backgroundColor = "orange"
                document.getElementById('block2').style.backgroundColor = "orange"
                document.getElementById('block3').style.backgroundColor = "orange"
            }
            if(inputBox.value == "yellow"){
                document.getElementById('block1').style.backgroundColor = "yellow"
                document.getElementById('block2').style.backgroundColor = "yellow"
                document.getElementById('block3').style.backgroundColor = "yellow"
            }
            if(inputBox.value == "green"){
                document.getElementById('block1').style.backgroundColor = "green"
                document.getElementById('block2').style.backgroundColor = "green"
                document.getElementById('block3').style.backgroundColor = "green"
            }
            if(inputBox.value == "blue"){
                document.getElementById('block1').style.backgroundColor = "blue"
                document.getElementById('block2').style.backgroundColor = "blue"
                document.getElementById('block3').style.backgroundColor = "blue"
            }
            if(inputBox.value == "purple"){
                document.getElementById('block1').style.backgroundColor = "purple"
                document.getElementById('block2').style.backgroundColor = "purple"
                document.getElementById('block3').style.backgroundColor = "purple"
            }
        }

        if(span.id == 'two'){
            if(inputBox.value == "sailboat"){
                objectOne.src = 'image/ship.png'
                objectOne.style.width = "200px"
                objectOne.style.top = "-40px"
                objectOne.style.left = "100px"
            }
            if(inputBox.value == "headphones"){
                objectOne.src = 'image/Headphones.png'
                objectOne.style.top = "90px"
                objectOne.style.width = "160px"
                objectOne.style.left = "100px"
            }
            if(inputBox.value == "traffic-light"){
                objectOne.src = 'image/light.png'
                objectOne.style.top = "80px"
                objectOne.style.left = "130px"
                objectOne.style.width = "90px"
            }
        }
        if(span.id == 'three'){
            if(inputBox.value == "sailboat"){
                objectTwo.src = 'image/ship.png'
                objectTwo.style.width = "160px"
                objectTwo.style.top = "-10px"
                objectTwo.style.left = "240px"
            }
            if(inputBox.value == "headphones"){
                objectTwo.src = 'image/Headphones.png'
                objectTwo.style.top = "30px"
                objectTwo.style.width = "200px"
                objectTwo.style.left = "210px"
            }
            if(inputBox.value == "traffic-light"){
                objectTwo.src = 'image/light.png'
                objectTwo.style.top = "10px"
                objectTwo.style.left = "250px"
                objectTwo.style.width = "115px"
            }
        }
        if(span.id == 'four'){
            if(inputBox.value == "sailboat"){
                objectThree.src = 'image/ship.png'
                objectThree.style.width = "260px"
                objectThree.style.top = "-20px"
                objectThree.style.left = "300px"
            }
            if(inputBox.value == "headphones"){
                objectThree.src = 'image/Headphones.png'
                objectThree.style.top = "150px"
                objectThree.style.width = "240px"
                objectThree.style.left = "280px"
            }
            if(inputBox.value == "traffic-light"){
                objectThree.src = 'image/light.png'
                objectThree.style.top = "120px"
                objectThree.style.left = "340px"
                objectThree.style.width = "130px"
            }
        }
    })
    
    inputBox.addEventListener('blur', pushContent)
 
    //prevent triggering edit function while editing by 
    //preventing the bubbling up of click event to parent span
    inputBox.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    //content saving and detection function
    function pushContent(){
        span.innerHTML = inputBox.value || originalValues[span.id];
        if(inputBox.value.length != 0){
            originalValues[span.id] = inputBox.value
        }
        if(span.id == 'five'){
        text.innerHTML = inputBox.value || originalValues['five'];
        }
        if(span.innerHTML == "Eddy"){
            console.log("GENIUS")
        }
    }

    //prevent the typing of space within the box
    inputBox.addEventListener('keydown', function(event) {
        if (event.key === " " && span.id != 'five') {
            event.preventDefault();
        }
    });

    //
    inputBox.addEventListener('keyup',function(event){
        if (inputBox.value.length == 8 && event.key != "Backspace"){
        console.log("exceed")
        }
        if(inputBox.value == "Eddy" && event.key != "Enter"){
            console.log("GENIUS")
        }
    })
}

let coverStats = 1

addEventListener('mouseup',function(){
    if(coverStats == 1){
        startComposition()
    }
})

function startComposition(){
    document.getElementById('cover').style.opacity = 0
    document.getElementById('introduction').style.opacity = 0
    setTimeout(function(){
        document.getElementById('cover').style.width = 0;
        document.getElementById('cover').style.height = 0
    },5000)

}
