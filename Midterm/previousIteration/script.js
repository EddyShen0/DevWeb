//content took reference to Claude AI
const editSpans = document.querySelectorAll('.editSpans');

const one = document.getElementById('one')
const oneOriginal = "large"
one.innerHTML= oneOriginal
const two = document.getElementById('two')
const twoOriginal = "ship"
two.innerHTML= twoOriginal

const originalValues = {
    'one' : oneOriginal,
    'two' : twoOriginal
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
    inputBox.maxLength = 8;
    inputBox.id = 'inputBox';
    span.innerHTML = '';
    span.appendChild(inputBox);
    inputBox.focus()
    
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
        if(span.innerHTML == "Eddy"){
            console.log("GENIUS")
        }
    }

    //prevent the typing of space within the box
    inputBox.addEventListener('keydown', function(event) {
        if (event.key === " ") {
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